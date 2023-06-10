import detectEthereumProvider from '@metamask/detect-provider'
import { type ExternalProvider, JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { getAddress } from 'ethers'
import { ETHEREUM_CHAIN, GNOSIS_CHAIN } from '~/config/config'

type WithEvents<T> = T & { on: (event: string, callback: (...args: any) => void) => void }

export default function useWallet() {
  const userAddress = ref<string | null>(null)
  const ensName = ref<string | null>(null)

  const activeChainIdHex = ref<string | null>()

  const externalProvider = ref<WithEvents<ExternalProvider> | null>(null)
  const provider = ref<Web3Provider | null>(null)
  const jsonRpcProvider = computed(() => new JsonRpcProvider(GNOSIS_CHAIN.rpcs[0]))
  const jsonRpcProviderETH = computed(() => new JsonRpcProvider(ETHEREUM_CHAIN.rpcs[0]))

  const isReady = computed(() => userAddress.value && provider.value && activeChainIdHex.value === GNOSIS_CHAIN.hexChainId)

  onMounted(async () => {
    connect()
  })

  async function connect() {
    disconnect()

    const metamaskProvider = await detectEthereumProvider() as WithEvents<ExternalProvider> // window.ethereum
    if (!provider) {
      alert('No metamask')
      return
    }

    // Get accounts
    const accounts = await metamaskProvider.request!({ method: 'eth_requestAccounts' })

    if (!accounts || accounts.length === 0)
      return

    userAddress.value = getAddress(accounts[0])

    ensName.value = await jsonRpcProviderETH.value.lookupAddress(userAddress.value)

    // Configure providers
    externalProvider.value = metamaskProvider
    provider.value = markRaw(new Web3Provider(metamaskProvider))

    // Event subscriptions
    externalProvider.value.on('accountsChanged', (acc: string[]) => userAddress.value = acc.length > 0 ? getAddress(acc[0]) : null)
    externalProvider.value.on('chainChanged', (chainId: string) => activeChainIdHex.value = chainId)
    externalProvider.value.on('disconnect', disconnect)

    // Get and set correct chain eagerly
    activeChainIdHex.value = await externalProvider.value.request!({ method: 'eth_chainId' })
    switchChain()
  }

  function disconnect() {
    if (provider.value)
      provider.value.removeAllListeners()

    userAddress.value = null
    externalProvider.value = null
    provider.value = null
  }

  async function switchChain() {
    if (!userAddress.value || !externalProvider.value || activeChainIdHex.value === GNOSIS_CHAIN.hexChainId)
      return

    try {
      await externalProvider.value.request!({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: GNOSIS_CHAIN.hexChainId }],
      })
    }
    catch (error: any) {
      if (error.code === 4902 || error.code === -32603) {
        await externalProvider.value.request!({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: GNOSIS_CHAIN.hexChainId,
              chainName: GNOSIS_CHAIN.name,
              nativeCurrency: {
                name: GNOSIS_CHAIN.nativeCurrency.name,
                symbol: GNOSIS_CHAIN.nativeCurrency.symbol,
                decimals: GNOSIS_CHAIN.nativeCurrency.decimals,
              },
              rpcUrls: GNOSIS_CHAIN.rpcs,
              blockExplorerUrls: GNOSIS_CHAIN.blockExplorers,
            },
          ],
        })
      }
    }
  }

  return {
    userAddress,
    ensName,
    activeChainIdHex,
    provider,
    jsonRpcProvider,
    jsonRpcProviderETH,
    isReady,
    connect,
    switchChain,
  }
}

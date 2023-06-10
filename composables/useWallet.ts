import detectEthereumProvider from '@metamask/detect-provider'
import { type ExternalProvider, Web3Provider } from '@ethersproject/providers'
import { getAddress } from 'ethers'
import { GNOSIS_CHAIN } from '~/config/config'

export default function useWallet() {
  const userAddress = ref<string | null>(null)
  const externalProvider = ref<ExternalProvider | null>(null)
  const provider = ref<Web3Provider | null>(null)
  const activeChainIdHex = ref<string | null>()

  const isReady = computed(() => userAddress.value && provider.value && activeChainIdHex.value === GNOSIS_CHAIN.hexChainId)

  onMounted(async () => {
    connect()
  })

  async function connect() {
    disconnect()

    const metamaskProvider = await detectEthereumProvider() as ExternalProvider // window.ethereum
    if (!provider) {
      alert('No metamask')
      return
    }

    const accounts = await metamaskProvider.request!({ method: 'eth_requestAccounts' })

    if (!accounts || accounts.length === 0)
      return disconnect()

    userAddress.value = getAddress(accounts[0])

    externalProvider.value = metamaskProvider
    provider.value = markRaw(new Web3Provider(metamaskProvider))

    activeChainIdHex.value = await externalProvider.value.request!({ method: 'eth_chainId' })

    // Event subscriptions
    provider.value.on('accountsChanged', (acc: string[]) => userAddress.value = acc.length > 0 ? getAddress(acc[0]) : null)
    provider.value.on('chainChanged', (chainId: string) => activeChainIdHex.value = chainId)
    provider.value.on('disconnect', disconnect)

    // Get and set
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
    provider,
    activeChainIdHex,
    connect,
    switchChain,
  }
}

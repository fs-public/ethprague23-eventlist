import detectEthereumProvider from '@metamask/detect-provider'
import type { Web3Provider } from '@ethersproject/providers'
import { getAddress } from 'ethers'

const rpc = {
  100: ['https://rpc.gnosischain.com'],
}

export default function useWallet() {
  const userAddress = ref<string | null>(null)
  const provider = ref<Web3Provider | null>(null)
  const signer = ref()

  onMounted(async () => {
    connect()
  })

  async function connect() {
    if (provider.value)
      provider.value.removeAllListeners()

    const metamaskProvider = await detectEthereumProvider() // window.ethereum
    if (!provider) {
      alert('No metamask')
      return
    }

    // @ts-expect-error: External type
    const accounts = await metamaskProvider!.request({ method: 'eth_requestAccounts' })

    if (!accounts || accounts.length === 0)
      return disconnect()

    userAddress.value = getAddress(accounts[0])

    provider.value = metamaskProvider as Web3Provider

    // Event subscriptions
    provider.value.on('accountsChanged', (acc: string[]) => userAddress.value = acc.length > 0 ? getAddress(acc[0]) : null)
    provider.value.on('chainChanged', () => {
      window.location.reload()
    })
    provider.value.on('disconnect', disconnect)
  }

  function disconnect() {
    userAddress.value = null
    provider.value = null
  }

  watch(userAddress, () => console.log(userAddress.value))

  return {
    userAddress,
    connect,
  }
}

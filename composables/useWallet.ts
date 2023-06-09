import detectEthereumProvider from '@metamask/detect-provider'
import type { Web3Provider } from '@ethersproject/providers'

const rpc = {
  100: ['https://rpc.gnosischain.com'],
}

export default function useWallet() {
  const userAddress = ref<string | null>(null)
  const provider = ref<Web3Provider | null>(null)

  onMounted(async () => {
    connect()
  })

  async function connect() {
    const metamaskProvider = await detectEthereumProvider() // window.ethereum
    if (!provider) {
      alert('No metamask')
      return
    }
    const accounts = await metamaskProvider!.request({ method: 'eth_requestAccounts' })
    userAddress.value = accounts[0]

    provider.value = metamaskProvider as Web3Provider
  }

  return {
    userAddress,
    connect,
  }
}

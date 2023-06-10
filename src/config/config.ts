export const ETHEREUM_CHAIN = {
  name: 'Ethereum',
  chainId: 1,
  hexChainId: '0x1',
  rpcs: ['https://rpc.eth.gateway.fm', 'https://ethereum.publicnode.com'],
  blockExplorers: ['https://etherscan.io'],
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
}

export const GNOSIS_CHAIN = {
  name: 'Gnosis Chain',
  chainId: 100,
  hexChainId: '0x64',
  rpcs: ['https://rpc.gnosis.gateway.fm', 'https://rpc.gnosischain.com'],
  blockExplorers: ['https://gnosisscan.io'],
  nativeCurrency: {
    name: 'xDai Stablecoin',
    symbol: 'XDAI',
    decimals: 18,
  },
}

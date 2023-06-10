<script setup lang="ts">
import { GNOSIS_CHAIN } from '~/config/config'

const { userAddress, ensName, activeChainIdHex, connect, switchChain } = useWallet()
</script>

<template>
  <div v-if="userAddress">
    {{ ensName ? ensName : `${userAddress.slice(0, 6)}...${userAddress.slice(userAddress.length - 4)}` }}
  </div>
  <div v-else>
    <button @click="connect">
      Connect Wallet
    </button>
  </div>
  <button v-if="userAddress && activeChainIdHex !== GNOSIS_CHAIN.hexChainId" @click="switchChain">
    Switch Chain
  </button>
</template>

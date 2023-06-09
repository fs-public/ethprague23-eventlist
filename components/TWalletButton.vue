<script setup lang="ts">
const { userAddress, connect } = useWallet()
</script>

<template>
  <div v-if="userAddress">
    {{ `${userAddress.slice(0, 6)}...${userAddress.slice(userAddress.length - 4)}` }}
  </div>
  <div v-else>
    <button @click="connect">
      Connect Wallet
    </button>
  </div>
</template>

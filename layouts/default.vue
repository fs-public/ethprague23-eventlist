<script lang="ts" setup>
</script>

<template>
  <div>
    <div w-full flex justify-between px-32px py-36px>
      <NuxtLink to="/">
        <img src="/assets/web3Stream.png" alt="Logo">
      </NuxtLink>
      <div flex gap-32px text-gray-600 text-lg>
        <NuxtLink to="/" link>
          Discover
        </NuxtLink>
        <NuxtLink to="#" link>
          My streams
        </NuxtLink>
        <NuxtLink to="/about" link>
          About
        </NuxtLink>
      </div>
      <div>Connect Wallet (TODO)</div>
    </div>
    <div grow overflow-x-hidden>
      <Suspense>
        <slot />
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>
  </div>
</template>

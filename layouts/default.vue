<script lang="ts" setup>
</script>

<template>
  <div>
    <div w-full flex justify-between px-32px py-36px>
      <NuxtLink to="/">
        <img src="/assets/web3Stream.png" alt="Logo">
      </NuxtLink>
      <div flex gap-32px text-gray-600 text-lg>
        <NuxtLink to="/discover" link active-class="text-black">
          Discover
        </NuxtLink>
        <NuxtLink to="/mystreams" link active-class="text-black">
          My streams
        </NuxtLink>
        <NuxtLink to="/about" link active-class="text-black">
          About
        </NuxtLink>
      </div>
      <TWalletButton />
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

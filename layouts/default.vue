<script lang="ts" setup>
</script>

<template>
  <div>
    <div w-full flex justify-between px-32px py-36px>
      <NuxtLink to="/">
        <img src="/assets/web3Stream.png" alt="Logo">
      </NuxtLink>
      <div flex gap-32px text-gray-600 text-lg>
        <NuxtLink to="/" gray-link active-class="text-black">
          Discover
        </NuxtLink>
        <NuxtLink to="/series" gray-link active-class="text-black">
          Series
        </NuxtLink>
        <NuxtLink to="/myevents" gray-link active-class="text-black">
          My Events
        </NuxtLink>
        <NuxtLink to="/create" blue-link active-class="text-black">
          + Create
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

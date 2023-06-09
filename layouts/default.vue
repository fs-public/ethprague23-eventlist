<script lang="ts" setup>
</script>

<template>
  <div>
    <div w-full flex justify-between items-center px-32px py-24px>
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
        <NuxtLink to="/create" blue-link>
          + Create
        </NuxtLink>
      </div>
      <UIInput type="search" />
      <div>Connect Wallet (TODO)</div>
    </div>
    <div w-full h-1px bg-bggray-200 mb-36px />
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

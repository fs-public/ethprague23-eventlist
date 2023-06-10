<script lang="ts" setup>
const optionClass = '      option w-25% py-32px text-center text-gray-600 [&:hover:not(:active)]:text-gray-300'
const createOptionClass = 'option w-25% py-32px text-center text-blue     [&:hover:not(:active)]:text-blue-dark'
</script>

<template>
  <div>
    <div w-full flex justify-between items-center px-32px>
      <NuxtLink to="/">
        <img src="/assets/web3Stream.png" alt="Logo" mt="-5px">
      </NuxtLink>
      <div relative flex min-w-430px text-gray-600 text-lg>
        <NuxtLink to="/" :class="optionClass" active-class="active text-black!">
          Discover
        </NuxtLink>
        <NuxtLink to="/series" :class="optionClass" active-class="active text-black!">
          Series
        </NuxtLink>
        <NuxtLink to="/myevents" :class="optionClass" active-class="active text-black!">
          My Events
        </NuxtLink>
        <NuxtLink to="/create" :class="createOptionClass" active-class="active">
          + Create
        </NuxtLink>
        <div
          absolute left-0 bottom-0 h-3px w-full
          bg-black transform-origin-bl transition-transform
          class="slider"
        />
      </div>
      <UIInput type="search" />
      <TWalletButton />
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

<style scoped>
.option {
  &:first-child.active ~ .slider {
    transform: translateX(2.5%) scaleX(20%);
  }
  &:nth-child(2).active ~ .slider {
    transform: translateX(27.5%) scaleX(20%);
  }
  &:nth-child(3).active ~ .slider {
    transform: translateX(52.5%) scaleX(20%);
  }
  &:nth-child(4).active ~ .slider {
    transform: translateX(77.5%) scaleX(20%);
    background-color: #0019FF;
  }
}
</style>

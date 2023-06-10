<script setup lang="ts">
interface UIInputProps {
  type?: string
}
defineProps<UIInputProps>()
</script>

<template>
  <div
    flex flex-row items-center gap-16px
    border-1 border-bggray-200 rounded-200
    px-16px py-12px text-lg
  >
    <UnoIcon v-if="type === 'search'" i-ph-magnifying-glass />
    <input :type="type" focus:outline-none placeholder-text-gray-600 placeholder="Find event">
  </div>
</template>

<script setup lang="ts">
interface UIPillProps {
  selected?: boolean
}

defineProps<UIPillProps>()

const emit = defineEmits(['pillClicked'])
</script>

<template>
  <button
    px-24px py-12px rounded-200
    :class="selected ? 'bg-black text-white font-800' : 'bg-bggray-100 text-gray-600'"
    @click="emit('pillClicked')"
  >
    <slot />
  </button>
</template>

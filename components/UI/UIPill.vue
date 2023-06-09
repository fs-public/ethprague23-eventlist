<script setup lang="ts">
interface UIPillProps {
  modelValue?: boolean
}

const props = defineProps<UIPillProps>()

const emit = defineEmits(['update:modelValue'])

const modelSelected = useVModel(props, 'modelValue', emit)

const toggleSelected = useToggle(modelSelected)
</script>

<template>
  <button
    px-24px py-12px rounded-200
    :class="modelSelected ? 'bg-black text-white' : 'bg-bggray-100 text-gray-600'"
    @click="toggleSelected()"
  >
    <slot />
  </button>
</template>

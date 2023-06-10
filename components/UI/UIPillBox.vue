<script setup lang="ts">
interface UIPillProps {
  options: string[]
  modelValue?: number
}

const props = defineProps<UIPillProps>()

const emit = defineEmits(['update:modelValue'])

const modelSelected = useVModel(props, 'modelValue', emit)

const displayAll = ref(false)
</script>

<template>
  <div flex gap-8px>
    <UIPill v-for="(option, i) in displayAll ? options : options.slice(0, 6)" :key="i" :selected="modelSelected === i" @pill-clicked="modelSelected = i">
      {{ option }}
    </UIPill>
    <button
      v-if="!displayAll && options.length > 8"
      px-24px py-12px rounded-200
      border-1 border-bggray-200 text-gray-600
      @click="displayAll = true"
    >
      Show all
    </button>
  </div>
</template>

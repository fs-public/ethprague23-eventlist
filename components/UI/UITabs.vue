<script setup lang="ts">
interface TTabsProps {
  options: string[]
  modelValue?: number
}

const props = defineProps<TTabsProps>()

const emit = defineEmits(['update:modelValue'])

const modelSelected = useVModel(props, 'modelValue', emit)

const sizeStyles = ['', 'w-100%', 'w-50%', 'w-33.33%', 'w-25%', 'w-20%', 'w-16.67%', 'w-14.29%', 'w-12.5%']
</script>

<template>
  <div relative flex>
    <div
      v-for="(option, i) in options" :key="i"
      role="button"
      cursor-pointer text-center mb-26px p-6px heading-sm
      :class="`option [&:hover:not(:active)]:text-gray-300 ${sizeStyles[options.length]} ${i === modelSelected ? 'active hover:text-black!' : 'text-gray-600'}`"
      @click="modelSelected = i"
    >
      {{ option }}
    </div>
    <div
      absolute left-0 bottom-0 h-3px
      bg-black transform-origin-bl transition-transform
      :class="`slider ${sizeStyles[options.length]}`"
    />
  </div>
</template>

<style scoped>
.option {
  &:first-child.active ~ .slider {
    transform: translateX(0);
  }
  &:nth-child(2).active ~ .slider {
    transform: translateX(100%);
  }
  &:nth-child(3).active ~ .slider {
    transform: translateX(200%);
  }
  &:nth-child(4).active ~ .slider {
    transform: translateX(300%);
  }
  &:nth-child(5).active ~ .slider {
    transform: translateX(400%);
  }
  &:nth-child(6).active ~ .slider {
    transform: translateX(500%);
  }
  &:nth-child(7).active ~ .slider {
    transform: translateX(600%);
  }
}
</style>

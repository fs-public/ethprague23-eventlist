<script setup lang="ts">
interface TTabsProps {
  options: string[]
  modelValue?: number
}

const props = defineProps<TTabsProps>()

const emit = defineEmits(['update:modelValue'])

const modelSelected = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div relative flex class="panel">
    <div
      v-for="(option, i) in options" :key="i"
      :class="`text-center option ${i === modelSelected ? 'active' : ''}`"
      @click="modelSelected = i"
    >
      {{ option }}
    </div>
    <div class="slider" absolute left-0 bottom-0 w-full h-3px bg-black transform-origin-bl transition-transform />
  </div>
</template>

<style scoped>
.panel {
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
}

.option {
  width: 33.333%;
  &:first-child.active ~ .slider {
    transform: translateX(0) scaleX(0.333);
  }
  &:nth-child(2).active ~ .slider {
    transform: translateX(33.333%) scaleX(0.333);
  }
  &:nth-child(3).active ~ .slider {
    transform: translateX(calc(33.333% * 2)) scaleX(0.333);
  }
}
</style>

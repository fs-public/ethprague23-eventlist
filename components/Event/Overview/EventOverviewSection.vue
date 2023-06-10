<script setup lang="ts">
interface EventOverviewSectionProps {
  headline: string
}

defineProps<EventOverviewSectionProps>()
</script>

<template>
  <div>
    <div heading-sm text-gray-600 mb-24px>
      {{ headline }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Activity } from './TActivityDetail.vue'
import type { EventImageProps } from './TEventImage.vue'

export interface Stage {
  general: EventImageProps
  activities?: Activity[]
}

defineProps<Stage>()
</script>

<template>
  <div flex flex-col gap-48px>
    <div heading-md>
      {{ general.name }}
    </div>
    <TEventImage v-bind="general" bg="#E8E8E8" />
    <div flex flex-col gap-24px>
      <TActivityDetail v-for="(activity, i) in activities" :key="i" v-bind="activity" />
    </div>
  </div>
</template>

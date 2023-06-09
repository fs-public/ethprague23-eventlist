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
  <div>
    <div heading-lg>
      {{ general.name }}
    </div>
    <TEventImage v-bind="general" />
    <div flex flex-col gap-24px>
      <TActivityDetail v-for="(activity, i) in activities" :key="i" v-bind="activity" />
    </div>
  </div>
</template>

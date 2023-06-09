<script setup lang="ts">
import type { EventCardType } from './TEventCard.vue'
import type { EventImageProps } from './TEventImage.vue'

export interface Stage {
  general: EventImageProps
  activities?: Activity[]
}

interface Activity {
  status: EventCardType
  name: string
  time: string
  speaker: string
}

defineProps<Stage>()
</script>

<template>
  <div>
    hello from {{ general.name }}
  </div>
</template>

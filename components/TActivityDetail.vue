<script setup lang="ts">
import type { EventCardType } from './TEventCard.vue'

export interface Activity {
  status: EventCardType
  name: string
  time: string
  speaker: string
  url?: string
}

defineProps<Activity>()

const icons: { [key in EventCardType]: string } = {
  past: 'i-ph-triangle-fill rotate-90',
  live: 'i-ph-circle-fill text-green',
  upcoming: 'hidden',
}
</script>

<template>
  <NuxtLink :to="url" text-md :class="{ '[&:hover:not(:active)]:bg-gray-100': url }">
    <div text-gray-600>
      {{ time }} / {{ speaker }}
    </div>
    <div flex gap-12px items-center :class="{ 'text-gray-600': status === 'upcoming' }">
      <UnoIcon :class="icons[status]" />
      {{ name }}
    </div>
  </NuxtLink>
</template>

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
  live: 'i-ph-circle-fill text-[#00FF47]',
  upcoming: 'hidden',
}
</script>

<template>
  <a :href="url" text-md :class="{ '[&:hover:not(:active)]:bg-[#FAFAFA]': url }">
    <div text="#909090">
      {{ time }} / {{ speaker }}
    </div>
    <div flex gap-12px items-center :class="{ 'text-[#909090]': status === 'upcoming' }">
      <UnoIcon :class="icons[status]" />
      {{ name }}
    </div>
  </a>
</template>

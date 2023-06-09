<script setup lang="ts">
import type { Activity, TimeStatus } from '~/types'

defineProps<{ activity: Activity }>()

const icons: { [key in TimeStatus]: string } = {
  past: 'i-ph-triangle-fill rotate-90',
  live: 'i-ph-circle-fill text-green',
  upcoming: 'hidden',
}
</script>

<template>
  <NuxtLink :to="activity.url" text-md :class="{ '[&:hover:not(:active)]:bg-bggray-100': activity.url }">
    <div text-gray-600>
      {{ activity.time }} / {{ activity.speaker }}
    </div>
    <div flex gap-12px items-center :class="{ 'text-gray-600': activity.status === 'upcoming' }">
      <UnoIcon :class="icons[activity.status]" />
      {{ activity.name }}
    </div>
  </NuxtLink>
</template>

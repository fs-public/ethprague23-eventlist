<script setup lang="ts">
import type { EventImageProps } from './TEventImage.vue'

export type EventCardType = 'upcoming' | 'live' | 'past'

interface EventCardProps {
  type: EventCardType
  name?: string
  subheadline?: string
  programUrl?: string
  events?: EventImageProps[]
}
withDefaults(defineProps<EventCardProps>(), {
  type: 'upcoming',
})

const cardStyles: { [key in EventCardType]: string } = {
  upcoming: 'bg-bggray-300 opacity-50',
  live: 'bg-shiny-gradient',
  past: 'bg-bggray-300',
}
</script>

<template>
  <div :class="cardStyles[type]" w-full rounded-32px p-48px>
    <div flex justify-between>
      <div flex flex-col>
        <div heading-md pb-24px>
          {{ name }}
        </div>
        <div heading-sm>
          {{ subheadline }}
        </div>
      </div>
      <NuxtLink :to="programUrl" heading-md pt-24px link>
        Full Program
      </NuxtLink>
    </div>
    <div v-if="events && events.length > 0" flex gap-32px pt-100px>
      <TEventImage v-for="(event, i) in events" :key="i" v-bind="event" />
    </div>
  </div>
</template>
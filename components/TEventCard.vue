<script setup lang="ts">
import type { Event, TimeStatus } from '~/types'

defineProps<{ event: Event }>()

const cardStyles: { [key in TimeStatus]: string } = {
  upcoming: 'bg-bggray-300 opacity-50',
  live: 'bg-shiny-gradient',
  past: 'bg-bggray-300',
}
</script>

<template>
  <div :class="cardStyles[event.type]" w-full rounded-32px p-48px>
    <div flex justify-between>
      <div flex flex-col>
        <div heading-md pb-24px>
          {{ event.name }}
        </div>
        <div heading-sm>
          {{ event.subheadline }}
        </div>
      </div>
      <NuxtLink :to="event.programUrl" heading-md pt-24px link>
        Full Program
      </NuxtLink>
    </div>
    <div v-if="event.stages && event.stages.length > 0" flex gap-32px pt-100px>
      <TStageImage v-for="(stage, i) in event.stages" :key="i" :stage="stage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Activity } from '../components/TActivityDetail.vue'
import type { Stage } from '../components/TStageDetail.vue'

const { slug } = useRoute().params

const activities: Activity[] = [
  {
    status: 'past',
    name: 'Degens all always right!',
    time: '13:30 - 14:00',
    speaker: 'Coinmandeer',
  },
  {
    status: 'past',
    name: 'I\'m right and you know it',
    time: '14:30 - 15:00',
    speaker: 'Vitalik',
  },
  {
    status: 'past',
    name: 'Discord is a Crime',
    time: '15:30 - 16:00',
    speaker: 'Tree',
  },
  {
    status: 'live',
    name: 'Degens all always right!',
    time: '17:30 - 18:00',
    speaker: 'Coinmandeer',
  },
  {
    status: 'upcoming',
    name: 'I\'m right and you know it',
    time: '18:30 - 19:00',
    speaker: 'Vitalik',
  },
  {
    status: 'upcoming',
    name: 'Discord is a Crime',
    time: '20:30 - 21:00',
    speaker: 'Tree',
  },
  {
    status: 'upcoming',
    name: 'Party',
    time: '21:30 - 00:00',
    speaker: 'ETH Prague',
  },
]

activities.forEach(activity => activity.url = '#')

const mockStages: Stage[] = [
  { general: { name: 'Stage 1', url: '#' }, activities },
  { general: { name: 'Stage 2', url: '#' }, activities },
  { general: { name: 'Hackathon', url: '#' }, activities },
  { general: { name: 'Hackathon #2', url: '#' }, activities },
]
</script>

<template>
  <div relative flex flex-col items-center gap-32px w-full p-52px class="bg-shiny-gradient">
    <img src="/assets/ethprague.png" alt="Event Logo">
    <div heading-lg>
      {{ slug }}
    </div>
    <NuxtLink to="./">
      <UnoIcon absolute left-32px top-32px w-32px h-32px i-ph-arrow-left />
    </NuxtLink>
  </div>
  <div page-container gap-48px pt-48px>
    <div heading-lg>
      12. 5. - Tuesday
    </div>
    <div flex flex-wrap gap-48px pb-30px>
      <TStageDetail v-for="(stage, i) in mockStages" :key="i" v-bind="stage" />
    </div>
    <div heading-lg>
      13. 5. - Wednesday
    </div>
    <div flex flex-wrap gap-48px>
      <TStageDetail v-for="(stage, i) in mockStages.slice(0, 2)" :key="i" v-bind="stage" />
    </div>
  </div>
</template>

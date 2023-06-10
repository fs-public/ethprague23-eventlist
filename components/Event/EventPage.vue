<script setup lang="ts">
interface EventPageProps {
  slugs: string[]
}

defineProps<EventPageProps>()

/* const activities: DActivity[] = [
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

const mockStages: DStage[] = [
  { name: 'Stage 1', url: getEventUrl('stage1'), activities },
  { name: 'Stage 2', url: getEventUrl('stage2'), activities },
  { name: 'Hackathon', url: getEventUrl('hackathon'), activities },
  { name: 'Hackathon #2', url: getEventUrl('hackathon2'), activities },
] */

const tabOptions = ['overview', 'schedule', 'contributors', 'hackathon', 'tickets', 'reviews']

const tabSelected = ref(0)
console.log(tabOptions.indexOf('overview'))
</script>

<template>
  <EventHero :slugs="slugs" />
  <div w-full border-b-1 border-b-bggray-200 mt-24px mb-48px>
    <UITabs v-model="tabSelected" :options="tabOptions" />
  </div>
  <EventOverview v-if="tabSelected === tabOptions.indexOf('overview')" />
</template>

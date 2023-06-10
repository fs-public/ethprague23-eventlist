<script setup lang="ts">
const mockActivities: DActivity[] = [
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

mockActivities.forEach(activity => activity.url = '#')

const mockStages: DStage[] = [
  { name: 'Stage 1', image: '/assets/polis.png', url: getEventUrl('stage1'), activities: mockActivities },
  { name: 'Stage 2', image: '/assets/polis.png', url: getEventUrl('stage2'), activities: mockActivities },
  { name: 'Hackathon', image: '/assets/polis.png', url: getEventUrl('hackathon'), activities: mockActivities },
  { name: 'Hackathon #2', image: '/assets/polis.png', url: getEventUrl('hackathon2'), activities: mockActivities },
]
</script>

<template>
  <div page-container gap-48px>
    <div heading-lg>
      12. 5. - Tuesday
    </div>
    <div flex flex-wrap gap-48px pb-30px>
      <EventScheduleStageActivities v-for="(stage, i) in mockStages" :key="i" :stage="stage" />
    </div>
    <div heading-lg>
      13. 5. - Wednesday
    </div>
    <div flex flex-wrap gap-48px>
      <EventScheduleStageActivities v-for="(stage, i) in mockStages.slice(0, 2)" :key="i" :stage="stage" />
    </div>
  </div>
</template>

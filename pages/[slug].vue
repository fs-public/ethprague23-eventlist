<script setup lang="ts">
import type { Stage } from '../../../components/T/TStageDetail.vue'

const { slug } = useRoute().params

const mockStages: Stage[] = [
  {
    general: {
      name: 'Stage 1',
      url: '#',
    },
    activities: [
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
    ],
  },
]
</script>

<template>
  <div flex justify-center>
    <div w-full max-w="80%" flex flex-col gap-48px>
      hello from {{ slug }}
      <TStageDetail v-for="(stage, i) in mockStages" :key="i" v-bind="stage" />
    </div>
  </div>
</template>

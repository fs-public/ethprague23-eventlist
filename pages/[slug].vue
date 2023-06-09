<script setup lang="ts">
import type { Activity } from '../../../components/T/TActivityDetail.vue'
import type { Stage } from '../../../components/T/TStageDetail.vue'

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
  <div>
    <div relative flex flex-col items-center gap-32px w-full p-52px class="live-gradient">
      <div w-110px h-130px bg-black />
      <div heading-lg>
        {{ slug }}
      </div>
      <NuxtLink to="./">
        <UnoIcon absolute left-32px top-32px w-32px h-32px i-ph-arrow-left />
      </NuxtLink>
    </div>
    <div w-full px-100px pt-48px>
      <div flex flex-col gap-48px>
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
    </div>
  </div>
</template>

<style scoped>
.live-gradient {
  background: linear-gradient(110.1deg, #A0E9F1 13.39%, #E4F7EC 48.77%, #F7F1E1 87.51%);
}
</style>

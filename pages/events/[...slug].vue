<script setup lang="ts">
const { slug } = useRoute().params
const slugs = Array.isArray(slug) ? slug : [slug]

const activities: DActivity[] = [
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
  { name: 'Stage 1', url: getEventUrl('stage1', slugs), activities },
  { name: 'Stage 2', url: getEventUrl('stage2', slugs), activities },
  { name: 'Hackathon', url: getEventUrl('hackathon', slugs), activities },
  { name: 'Hackathon #2', url: getEventUrl('hackathon2', slugs), activities },
]

const tabOptions = ['overview', 'schedule', 'contributors', 'hackathon', 'tickets', 'reviews']

const pillSelect = ref(0)
</script>

<template>
  <div relative flex flex-col items-center gap-16px w-full p-32px class="bg-shiny-gradient">
    <img src="/assets/ethprague.png" alt="Event Logo" pb-8px>
    <div heading-lg>
      {{ slugs.join('/') }}
    </div>
    <div flex items-center text-lg>
      {{ "date" }}
      <UnoIcon i-ph-users-fill ml-16px mr-8px text-gray-600 />
      {{ "number" }}
    </div>
    <div text-lg>
      {{ "location" }}
    </div>
    <div flex gap-12px>
      <div
        v-for="(tag, i) in ['Hackathon', 'Conference']" :key="i"
        rounded-8px border-1 border-black-lighter px-12px py-4px
      >
        {{ tag }}
      </div>
    </div>
    <!-- Absolute side info and buttons -->
    <div absolute left-32px top-32px flex justify-between class="w-[calc(100%-64px)]" text-lg text-gray-600>
      <div>Event is in <span font-700>{{ "8" }} event lists</span></div>
      <div flex items-center gap-12px role="button">
        <UnoIcon i-ph-share-network-fill />Share
      </div>
    </div>
  </div>
  <div w-full border-b-1 border-b-bggray-200 mt-24px mb-48px>
    <UITabs v-model="pillSelect" :options="tabOptions" />
  </div>
  <div page-container gap-48px>
    <div>
      <div heading-sm text-gray-600 mb-24px>
        {{ 130 }} CONTRIBUTORS
      </div>
      <div flex gap-16px>
        <img v-for="i in 10" :key="i" src="/assets/person.png" alt="Person" w-80px h-80px rounded-full>
        <div w-80px h-80px rounded-full border-2 border-black flex justify-center items-center heading-sm>
          +{{ 80 }}
        </div>
      </div>
    </div>
    <div heading-lg>
      12. 5. - Tuesday
    </div>
    <div flex flex-wrap gap-48px pb-30px>
      <TStageDetail v-for="(stage, i) in mockStages" :key="i" :stage="stage" />
    </div>
    <div heading-lg>
      13. 5. - Wednesday
    </div>
    <div flex flex-wrap gap-48px>
      <TStageDetail v-for="(stage, i) in mockStages.slice(0, 2)" :key="i" :stage="stage" />
    </div>
  </div>
</template>

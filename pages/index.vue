<script setup lang="ts">
const event: Omit<DEvent, 'type'> = {
  name: 'ETH Prague 2023',
  subheadline: '3 subevents / 120 Speakers / 1 Hackathon',
  date: '9. - 11. June 2023',
  image: '/assets/ethprague-shiny.png',
  programUrl: '/events/ethprague23',
  stages: [
    { name: 'Hackathon', url: '#', image: 'assets/polis.png' },
    { name: 'Stage 1', url: '#', image: 'assets/ethprague-shiny.png' },
    { name: 'Stage 2', url: '#', image: 'assets/hub.png' },
  ],
}

const selected = ref(0)

const pillSelect = ref(0)
</script>

<template>
  <div w-400px border-b-1 border-b-bggray-200 mb-50px>
    <UITabs v-model="pillSelect" :options="['One', 'Two', 'Three', 'Four', 'Five']" />
  </div>
  <div page-container gap-32px>
    <UIPillBox v-model="selected" :options="['All Events', 'PBW2023', 'ETH Zurich', 'Ethereum Events', 'Devcons', 'Web3privacy', 'More', 'Tags', 'Visible']">
      All Events
    </UIPillBox>
    <div heading-lg pt-16px>
      Live
    </div>
    <TEventCard :event="{ ...event, type: 'live' }" />
    <div heading-lg pt-16px>
      Upcoming
    </div>
    <TEventCard :event="{ ...event, type: 'upcoming' }" />
    <div heading-lg pt-16px>
      Past
    </div>
    <TEventCard :event="{ ...event, type: 'past', stages: undefined }" />
    <TEventCard :event="{ ...event, type: 'past', stages: undefined }" />
  </div>
</template>

<script setup lang="ts">
const event: Omit<DEvent, 'type'> = {
  name: 'ETH Prague 2023',
  subheadline: '2 stages - 25 Presentations -  1 Hackathon',
  programUrl: '/events/ethprague23',
  stages: [
    { name: 'Hackathon', url: '#' },
    { name: 'Stage 1', url: '#' },
    { name: 'Stage 2', url: '#' },
  ],
}
</script>

<template>
  <div page-container gap-48px>
    <div heading-lg pt-24px>
      Upcoming
    </div>
    <TEventCard :event="{ ...event, type: 'upcoming' }" />
    <div heading-lg pt-24px>
      Live
    </div>
    <TEventCard :event="{ ...event, type: 'live' }" />
    <div heading-lg pt-24px>
      Past
    </div>
    <TEventCard :event="{ ...event, type: 'past', stages: undefined }" />
    <TEventCard :event="{ ...event, type: 'past', stages: undefined }" />
  </div>
</template>

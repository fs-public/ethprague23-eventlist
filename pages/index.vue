<script setup lang="ts">
const config = {
  name: 'ETH Prague 2023',
  subheadline: '2 stages - 25 Presentations -  1 Hackathon',
  programUrl: './ethprague23',
  events: [
    { name: 'Hackathon', url: '#' },
    { name: 'Stage 1', url: '#' },
    { name: 'Stage 2', url: '#' },
  ],
}
</script>

<template>
  <TNavigation />
  <div w-full flex flex-col gap-48px px-100px>
    <div heading-lg pt-24px>
      Upcoming
    </div>
    <TEventCard type="upcoming" v-bind="config" />
    <div heading-lg pt-24px>
      Live
    </div>
    <TEventCard type="live" v-bind="config" />
    <div heading-lg pt-24px>
      Past
    </div>
    <TEventCard type="past" v-bind="{ ...config, events: undefined }" />
    <TEventCard type="past" v-bind="{ ...config, events: undefined }" />
  </div>
</template>

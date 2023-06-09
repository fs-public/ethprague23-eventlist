<script setup lang="ts">
const config = {
  name: 'ETH Prague 2023',
  subheadline: '2 stages - 25 Presentations -  1 Hackathon',
  events: [
    { name: 'Hackathon' },
    { name: 'Stage 1' },
    { name: 'Stage 2' },
  ],
}
</script>

<template>
  <div flex justify-center>
    <div w-full max-w="80%" flex flex-col gap-48px>
      <TEventCard type="upcoming" v-bind="config" />
      <TEventCard type="live" v-bind="config" />
      <TEventCard type="past" v-bind="config" />
    </div>
  </div>
</template>

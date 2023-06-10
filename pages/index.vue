<script setup lang="ts">
// const event: Omit<DEvent, 'type'> = {
//   name: 'ETH Prague 2023',
//   subheadline: '3 subevents / 120 Speakers / 1 Hackathon',
//   date: '9. - 11. June 2023',
//   image: '/assets/ethprague-shiny.png',
//   programUrl: '/events/ethprague23',
//   stages: [
//     { name: 'Hackathon', url: '#', image: 'assets/polis.png' },
//     { name: 'Stage 1', url: '#', image: 'assets/ethprague-shiny.png' },
//     { name: 'Stage 2', url: '#', image: 'assets/hub.png' },
//   ],
// }

const { sortedEvents, eventLists } = storeToRefs(useEvents())

const selected = ref(0)
</script>

<template>
  <div page-container gap-32px>
    <UIPillBox v-model="selected" :options="['All Events', ...eventLists]">
      All Events
    </UIPillBox>
    <template v-for="eventType in Object.keys(sortedEvents)" :key="eventType">
      <div v-if="sortedEvents[eventType as 'past' | 'live' | 'upcoming'].length" heading-lg pt-16px capitalize>
        {{ eventType }}
      </div>
      <TEventCard v-for="event in sortedEvents[eventType as 'past' | 'live' | 'upcoming']" :key="event.slug" :event="event" :type="(eventType as 'past' | 'live' | 'upcoming')" />
    </template>
  </div>
</template>

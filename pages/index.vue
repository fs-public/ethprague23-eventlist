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
  <div w-full bg-bggray-50 py-24px px-32px>
    <div text-lg text-gray-600 mb-16px>
      Choose event list:
    </div>
    <UIPillBox v-model="selected" :options="['All Events', ...eventLists]">
      All Events
    </UIPillBox>
  </div>
  <div page-container gap-48px pt-32px>
    <div v-for="eventType in Object.keys(sortedEvents)" :key="eventType">
      <div v-if="sortedEvents[eventType as 'past' | 'live' | 'upcoming'].length" heading-md pb-16px capitalize>
        {{ { live: "Live Now", upcoming: "Upcoming Events", past: "Past Events" }[eventType] }}
      </div>
      <TEventCard v-for="event in sortedEvents[eventType as 'past' | 'live' | 'upcoming']" :key="event.slug" :event="event" :type="(eventType as 'past' | 'live' | 'upcoming')" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface EventPageProps {
  slugs: string[]
}

defineProps<EventPageProps>()

const tabOptions = ['overview', 'schedule', 'contributors', 'hackathon', 'tickets', 'reviews']

const tabSelected = ref(0)
</script>

<template>
  <EventHero :slugs="slugs" />
  <div w-full border-b-1 border-b-bggray-200 mt-24px mb-48px>
    <UITabs v-model="tabSelected" :options="tabOptions" />
  </div>
  <EventOverview v-if="tabSelected === tabOptions.indexOf('overview')" />
  <EventSchedule v-if="tabSelected === tabOptions.indexOf('schedule')" />
</template>

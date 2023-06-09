<script setup lang="ts">
defineProps<{ event: DEvent; type: 'past' | 'live' | 'upcoming' }>()

const cardStyles: { [key in DTimeStatus]: string } = {
  upcoming: 'bg-bggray-300',
  live: 'bg-shiny-gradient',
  past: 'bg-bggray-300',
}
</script>

<template>
  <div>
    <div heading-sm text-gray-600 mb-16px>
      {{ event.date }}
    </div>
    <div :class="cardStyles[event.type]" w-full rounded-24px p-48px>
      <div flex justify-between>
        <div flex items-center gap-24px>
          <img :src="event.image" alt="Event Logo" w-96px h-96px>
          <div flex flex-col gap-12px>
            <div heading-md>
              {{ event.name }}
            </div>
            <div heading-sm>
              {{ event.subheadline }}
            </div>
          </div>
        </div>
        <NuxtLink :to="`events/${event.slug}`" heading-md pt-24px gray-link>
          Full Program
        </NuxtLink>
      </div>
      <div v-if="event.stages?.length && type !== 'past'" flex gap-32px pt-40px>
        <TStageImage v-for="(stage, i) in event.stages" :key="i" :stage="stage" />
      </div>
    </div>
  </div>
</template>

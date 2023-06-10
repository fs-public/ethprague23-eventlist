<script setup lang="ts">
import moment from 'moment'

const props = defineProps<{ event: DEvent; type: 'past' | 'live' | 'upcoming' }>()

const cardStyles: { [key in DTimeStatus]: string } = {
  upcoming: 'bg-bggray-300',
  live: 'bg-shiny-gradient',
  past: 'bg-bggray-300',
}

console.log(props.event)
// :to="`events/${event.slug}`"
</script>

<template>
  <div>
    <div heading-sm text-gray-600 mb-16px>
      {{ `${moment(event.startDate).format("D. M.")} – ${moment(event.endDate).format("D. M. YYYY")}` }}
    </div>
    <div :class="cardStyles[event.type]" w-full rounded-24px p-40px border-2px border-bggray-200>
      <div flex items-center gap-24px>
        <img :src="event.image" alt="Event Logo" w-96px h-96px>
        <div flex flex-col gap-12px w-full>
          <div heading-md>
            {{ event.name }}
          </div>
          <div flex justify-between heading-sm>
            <div>
              {{ "MissingType:subevents, speakers, ..." }}
            </div>
            <div>
              {{ "MissingType:location" }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="event.stages?.length && type !== 'past'" flex gap-24px pt-40px>
        <TStageImage v-for="(stage, i) in event.stages" :key="i" :stage="stage" />
      </div>
    </div>
  </div>
</template>

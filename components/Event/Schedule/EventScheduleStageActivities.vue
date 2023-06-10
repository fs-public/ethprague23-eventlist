<script setup lang="ts">
const props = defineProps<{ stage: DStage }>()
console.log(props.stage)
</script>

<template>
  <div flex flex-col gap-48px>
    <div heading-md>
      {{ stage.name }}
    </div>
    <NuxtLink :to="stage.url">
      <div relative overflow-hidden class="group">
        <img :src="stage.image" :alt="stage.name" w-264px h-200px object-cover rounded-16px>
        <UnoIcon
          i-ph-triangle-fill rotate-90 text-white
          absolute w-100px h-100px left="[calc(50%-50px)]" top="[calc(50%-50px)]"
          transition-transform class="group-hover:scale-150"
        />
      </div>
    </NuxtLink>
    <div flex flex-col gap-24px>
      <EventScheduleActivityDetail v-for="(activity, i) in stage.activities" :key="i" :activity="activity" />
    </div>
  </div>
</template>

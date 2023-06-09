<script setup lang="ts">
export interface EventImageProps {
  name?: string
  image?: string
  url?: string
}

defineProps<EventImageProps>()

const objectClass = 'rounded-32px w-400px aspect-[4/3] bg-white'
</script>

<template>
  <a :href="url">
    <img v-if="image" :src="image" :class="objectClass">
    <div v-else :class="objectClass" flex justify-center items-center heading-md>
      {{ name || "Event" }}
    </div>
  </a>
</template>

<script setup lang="ts">
export interface EventImageProps {
  name?: string
  image?: string
  url?: string
}

defineProps<EventImageProps>()

const objectClass = 'rounded-32px w-400px aspect-[4/3]'
</script>

<template>
  <a :href="url">
    <img v-if="image" :src="image" :class="objectClass">
    <div v-else :class="objectClass">
      {{ name || "Event" }}
    </div>
  </a>
</template>

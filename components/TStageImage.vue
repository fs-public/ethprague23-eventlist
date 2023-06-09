<script setup lang="ts">
defineProps<{ stage: DStage }>()

const objectClass = 'rounded-32px w-400px aspect-[4/3] bg-white'
</script>

<template>
  <NuxtLink :to="stage.url" :inherit-attrs="false">
    <img v-if="stage.image" :src="stage.image" :alt="stage.name" :class="objectClass" v-bind="$attrs">
    <div v-else :class="objectClass" flex justify-center items-center heading-md v-bind="$attrs">
      {{ stage.name || "Stage" }}
    </div>
  </NuxtLink>
</template>

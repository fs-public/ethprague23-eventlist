<script setup lang="ts">
defineProps<{ stage: DStage }>()
</script>

<template>
  <NuxtLink :to="stage.url">
    <div rounded-16px overflow-hidden>
      <img :src="stage.image" :alt="stage.name" w-264px h-200px object-cover>
      <div text-lg px-20px py-16px bg-bggray-50>
        {{ stage.name }}
      </div>
    </div>
  </NuxtLink>
</template>

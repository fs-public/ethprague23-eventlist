<script setup lang="ts">
const { slug } = useRoute().params
const slugs = Array.isArray(slug) ? slug : [slug]
</script>

<template>
  <EventPage :slugs="slugs" />
</template>

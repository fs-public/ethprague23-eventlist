<script setup lang="ts">
const { slug } = useRoute().params
</script>

<template>
  <div flex justify-center>
    <div w-full max-w="80%" flex flex-col gap-48px>
      hello from {{ slug }}
    </div>
  </div>
</template>

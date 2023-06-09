<script setup lang="ts">
import type { Stage } from '~/types'

defineProps<{ stage: Stage }>()
</script>

<template>
  <div flex flex-col gap-48px>
    <div heading-md>
      {{ stage.name }}
    </div>
    <TStageImage :stage="stage" bg="#E8E8E8" />
    <div flex flex-col gap-24px>
      <TActivityDetail v-for="(activity, i) in stage.activities" :key="i" :activity="activity" />
    </div>
  </div>
</template>

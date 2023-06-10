<script setup lang="ts">
interface EventHeroProps {
  slugs: string[]
}

defineProps<EventHeroProps>()
</script>

<template>
  <div relative flex flex-col items-center gap-16px w-full p-32px class="bg-shiny-gradient">
    <img src="/assets/ethprague.png" alt="Event Logo" pb-8px>
    <div heading-lg>
      {{ slugs.join('/') }}
    </div>
    <div flex items-center heading-xs>
      {{ "June 9 – 11. 2023" }}
      <UnoIcon i-ph-users-fill ml-16px mr-8px text-gray-600 />
      {{ "750" }}
    </div>
    <div heading-xs>
      {{ "Paralelní Polis, La Fabrika, Vnitroblock – Praha, CZ" }}
    </div>
    <div heading-xs flex gap-12px>
      <div
        v-for="(tag, i) in ['Hackathon', 'Conference']" :key="i"
        rounded-8px border-1 border-black-lighter px-12px py-4px
      >
        {{ tag }}
      </div>
    </div>
    <!-- Absolute side info and buttons -->
    <div absolute left-32px top-32px flex justify-between class="w-[calc(100%-64px)]" heading-xs text-gray-600>
      <div>Event is in <span font-700>{{ "8" }} event lists</span></div>
      <div flex items-center gap-12px role="button">
        <UnoIcon i-ph-share-network-fill />Share
      </div>
    </div>
  </div>
</template>

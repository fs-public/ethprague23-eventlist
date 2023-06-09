<script lang="ts" setup>
</script>

<template>
  <div>
    <div>NAVIGATION</div>
    <div grow overflow-x-hidden>
      <Suspense>
        <slot />
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>
  </div>
</template>

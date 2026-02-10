<script setup lang="ts">
// BaseCard component to standardize the look of content containers
// (Experience items, Education items, Project cards)
</script>

<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  padding: 1.5rem;
  background-color: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  border-radius: 0.75rem;
  box-shadow: var(--card-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>

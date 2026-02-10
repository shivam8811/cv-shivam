<script setup lang="ts">
// This component wraps UButton with our default styling preferences
// to ensure consistency and reduce repetition (DRY).
// Any prop passed to BaseButton will override these defaults thanks to v-bind="$attrs".
</script>

<template>
  <UButton
    variant="ghost"
    color="neutral"
    size="sm"
    v-bind="$attrs"
  >
    <slot />
  </UButton>
</template>

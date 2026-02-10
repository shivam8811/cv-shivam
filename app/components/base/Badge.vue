<script setup lang="ts">
// BaseBadge component wrapping UBadge with our standard styling
</script>

<template>
  <UBadge
    color="primary"
    variant="subtle"
    size="sm"
    v-bind="$attrs"
  >
    <slot />
  </UBadge>
</template>

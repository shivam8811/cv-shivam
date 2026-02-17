<script setup lang="ts">
// BaseTabs wraps UTabs with our default styling preferences
// to ensure consistency and reduce repetition (DRY).
// Any prop passed to BaseTabs will override these defaults thanks to v-bind="$attrs".
</script>

<template>
  <UTabs
    variant="link"
    color="primary"
    size="sm"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </UTabs>
</template>

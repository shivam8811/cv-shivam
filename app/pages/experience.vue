<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
  <CvExperience
    v-if="cv.experience.length"
    :items="cv.experience"
  />
</template>

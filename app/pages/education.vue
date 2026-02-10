<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
  <CvEducation
    v-if="cv.education.length"
    :items="cv.education"
  />
</template>

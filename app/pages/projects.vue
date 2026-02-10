<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
  <CvProjects
    v-if="cv.projects.length"
    :items="cv.projects"
  />
</template>

<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
  <CvAbout :summary="cv.summary" />
</template>

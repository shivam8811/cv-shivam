<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
	<UContainer class="page">
		<CvHeader
			:name="cv.name"
			:title="cv.title"
			:contact="cv.contact"
		/>

		<CvAbout :summary="cv.summary" />

		<CvExperience
			v-if="cv.experience.length"
			:items="cv.experience"
		/>

		<CvEducation
			v-if="cv.education.length"
			:items="cv.education"
		/>

		<CvSkills
			v-if="cv.skills.length"
			:items="cv.skills"
		/>

		<CvProjects
			v-if="cv.projects.length"
			:items="cv.projects"
		/>
	</UContainer>
</template>

<style scoped>
.page {
	padding-block: 2rem;
	max-width: 56rem;
}

@media (min-width: 768px) {
	.page {
		padding-block: 3rem;
	}
}
</style>

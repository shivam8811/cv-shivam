<script setup lang="ts">
import { cv } from "~/data/cv";

useSeoMeta({
	title: `${cv.name} — ${cv.title}`,
	description: cv.summary,
	ogTitle: `${cv.name} — ${cv.title}`,
	ogDescription: cv.summary,
});
</script>

<template>
	<UContainer class="page">
		<div class="cv-layout">
			<aside class="cv-sidebar">
				<CvHeader
					:name="cv.name"
					:title="cv.title"
					:contact="cv.contact"
				/>

				<CvSkills
					v-if="cv.skills.length"
					:items="cv.skills"
				/>

				<CvLanguages
					v-if="cv.languages.length"
					:items="cv.languages"
				/>
			</aside>

			<main class="cv-main">
				<slot />
			</main>
		</div>
	</UContainer>
</template>

<style scoped>
.page {
	padding-block: 4rem;
	max-width: 64rem;
}

.cv-layout {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.cv-sidebar {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	background: var(--sidebar-bg);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border: 1px solid color-mix(in srgb, var(--ui-border) 60%, transparent);
	border-radius: 1rem;
	padding: 2rem;
	box-shadow: var(--card-shadow);
}

@media (min-width: 1024px) {
	.cv-layout {
		flex-direction: row;
		gap: 4rem;
	}

	.cv-sidebar {
		width: 300px;
		flex-shrink: 0;
		position: sticky;
		top: 5rem;
		height: fit-content;
	}

	.cv-main {
		flex: 1;
		min-width: 0;
	}
}
</style>

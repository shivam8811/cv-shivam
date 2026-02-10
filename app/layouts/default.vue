<script setup lang="ts">
import { cv } from "~/data/cv";

useSeoMeta({
	title: `${cv.name} — ${cv.title}`,
	description: cv.summary,
	ogTitle: `${cv.name} — ${cv.title}`,
	ogDescription: cv.summary,
});

const links = [
	{
		label: "About",
		to: "/",
		icon: "i-heroicons-user",
	},
	{
		label: "Experience",
		to: "/experience",
		icon: "i-heroicons-briefcase",
	},
	{
		label: "Education",
		to: "/education",
		icon: "i-heroicons-academic-cap",
	},
	{
		label: "Projects",
		to: "/projects",
		icon: "i-heroicons-code-bracket",
	},
];
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
			</aside>

			<main class="cv-main">
				<nav class="cv-nav">
					<BaseButton
						v-for="link in links"
						:key="link.to"
						:to="link.to"
						:icon="link.icon"
						class="cv-nav__item"
						active-class="cv-nav__item--active"
					>
						{{ link.label }}
					</BaseButton>
				</nav>

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

.cv-nav {
	display: flex;
	gap: 0.5rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid var(--ui-border);
	padding-bottom: 0.5rem;
	overflow-x: auto;
}

.cv-nav__item {
	border-radius: 0.5rem;
	color: var(--ui-text-muted);
}

.cv-nav__item--active {
	background-color: color-mix(in srgb, var(--ui-primary) 10%, transparent);
	color: var(--ui-primary) !important;
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

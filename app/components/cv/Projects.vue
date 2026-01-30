<script setup lang="ts">
import type { Project } from "~/types/cv";

defineProps<{
	items: Project[];
}>();
</script>

<template>
	<section class="projects">
		<h2 class="section-title">Projects</h2>

		<div class="projects__grid">
			<UCard
				v-for="project in items"
				:key="project.name"
			>
				<h3 class="projects__name">{{ project.name }}</h3>

				<p class="projects__description">{{ project.description }}</p>

				<div
					v-if="project.technologies.length"
					class="projects__tech"
				>
					<UBadge
						v-for="tech in project.technologies"
						:key="tech"
						variant="outline"
						size="xs"
					>
						{{ tech }}
					</UBadge>
				</div>

				<div
					v-if="project.url || project.github"
					class="projects__links"
				>
					<UButton
						v-if="project.url"
						:to="project.url"
						target="_blank"
						variant="soft"
						size="xs"
						icon="i-heroicons-arrow-top-right-on-square"
					>
						Live
					</UButton>

					<UButton
						v-if="project.github"
						:to="project.github"
						target="_blank"
						variant="soft"
						size="xs"
						icon="i-heroicons-code-bracket"
					>
						Code
					</UButton>
				</div>
			</UCard>
		</div>
	</section>
</template>

<style scoped>
.projects {
	margin-bottom: 3rem;
}

.projects:last-child {
	margin-bottom: 0;
}

.projects__grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
}

.projects__name {
	font-size: 1.125rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
}

.projects__description {
	color: var(--ui-text-muted);
	font-size: 0.875rem;
	margin-bottom: 1rem;
}

.projects__tech {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 1rem;
}

.projects__tech:last-child {
	margin-bottom: 0;
}

.projects__links {
	display: flex;
	gap: 0.5rem;
}

@media (min-width: 768px) {
	.projects__grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>

<script setup lang="ts">
import type { Project } from "~/types/cv";

defineProps<{
	items: Project[];
}>();
</script>

<template>
	<section class="projects">
		<h2 class="sr-only">Projects</h2>

		<div class="projects__grid">
			<BaseCard
				v-for="project in items"
				:key="project.name"
				class="project-card"
			>
				<div class="project-card__header">
					<h3 class="project-card__name">
						<a
							v-if="project.url"
							:href="project.url"
							target="_blank"
							rel="noopener noreferrer"
							class="project-card__link"
						>
							{{ project.name }}
						</a>
						<span v-else>{{ project.name }}</span>
					</h3>

					<div class="project-card__actions">
						<BaseButton
							v-if="project.github"
							:to="project.github"
							target="_blank"
							rel="noopener noreferrer"
							size="xs"
							icon="i-simple-icons-github"
							aria-label="View source on GitHub"
						/>
					</div>
				</div>

				<p class="project-card__description">{{ project.description }}</p>

				<div
					v-if="project.technologies.length"
					class="project-card__tech"
				>
					<span
						v-for="tech in project.technologies"
						:key="tech"
						class="project-card__tag"
					>
						{{ tech }}
					</span>
				</div>
			</BaseCard>
		</div>
	</section>
</template>

<style scoped>
.projects {
	margin-bottom: 0;
}

.projects__grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
}

.project-card {
	height: 100%;
	transition: transform 0.2s;
}

.project-card:hover {
	transform: translateY(-2px);
}

.project-card__header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 0.75rem;
}

.project-card__name {
	font-size: 1.125rem;
	font-weight: 600;
}

.project-card__link {
	color: inherit;
	text-decoration: none;
}

.project-card__link:hover {
	text-decoration: underline;
}

.project-card__description {
	color: var(--ui-text-muted);
	font-size: 0.875rem;
	line-height: 1.6;
	margin-bottom: 1.5rem;
	flex: 1;
}

.project-card__tech {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.project-card__tag {
	font-size: 0.75rem;
	color: var(--ui-text-muted);
	font-family: monospace;
}

@media (min-width: 768px) {
	.projects__grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>

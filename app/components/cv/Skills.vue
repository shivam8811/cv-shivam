<script setup lang="ts">
import type { Skill } from "~/types/cv";

defineProps<{
	items: Skill[];
}>();
</script>

<template>
	<section class="skills">
		<h2 class="section-title">Skills</h2>

		<div class="skills__list">
			<div
				v-for="skill in items"
				:key="skill.category"
				class="skills__group"
			>
				<h3 class="skills__category">{{ skill.category }}</h3>
				<div class="skills__items">
					<BaseBadge
						v-for="item in skill.items"
						:key="item"
					>
						{{ item }}
					</BaseBadge>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.skills {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.section-title {
	font-size: 0.875rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--ui-text-muted);
}

.skills__list {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.skills__category {
	font-size: 0.875rem;
	font-weight: 600;
	margin-bottom: 0.75rem;
}

.skills__items {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}
</style>

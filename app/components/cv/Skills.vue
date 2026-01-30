<script setup lang="ts">
import type { Skill } from "~/types/cv";

defineProps<{
	items: Skill[];
}>();
</script>

<template>
	<section class="skills">
		<h2 class="section-title">Skills</h2>

		<div class="skills__grid">
			<UCard
				v-for="skill in items"
				:key="skill.category"
			>
				<h3 class="skills__category">{{ skill.category }}</h3>

				<div
					v-if="skill.items.length"
					class="skills__list"
				>
					<UBadge
						v-for="item in skill.items"
						:key="item"
						variant="soft"
					>
						{{ item }}
					</UBadge>
				</div>
			</UCard>
		</div>
	</section>
</template>

<style scoped>
.skills {
	margin-bottom: 3rem;
}

.skills__grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
}

.skills__category {
	font-weight: 600;
	margin-bottom: 0.75rem;
}

.skills__list {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

@media (min-width: 640px) {
	.skills__grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>

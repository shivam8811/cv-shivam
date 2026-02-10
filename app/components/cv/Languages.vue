<script setup lang="ts">
import type { Language } from "~/types/cv";

defineProps<{
	items: Language[];
}>();

const levelPercentage: Record<Language["level"], number> = {
	Native: 100,
	Fluent: 85,
	Advanced: 70,
	Intermediate: 55,
	Basic: 30,
};
</script>

<template>
	<section class="languages">
		<h2 class="section-title">Languages</h2>

		<div class="languages__list">
			<div
				v-for="lang in items"
				:key="lang.name"
				class="languages__item"
			>
				<div class="languages__header">
					<span class="languages__name">{{ lang.name }}</span>
					<span class="languages__level">{{ lang.level }}</span>
				</div>
				<UProgress
					:model-value="levelPercentage[lang.level]"
					:max="100"
					size="sm"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.languages {
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

.languages__list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.languages__header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.375rem;
}

.languages__name {
	font-size: 0.875rem;
	font-weight: 600;
	color: var(--ui-text);
}

.languages__level {
	font-size: 0.75rem;
	color: var(--ui-text-muted);
}
</style>

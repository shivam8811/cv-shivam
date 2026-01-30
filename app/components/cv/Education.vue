<script setup lang="ts">
import type { Education } from "~/types/cv";

defineProps<{
	items: Education[];
}>();

const formatDateRange = (startDate: string, endDate: string) => {
	return `${startDate} — ${endDate}`;
};
</script>

<template>
	<section class="education">
		<h2 class="section-title">Education</h2>

		<div class="education__list">
			<UCard
				v-for="item in items"
				:key="`${item.institution}-${item.degree}`"
			>
				<div class="education__header">
					<div class="education__info">
						<h3 class="education__degree">
							{{ item.degree }} in {{ item.field }}
						</h3>
						<p class="education__institution">{{ item.institution }}</p>
					</div>

					<UBadge
						variant="subtle"
						class="education__date"
					>
						{{ formatDateRange(item.startDate, item.endDate) }}
					</UBadge>
				</div>
			</UCard>
		</div>
	</section>
</template>

<style scoped>
.education {
	margin-bottom: 3rem;
}

.education__list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.education__header {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.education__info {
	flex: 1;
}

.education__degree {
	font-size: 1.125rem;
	font-weight: 600;
}

.education__institution {
	color: var(--ui-text-muted);
}

.education__date {
	width: fit-content;
}

@media (min-width: 768px) {
	.education__header {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
}
</style>

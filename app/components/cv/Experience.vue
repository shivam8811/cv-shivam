<script setup lang="ts">
import type { Experience } from "~/types/cv";

defineProps<{
	items: Experience[];
}>();

const formatDateRange = (startDate: string, endDate?: string, current?: boolean) => {
	const end = current ? "Present" : endDate ?? "";
	return `${startDate} — ${end}`;
};
</script>

<template>
	<section class="experience">
		<h2 class="section-title">Experience</h2>

		<div class="experience__list">
			<UCard
				v-for="item in items"
				:key="`${item.company}-${item.role}`"
			>
				<div class="experience__header">
					<div class="experience__info">
						<h3 class="experience__role">{{ item.role }}</h3>
						<p class="experience__company">{{ item.company }}</p>
					</div>

					<UBadge
						variant="subtle"
						class="experience__date"
					>
						{{ formatDateRange(item.startDate, item.endDate, item.current) }}
					</UBadge>
				</div>

				<ul
					v-if="item.description.length"
					class="experience__description"
				>
					<li
						v-for="(desc, index) in item.description"
						:key="index"
					>
						{{ desc }}
					</li>
				</ul>
			</UCard>
		</div>
	</section>
</template>

<style scoped>
.experience {
	margin-bottom: 3rem;
}

.experience__list {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.experience__header {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 0.75rem;
}

.experience__header:last-child {
	margin-bottom: 0;
}

.experience__info {
	flex: 1;
}

.experience__role {
	font-size: 1.125rem;
	font-weight: 600;
}

.experience__company {
	color: var(--ui-text-muted);
}

.experience__date {
	width: fit-content;
}

.experience__description {
	list-style: disc;
	list-style-position: inside;
	color: var(--ui-text-muted);
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

@media (min-width: 768px) {
	.experience__header {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
}
</style>

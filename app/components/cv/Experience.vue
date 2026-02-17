<script setup lang="ts">
import type { Experience } from "~/types/cv";

defineProps<{
	items: Experience[];
}>();
</script>

<template>
	<section class="experience">
		<h2 class="sr-only">Work Experience</h2>

		<div class="experience__list">
			<BaseCard
				v-for="item in items"
				:key="item.company"
				class="experience__item"
			>
				<div class="experience__header">
					<div class="experience__main">
						<h3 class="experience__role">{{ item.role }}</h3>
						<a
							v-if="item.url"
							:href="item.url"
							target="_blank"
							rel="noopener noreferrer"
							class="experience__company"
						>
							{{ item.company }}
						</a>
						<span
							v-else
							class="experience__company"
						>
							{{ item.company }}
						</span>
					</div>

					<BaseBadge class="experience__date">
						{{ formatDateRange(item.startDate, item.endDate, item.current) }}
					</BaseBadge>
				</div>

				<div
					v-if="item.positions?.length"
					class="experience__positions"
				>
					<div
					v-for="pos in item.positions"
					:key="`${pos.type}-${pos.startDate}`"
					class="experience__position"
				>
					<span class="experience__position-role">{{ pos.type }}</span>
						<span class="experience__position-date">
							{{ formatDateRange(pos.startDate, pos.endDate, pos.current) }}
						</span>
					</div>
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
			</BaseCard>
		</div>
	</section>
</template>

<style scoped>
.experience {
	margin-bottom: 4rem;
}

.experience__list {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.experience__item {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.experience__header {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.experience__role {
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--ui-text);
}

.experience__company {
	font-size: 1rem;
	color: var(--ui-primary);
	text-decoration: none;
	font-weight: 500;
}

a.experience__company:hover {
	text-decoration: underline;
}

.experience__date {
	white-space: nowrap;
	flex-shrink: 0;
}

.experience__positions {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-left: 0.75rem;
	border-left: 2px solid var(--ui-primary);
}

.experience__position {
	display: flex;
	flex-direction: column;
	gap: 0.125rem;
}

.experience__position-role {
	font-size: 0.9375rem;
	font-weight: 500;
	color: var(--ui-text);
}

.experience__position-date {
	font-size: 0.8125rem;
	color: var(--ui-text-muted);
}

.experience__description {
	color: var(--ui-text-muted);
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	line-height: 1.6;
}

@media (min-width: 768px) {
	.experience__header {
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
	}

	.experience__position {
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
	}
}
</style>

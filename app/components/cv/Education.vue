<script setup lang="ts">
import type { Education } from "~/types/cv";

defineProps<{
	items: Education[];
}>();
</script>

<template>
	<section class="education">
		<h2 class="sr-only">Education</h2>

		<div class="education__list">
			<BaseCard
				v-for="item in items"
				:key="`${item.institution}-${item.degree}`"
				class="education__item"
			>
				<div class="education__header">
					<div class="education__main">
						<h3 class="education__institution">
						<a
							v-if="item.url"
							:href="item.url"
							target="_blank"
							rel="noopener noreferrer"
							class="education__link"
						>
								{{ item.institution }}
							</a>
							<span v-else>{{ item.institution }}</span>
						</h3>
						<p class="education__degree">
							{{ item.degree }} in {{ item.field }}
						</p>
					</div>

					<BaseBadge class="education__date">
						{{ formatDateRange(item.startDate, item.endDate) }}
					</BaseBadge>
				</div>
			</BaseCard>
		</div>
	</section>
</template>

<style scoped>
.education {
	margin-bottom: 4rem;
}

.education__list {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.education__item {
	display: flex;
	flex-direction: column;
}

.education__header {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.education__institution {
	font-size: 1.125rem;
	font-weight: 600;
	color: var(--ui-text);
}

.education__link {
	color: inherit;
	text-decoration: none;
}

.education__link:hover {
	text-decoration: underline;
}

.education__degree {
	color: var(--ui-text-muted);
}

.education__date {
	white-space: nowrap;
	flex-shrink: 0;
}

@media (min-width: 768px) {
	.education__header {
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
	}
}
</style>

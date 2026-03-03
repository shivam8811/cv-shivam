<script setup lang="ts">
defineProps<{
	summary: string;
}>();
</script>

<template>
	<section class="about">
		<h2 class="section-title">About Me</h2>
		<p class="about__text">{{ summary }}</p>
	</section>
</template>

<style scoped>
.about {
	margin-bottom: 4rem;
}

.section-title {
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
	letter-spacing: -0.025em;
}

.about__text {
	color: var(--ui-text-muted);
	line-height: 1.75;
	font-size: 1.125rem;
}
</style>

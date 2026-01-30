<script setup lang="ts">
defineProps<{
	summary: string;
}>();
</script>

<template>
	<section class="about">
		<h2 class="section-title">About</h2>
		<p class="about__text">{{ summary }}</p>
	</section>
</template>

<style scoped>
.about {
	margin-bottom: 3rem;
}

.about__text {
	color: var(--ui-text-muted);
	line-height: 1.75;
}

.about:empty {
	display: none;
}
</style>

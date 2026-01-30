<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");

const toggleColorMode = () => {
	colorMode.preference = isDark.value ? "light" : "dark";
};
</script>

<template>
	<UApp>
		<header class="header">
			<UContainer class="header__container">
				<span class="header__logo">CV</span>

				<ClientOnly>
					<UButton
						variant="ghost"
						size="sm"
						:icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
						aria-label="Toggle color mode"
						@click="toggleColorMode"
					/>

					<template #fallback>
						<div class="header__placeholder" />
					</template>
				</ClientOnly>
			</UContainer>
		</header>

		<main>
			<NuxtRouteAnnouncer />
			<NuxtPage />
		</main>
	</UApp>
</template>

<style scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: var(--ui-bg);
	backdrop-filter: blur(8px);
	border-bottom: 1px solid var(--ui-border);
}

.header__container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block: 1rem;
	max-width: 56rem;
}

.header__logo {
	font-weight: 600;
}

.header__placeholder {
	width: 2rem;
	height: 2rem;
}
</style>

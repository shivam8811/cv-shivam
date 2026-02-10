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
				<ClientOnly>
					<BaseButton
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

		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>

<style scoped>
.header {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 50;
	padding: 1rem;
	border-radius: 0 0 0 0.75rem;
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
}

.header__container {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.header__placeholder {
	width: 2rem;
	height: 2rem;
}
</style>

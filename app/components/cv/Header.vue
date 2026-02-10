<script setup lang="ts">
import type { ContactInfo } from "~/types/cv";

defineProps<{
	name: string;
	title: string;
	contact: ContactInfo;
}>();
</script>

<template>
	<section class="header">
		<UAvatar
			:alt="name"
			size="3xl"
			class="header__avatar"
            :ui="{ root: 'bg-primary-500 dark:bg-primary-400 text-white dark:text-slate-900' }"
		/>

		<h1 class="header__name">{{ name }}</h1>
		<p class="header__title">{{ title }}</p>

		<div class="header__links">
			<BaseButton
				v-if="contact.email"
				:to="`mailto:${contact.email}`"
				icon="i-heroicons-envelope"
				class="header__link"
			>
				{{ contact.email }}
			</BaseButton>

			<BaseButton
				v-if="contact.phone"
				:to="`tel:${contact.phone}`"
				icon="i-heroicons-phone"
				class="header__link"
			>
				{{ contact.phone }}
			</BaseButton>

			<BaseButton
				v-if="contact.location"
				icon="i-heroicons-map-pin"
				class="header__link"
			>
				{{ contact.location }}
			</BaseButton>

			<div class="header__social">
			<BaseButton
				v-if="contact.github"
				:to="contact.github"
				target="_blank"
				rel="noopener noreferrer"
				icon="i-simple-icons-github"
				aria-label="GitHub profile"
			/>

			<BaseButton
				v-if="contact.linkedin"
				:to="contact.linkedin"
				target="_blank"
				rel="noopener noreferrer"
				icon="i-simple-icons-linkedin"
				aria-label="LinkedIn profile"
			/>

			<BaseButton
				v-if="contact.website"
				:to="contact.website"
				target="_blank"
				rel="noopener noreferrer"
				icon="i-heroicons-globe-alt"
				aria-label="Personal website"
			/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.header {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.header__avatar {
	margin-bottom: 1rem;
	font-weight: 600;
}

.header__name {
	font-size: 2rem;
	font-weight: 800;
	line-height: 1.1;
	letter-spacing: -0.025em;
    color: var(--ui-text);
}

.header__title {
	font-size: 1.125rem;
	color: var(--ui-primary);
    font-weight: 500;
	margin-bottom: 1rem;
}

.header__links {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	align-items: flex-start;
}

.header__link {
	padding-left: 0;
}

.header__link:hover {
    color: var(--ui-primary);
}

.header__social {
	display: flex;
	gap: 0.5rem;
	margin-top: 1rem;
}
</style>

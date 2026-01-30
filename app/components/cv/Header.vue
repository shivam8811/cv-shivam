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
		<h1 class="header__name">{{ name }}</h1>
		<p class="header__title">{{ title }}</p>

		<div
			v-if="contact.email || contact.phone || contact.location"
			class="header__contact"
		>
			<UButton
				v-if="contact.email"
				:to="`mailto:${contact.email}`"
				variant="soft"
				size="sm"
				icon="i-heroicons-envelope"
			>
				{{ contact.email }}
			</UButton>

			<UButton
				v-if="contact.phone"
				:to="`tel:${contact.phone}`"
				variant="soft"
				size="sm"
				icon="i-heroicons-phone"
			>
				{{ contact.phone }}
			</UButton>

			<UButton
				v-if="contact.location"
				variant="soft"
				size="sm"
				icon="i-heroicons-map-pin"
			>
				{{ contact.location }}
			</UButton>
		</div>

		<div
			v-if="contact.github || contact.linkedin || contact.website"
			class="header__social"
		>
			<UButton
				v-if="contact.github"
				:to="contact.github"
				target="_blank"
				variant="ghost"
				size="sm"
				icon="i-heroicons-code-bracket"
			>
				GitHub
			</UButton>

			<UButton
				v-if="contact.linkedin"
				:to="contact.linkedin"
				target="_blank"
				variant="ghost"
				size="sm"
				icon="i-heroicons-link"
			>
				LinkedIn
			</UButton>

			<UButton
				v-if="contact.website"
				:to="contact.website"
				target="_blank"
				variant="ghost"
				size="sm"
				icon="i-heroicons-globe-alt"
			>
				Website
			</UButton>
		</div>
	</section>
</template>

<style scoped>
.header {
	margin-bottom: 3rem;
}

.header__name {
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

.header__title {
	font-size: 1.25rem;
	color: var(--ui-text-muted);
	margin-bottom: 1.5rem;
}

.header__contact {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
	margin-bottom: 1rem;
}

.header__contact:last-child {
	margin-bottom: 0;
}

.header__social {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

@media (min-width: 768px) {
	.header__name {
		font-size: 3rem;
	}

	.header__title {
		font-size: 1.5rem;
	}
}
</style>

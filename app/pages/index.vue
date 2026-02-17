<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { cv } from "~/data/cv";

const items: TabsItem[] = [
	{
		label: "Experience",
		icon: "i-heroicons-briefcase",
		value: "experience",
		slot: "experience",
	},
	{
		label: "Education",
		icon: "i-heroicons-academic-cap",
		value: "education",
		slot: "education",
	},
	{
		label: "Projects",
		icon: "i-heroicons-code-bracket",
		value: "projects",
		slot: "projects",
	},
	{
		label: "About",
		icon: "i-heroicons-user",
		value: "about",
		slot: "about",
	},
];

const route = useRoute();

const validValues = new Set(items.map((i) => i.value));

function getTabFromHash() {
	const hash = route.hash?.replace("#", "");
	return hash && validValues.has(hash) ? hash : "experience";
}

const activeTab = ref(getTabFromHash());

watch(activeTab, (value) => {
	if (import.meta.client) {
		window.history.replaceState(window.history.state, "", `/#${value}`);
	}
});

onMounted(() => {
	activeTab.value = getTabFromHash();
});
</script>

<template>
	<BaseTabs
		v-model="activeTab"
		:items="items"
	>
		<template #experience>
			<CvExperience
				v-if="cv.experience.length"
				:items="cv.experience"
			/>
		</template>

		<template #education>
			<CvEducation
				v-if="cv.education.length"
				:items="cv.education"
			/>
		</template>

		<template #projects>
			<CvProjects
				v-if="cv.projects.length"
				:items="cv.projects"
			/>
		</template>

		<template #about>
			<CvAbout :summary="cv.summary" />
		</template>
	</BaseTabs>
</template>

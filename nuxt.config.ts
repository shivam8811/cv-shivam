// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	modules: ["@nuxt/ui", "@nuxt/icon"],
	runtimeConfig: {
		public: {
			siteUrl: "https://shivam-cv.space",
		},
	},
	app: {
		head: {
			htmlAttrs: { lang: "en" },
		},
	},
	routeRules: {
		"/experience": { redirect: "/#experience" },
		"/education": { redirect: "/#education" },
		"/projects": { redirect: "/#projects" },
		"/about": { redirect: "/#about" },
	},
	icon: {
		serverBundle: "remote",
	},
});

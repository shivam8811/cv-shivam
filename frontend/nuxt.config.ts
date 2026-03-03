// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/eslint"],
	devtools: { enabled: true },
	app: {
		head: {
			htmlAttrs: { lang: "en" },
		},
	},
	css: ["~/assets/css/main.css"],
	runtimeConfig: {
		public: {
			siteUrl: "https://shivam-cv.space",
		},
	},
	routeRules: {
		"/experience": { redirect: "/#experience" },
		"/education": { redirect: "/#education" },
		"/projects": { redirect: "/#projects" },
		"/about": { redirect: "/#about" },
	},
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: true,
		},
	},
	icon: {
		serverBundle: "remote",
	},
});

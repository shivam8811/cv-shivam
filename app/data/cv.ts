import type { CV } from "~/types/cv";

export const cv: CV = {
	name: "Shivam Chaudhary",
	title: "Fullstack Software Engineer",
	summary:
		"Fullstack Software Engineer at CHECK24 with hands-on experience in PHP, Laravel, JavaScript, and Vue.js. Holds a background in International Engineering Sciences with a specialization in Applied Computer Science from Hochschule Fulda, including an Erasmus+ semester at Universidad de Málaga, Spain.",
	contact: {
		email: "shivam.svm007@gmail.com",
		phone: "+49 151 71198811",
		location: "Fulda, Germany",
		linkedin: "https://www.linkedin.com/in/shivam-chaudhary-b17b271a2/",
		github: "https://github.com/shivam8811",
		xing: "https://www.xing.com/profile/Shivam_Chaudhary4/cv",
	},
	experience: [
		{
			company: "CHECK24 Vergleichsportal GmbH",
			role: "Fullstack Developer",
			startDate: "2025-11",
			current: true,
			description: [
				"Developing and maintaining fullstack web applications with Vue.js and Symfony",
				"Building and optimizing MySQL database queries and schemas",
				"Leveraging AI-assisted development tools such as Cursor to boost productivity",
			],
		},
		{
			company: "CHECK24 Vergleichsportal GmbH",
			role: "Fullstack Developer (Intern)",
			startDate: "2025-08",
			endDate: "2025-10",
			description: [
				"Completed internship working on fullstack features with Vue.js, Symfony, and MySQL",
				"Integrated AI-powered tooling into the development workflow",
			],
		},
		{
			company: "CHECK24 Vergleichsportal GmbH",
			role: "Fullstack Developer (Working Student)",
			startDate: "2025-03",
			endDate: "2025-07",
			description: [
				"Contributed to fullstack development using Vue.js, Symfony, and MySQL",
				"Utilized AI-assisted tools like Cursor to accelerate feature development",
			],
		},
		{
			company: "Starmobile IT GmbH",
			role: "Fullstack Developer (Working Student)",
			startDate: "2022-11",
			endDate: "2025-02",
			description: [
				"Developed and maintained fullstack web applications as a working student",
				"Built features with PHP, Laravel, JavaScript, and Vue.js (Vuetify, Pinia, Composition API)",
				"Worked with InertiaJs for seamless single-page application experiences",
				"Managed and optimized MySQL databases",
				"Implemented responsive UI components with Bootstrap",
			],
		},
	],
	education: [
		{
			institution: "Hochschule Fulda",
			degree: "Bachelor of Science",
			field: "International Engineering Sciences (Applied Computer Science)",
			startDate: "2020-10",
			endDate: "Present",
		},
		{
			institution: "Universidad de Málaga, Spain (Erasmus+)",
			degree: "Exchange Semester",
			field: "Computer Science",
			startDate: "2024-02",
			endDate: "2024-07",
		},
		{
			institution: "Tandem Frankfurt (ZDSK)",
			degree: "Language Course",
			field: "German Language",
			startDate: "2019-11",
			endDate: "2020-08",
		},
		{
			institution: "University of Lucknow, India",
			degree: "Bachelor of Science",
			field: "Physics, Mathematics, Astronomy",
			startDate: "2016-08",
			endDate: "2019-07",
		},
	],
	skills: [
		{
			category: "Languages",
			items: ["PHP", "JavaScript", "TypeScript", "Java", "HTML", "CSS"],
		},
		{
			category: "Frontend",
			items: ["Vue.js", "Vuetify", "Pinia", "InertiaJs", "Bootstrap"],
		},
		{
			category: "Backend",
			items: ["Symfony", "Laravel", "Express.js", "Prisma ORM", "MySQL"],
		},
		{
			category: "Tools",
			items: ["Git", "GitHub", "Cursor", "AI-Assisted Development"],
		},
	],
	languages: [
		{
			name: "English",
			level: "Fluent",
		},
		{
			name: "German",
			level: "Fluent",
		},
		{
			name: "Hindi",
			level: "Native",
		},
	],
	projects: [
		{
			name: "Go-News",
			description: "A news application built with Go",
			technologies: ["Go"],
			github: "https://github.com/shivam8811/go-news",
		},
		{
			name: "Coach-Finder",
			description: "A platform to find and connect with coaches",
			technologies: ["Vue.js"],
			url: "https://coach-finder123.netlify.app/coaches",
			github: "https://github.com/shivam8811/coach-finder",
		},
		{
			name: "Event-Organizer",
			description: "A web application for organizing and managing events",
			technologies: ["JavaScript"],
			url: "https://eventplanner.azurewebsites.net/",
			github: "https://github.com/HSFD-WS-24-25/backend",
		},
	],
};

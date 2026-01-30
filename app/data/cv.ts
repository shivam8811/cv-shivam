import type { CV } from "~/types/cv";

export const cv: CV = {
	name: "Your Name",
	title: "Software Developer",
	summary:
		"Passionate software developer with experience in building web applications.",
	contact: {
		email: "your.email@example.com",
		phone: "+1 234 567 890",
		location: "City, Country",
		linkedin: "https://linkedin.com/in/yourprofile",
		github: "https://github.com/yourusername",
		website: "https://yourwebsite.com",
	},
	experience: [
		{
			company: "Company Name",
			role: "Software Developer",
			startDate: "2022-01",
			current: true,
			description: [
				"Developed and maintained web applications using modern technologies",
				"Collaborated with cross-functional teams to deliver features",
				"Improved application performance and code quality",
			],
		},
	],
	education: [
		{
			institution: "University Name",
			degree: "Bachelor of Science",
			field: "Computer Science",
			startDate: "2018",
			endDate: "2022",
		},
	],
	skills: [
		{
			category: "Languages",
			items: ["TypeScript", "JavaScript", "Python"],
		},
		{
			category: "Frontend",
			items: ["Vue.js", "Nuxt", "React", "Tailwind CSS"],
		},
		{
			category: "Backend",
			items: ["Node.js", "Express", "PostgreSQL"],
		},
		{
			category: "Tools",
			items: ["Git", "Docker", "VS Code"],
		},
	],
	projects: [
		{
			name: "Project Name",
			description: "A brief description of what this project does",
			technologies: ["Nuxt", "TypeScript", "Tailwind CSS"],
			url: "https://project-url.com",
			github: "https://github.com/yourusername/project",
		},
	],
};

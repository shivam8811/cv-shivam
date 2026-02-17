export interface ContactInfo {
	email: string;
	phone?: string;
	location?: string;
	linkedin?: string;
	github?: string;
	xing?: string;
}

export interface Position {
	role: string;
	startDate: string;
	endDate?: string;
	current?: boolean;
}

export interface Experience {
	company: string;
	url?: string;
	role: string;
	startDate: string;
	endDate?: string;
	current?: boolean;
	description: string[];
	positions?: Position[];
}

export interface Education {
	institution: string;
	url?: string;
	degree: string;
	field: string;
	startDate: string;
	endDate: string;
}

export interface Skill {
	category: string;
	items: string[];
}

export interface Language {
	name: string;
	level: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic";
}

export interface Project {
	name: string;
	description: string;
	technologies: string[];
	url?: string;
	github?: string;
}

export interface CV {
	name: string;
	title: string;
	summary: string;
	contact: ContactInfo;
	experience: Experience[];
	education: Education[];
	skills: Skill[];
	languages: Language[];
	projects: Project[];
}

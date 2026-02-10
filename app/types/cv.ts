export interface ContactInfo {
	email: string;
	phone?: string;
	location?: string;
	linkedin?: string;
	github?: string;
	website?: string;
}

export interface Experience {
	company: string;
	url?: string;
	role: string;
	startDate: string;
	endDate?: string;
	current?: boolean;
	description: string[];
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
	projects: Project[];
}

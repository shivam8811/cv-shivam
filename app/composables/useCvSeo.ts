import { cv } from "~/data/cv";

export function useCvSeo() {
	const config = useRuntimeConfig();
	const siteUrl = config.public.siteUrl as string;
	const title = `${cv.name} — ${cv.title}`;

	useSeoMeta({
		title,
		description: cv.summary,
		robots: "index, follow",
		ogTitle: title,
		ogDescription: cv.summary,
		ogType: "profile",
		ogUrl: siteUrl,
		profileFirstName: cv.name.split(" ")[0],
		profileLastName: cv.name.split(" ")[1],
		twitterCard: "summary_large_image",
		twitterTitle: title,
		twitterDescription: cv.summary,
	});

	useHead({
		link: [{ rel: "canonical", href: siteUrl }],
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: cv.name,
					jobTitle: cv.title,
					description: cv.summary,
					url: siteUrl,
					email: cv.contact.email,
					telephone: cv.contact.phone,
					address: {
						"@type": "PostalAddress",
						addressLocality: cv.contact.location,
					},
					worksFor: {
						"@type": "Organization",
						name: cv.experience[0]?.company,
					},
					alumniOf: cv.education.map((edu) => ({
						"@type": "EducationalOrganization",
						name: edu.institution,
					})),
					knowsLanguage: cv.languages.map((lang) => lang.name),
					sameAs: [
						cv.contact.linkedin,
						cv.contact.xing,
						cv.contact.github,
					].filter(Boolean),
				}),
			},
		],
	});
}

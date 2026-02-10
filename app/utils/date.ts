export const formatDateRange = (
	startDate: string,
	endDate?: string,
	current?: boolean,
) => {
	const end = current ? "Present" : (endDate ?? "");
	return `${startDate} — ${end}`;
};

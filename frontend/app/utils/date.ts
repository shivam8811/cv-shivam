const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function formatDate(date: string): string {
	const parts = date.split("-");
	const year = parts[0];
	const monthIndex = parseInt(parts[1] ?? "1", 10) - 1;
	return `${MONTHS[monthIndex]} ${year}`;
}

export const formatDateRange = (
	startDate: string,
	endDate?: string,
	current?: boolean,
) => {
	const start = formatDate(startDate);
	const end = current ? "Present" : endDate ? formatDate(endDate) : "";
	return `${start} — ${end}`;
};

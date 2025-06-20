import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatTimestamp(timestamp: number): {
	human: string;
	relative: string;
} {
	const date = new Date(timestamp * 1000);

	return {
		human: date.toLocaleString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			timeZoneName: "short",
		}),
		relative: formatDistanceToNow(date, {
			includeSeconds: true,
			addSuffix: true,
		}),
	};
}

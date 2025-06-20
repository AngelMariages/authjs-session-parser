import { Sun, Moon, Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const ThemeToggleSkeleton = () => (
	<Button
		variant="outline"
		size="sm"
		className="ml-4 border-2 border-black dark:border-white bg-white dark:bg-gray-900 hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white rounded-none"
		disabled
	>
		<Loader2 className="w-4 h-4 animate-spin" />
	</Button>
);

export const ThemeToggle = () => {
	const { setTheme, theme } = useTheme();
	const isDarkMode = theme === "dark";

	const toggleTheme = () => {
		setTheme(isDarkMode ? "light" : "dark");
	};

	return (
		<Button
			onClick={toggleTheme}
			variant="outline"
			size="sm"
			className="ml-4 border-2 border-black dark:border-white bg-white dark:bg-gray-900 hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white rounded-none"
		>
			{isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
		</Button>
	);
};

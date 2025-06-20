"use client";
import { ThemeToggleSkeleton } from "@/components/theme-toggle";
import { Shield } from "lucide-react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
	() => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle),
	{
		ssr: false,
		loading: () => <ThemeToggleSkeleton />,
	}
);

export const AppHeader = () => {
	return (
		<header className="text-center mb-12">
			<div className="flex items-center justify-center gap-3 mb-4">
				<Shield className="w-8 h-8 dark:text-white" />
				<h1 className="text-4xl font-black uppercase tracking-wider dark:text-white">
					NextAuth JWE Parser
				</h1>
				<ThemeToggle />
			</div>
			<p className="text-lg font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
				🔒 All calculations performed locally in your browser
			</p>
		</header>
	);
};

"use client";
import { ThemeToggleSkeleton } from "@/components/theme-toggle";
import { Github } from "@/resources/icons/Github";
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
					NextAuth JWE session Parser
				</h1>
				<div className="flex items-center gap-2">
					<a
						href="https://github.com/angelmariages/authjs-session-parser"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
						aria-label="View source code on GitHub"
					>
						<Github className="w-6 h-6 dark:fill-white transition-colors" />
					</a>
					<ThemeToggle />
				</div>
			</div>
			<p className="font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
				🔒 All calculations performed locally in your browser
			</p>
		</header>
	);
};

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

// Define the structured data as a separate component or variable for cleanliness
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "AuthJS JWE Parser",
	applicationCategory: "DeveloperApplication",
	operatingSystem: "Any (Web)",
	description:
		"A browser-based utility to securely parse and decrypt NextAuth.js (AuthJS) JWE session tokens for debugging and development.",
	url: "https://authjs-session-parser.mlegna.dev/",
	creator: {
		"@type": "Person",
		name: "Àngel Mariages",
		url: "https://github.com/angelmariages",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	height: "device-height",
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
	userScalable: false,
	viewportFit: "cover",

	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#000000" },
	],
};

export const metadata: Metadata = {
	title: "AuthJS JWE Parser - A NextAuth.js Utility",
	description:
		"Parse and decrypt NextAuth.js (AuthJS) JWE session tokens locally in your browser for easy debugging.",

	openGraph: {
		title: "AuthJS JWE Parser - A NextAuth.js Utility",
		description:
			"Parse and decrypt NextAuth.js (AuthJS) JWE session tokens locally in your browser for easy debugging.",
		url: "https://authjs-session-parser.mlegna.dev/",
		siteName: "NextAuth | AuthJS JWE Parser",
		type: "website",
	},
	twitter: {
		title: "NextAuth | AuthJS JWE Parser",
		description:
			"Parse and decrypt NextAuth.js | AuthJS JWE session tokens locally in your browser.",
		card: "summary_large_image",
	},
	robots: "index, follow",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	appleWebApp: {
		title: "NextAuth JWE Parser",
		statusBarStyle: "black-translucent",
	},
	manifest: "/manifest.json",
	applicationName: "AuthJS JWE Parser",
	authors: [
		{ name: "Àngel Mariages", url: "https://github.com/angelmariages" },
	],
	creator: "Àngel Mariages",
	generator: "v0",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Script
					src="/stats.js"
					strategy="afterInteractive"
					data-website-id="60228a05-84f8-4dc2-9bcf-b680174ceb5d"
				/>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

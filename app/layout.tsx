import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: "NextAuth | AuthJS JWE Parser",
	description:
		"Parse and decrypt NextAuth.js | AuthJS JWE session tokens locally in your browser.",

	openGraph: {
		title: "NextAuth | AuthJS JWE Parser",
		description:
			"Parse and decrypt NextAuth.js | AuthJS JWE session tokens locally in your browser.",
		url: "https://nextauth-jwe-parser.vercel.app",
		siteName: "NextAuth | AuthJS JWE Parser",
		images: [
			{
				url: "https://authjs-jwe-parser.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "NextAuth | AuthJS JWE Parser",
			},
		],
		type: "website",
	},
	twitter: {
		title: "NextAuth | AuthJS JWE Parser",
		description:
			"Parse and decrypt NextAuth.js | AuthJS JWE session tokens locally in your browser.",
		card: "summary_large_image",
		images: [
			{
				url: "https://nextauth-jwe-parser.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "NextAuth | AuthJS JWE Parser",
			},
		],
	},
	keywords: [
		"NextAuth.js",
		"JWE",
		"JWT",
		"JSON Web Encryption",
		"Session Token",
		"Local Parsing",
		"Browser Encryption",
		"Security",
		"Privacy",
		"Web Development",
		"JavaScript",
		"React",
		"Next.js",
		"Open Source",
		"Frontend",
		"Encryption",
		"Decryption",
		"Token Parsing",
		"Web Security",
		"Web Privacy",
		"Web Applications",
	],
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
	viewport: "width=device-width, initial-scale=1",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#000000" },
	],
	manifest: "/manifest.json",
	applicationName: "NextAuth JWE Parser",
	creator: "Àngel Mariages",
	authors: [
		{
			name: "Àngel Mariages",
			url: "https://github.com/angelmariages",
		},
	],
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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

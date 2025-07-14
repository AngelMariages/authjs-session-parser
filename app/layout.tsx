import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

// Define the structured data as a separate component or variable for cleanliness
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "AuthJS JWE Parser - NextAuth.js Session Token Decoder",
	applicationCategory: "DeveloperApplication",
	operatingSystem: "Any (Web)",
	description:
		"A secure browser-based utility to parse and decrypt NextAuth.js (AuthJS) JWE session tokens for debugging and development. Parse encrypted JWT tokens locally with complete client-side processing.",
	url: "https://authjs-session-parser.mlegna.dev/",
	keywords: ["NextAuth.js", "JWE", "JWT", "session parser", "authentication", "token decoder", "JavaScript", "encryption", "debugging tool"],
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD"
	},
	creator: {
		"@type": "Person",
		name: "Àngel Mariages",
		url: "https://github.com/angelmariages",
	},
	sameAs: [
		"https://github.com/angelmariages"
	],
	audience: {
		"@type": "Audience",
		audienceType: "Developers"
	},
	featureList: [
		"Decrypt NextAuth.js JWE session tokens",
		"Parse encrypted session payloads",
		"100% client-side processing",
		"No server requests required",
		"Secure local token analysis"
	]
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
	metadataBase: new URL('https://authjs-session-parser.mlegna.dev'),
	title: "AuthJS JWE Parser - NextAuth.js Session Token Decoder & Debugger Tool",
	description:
		"Free online tool to parse, decrypt and debug NextAuth.js (AuthJS) JWE session tokens locally in your browser. Secure client-side JWT decryption for developers.",

	openGraph: {
		title: "AuthJS JWE Parser - NextAuth.js Session Token Decoder",
		description:
			"Parse and decrypt NextAuth.js (AuthJS) JWE session tokens locally in your browser for easy debugging. Free developer tool with 100% client-side processing.",
		url: "https://authjs-session-parser.mlegna.dev/",
		siteName: "AuthJS JWE Parser",
		type: "website",
		images: [
			{
				url: "https://authjs-session-parser.mlegna.dev/opengraph-image",
				width: 1200,
				height: 630,
				alt: "AuthJS JWE Parser - NextAuth.js Session Token Decoder"
			}
		]
	},
	twitter: {
		title: "AuthJS JWE Parser - NextAuth.js Token Decoder",
		description:
			"Parse and decrypt NextAuth.js | AuthJS JWE session tokens locally in your browser. Free developer debugging tool.",
		card: "summary_large_image",
		images: ["https://authjs-session-parser.mlegna.dev/opengraph-image"]
	},
	robots: "index, follow",
	keywords: ["NextAuth.js", "AuthJS", "JWE", "JWT", "session parser", "token decoder", "authentication", "debugging", "developer tools", "JavaScript", "encryption"],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	appleWebApp: {
		title: "AuthJS JWE Parser",
		statusBarStyle: "black-translucent",
	},
	manifest: "/manifest.webmanifest",
	applicationName: "AuthJS JWE Parser",
	authors: [
		{ name: "Àngel Mariages", url: "https://github.com/angelmariages" },
	],
	creator: "Àngel Mariages",
	generator: "Next.js",
	category: "Developer Tools",
	classification: "Web Application",
	alternates: {
		canonical: "https://authjs-session-parser.mlegna.dev/"
	}
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

import { AppHeader } from "@/components/main-feature/app-header";
import { RenderResult } from "@/components/main-feature/render-result";
import { TokenDataInputs } from "@/components/main-feature/token-data-inputs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Shield, Lock, Zap } from "lucide-react";
import { atom } from "jotai";

const dataAtom = atom<{
	encryptedToken: string;
	secret: string;
	isLoading: boolean;
	result: { header: any; payload: any } | null;
	error: string;
}>({
	encryptedToken: "",
	secret: "",
	isLoading: false,
	result: null,
	error: "",
});

export { dataAtom };

const InfoSection = () => {
	return (
		<Card className="mb-12 border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
			<CardContent className="p-8">
				<div className="max-w-4xl mx-auto space-y-6">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
							Secure NextAuth.js JWE Session Token Parser & Decoder
						</h2>
						<div className="flex items-center justify-center gap-6 mb-6">
							<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
								<Shield className="w-4 h-4 text-green-600" />
								<span>Client-Side Processing</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
								<Lock className="w-4 h-4 text-blue-600" />
								<span>JWE Decryption</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
								<Zap className="w-4 h-4 text-purple-600" />
								<span>Zero Server Requests</span>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8 text-slate-700 dark:text-slate-300">
						<div className="space-y-4">
							<p className="leading-relaxed">
								This <strong>NextAuth.js JWE session parser</strong> provides a
								secure, browser-based solution for decoding and analyzing
								encrypted JSON Web Encryption (JWE) tokens used in Next.js
								authentication systems. Unlike standard JWT tokens, JWE tokens
								encrypt the payload data, ensuring sensitive user session
								information remains confidential during transmission and
								storage.
							</p>
							<p className="leading-relaxed">
								Built specifically for developers working with{" "}
								<strong>NextAuth.js encrypted sessions</strong>, this tool
								performs all cryptographic operations locally in your browser,
								ensuring your sensitive session tokens and encryption keys never
								leave your device. Perfect for debugging authentication flows,
								analyzing session data, and understanding JWE token structure in
								Next.js applications.
							</p>
						</div>

						<div className="space-y-4">
							<div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-600">
								<h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
									Key Features
								</h3>
								<ul className="space-y-2 text-sm">
									<li className="flex items-center gap-2">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										<span>Decrypt NextAuth.js JWE session tokens</span>
									</li>
									<li className="flex items-center gap-2">
										<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										<span>Parse encrypted session payloads</span>
									</li>
									<li className="flex items-center gap-2">
										<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
										<span>100% client-side processing</span>
									</li>
								</ul>
							</div>

							<div className="text-center">
								<Link href="/how-it-works">
									<Button variant="outline" className="gap-2">
										<BookOpen className="w-4 h-4" />
										Learn How JWE Encryption Works
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default function Component() {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 p-8 transition-colors">
			<div className="max-w-6xl mx-auto">
				<AppHeader />

				<div className="flex flex-col items-center justify-center gap-8">
					<div className="flex-1 w-full">
						<TokenDataInputs />

						<RenderResult />
					</div>

					<InfoSection />
				</div>
			</div>
		</div>
	);
}

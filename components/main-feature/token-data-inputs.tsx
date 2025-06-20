"use client";

import { Loader2 } from "lucide-react";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { dataAtom } from "@/app/page";
import { parseJWESession } from "@/lib/parse-authjs-jwe";

export const TokenDataInputs = ({}) => {
	const [appData, setAppData] = useAtom(dataAtom);

	const handleParse = async () => {
		if (!appData.encryptedToken.trim() || !appData.secret.trim()) {
			setAppData((prev) => ({
				...prev,
				error: "Both encrypted token and secret are required",
			}));
			return;
		}

		setAppData((prev) => ({
			...prev,
			isLoading: true,
			error: "",
			result: null,
		}));

		try {
			console.log("Parsing session token:", appData.encryptedToken);
			console.log("Using secret key:", appData.secret);
			const parsed = await parseJWESession(
				appData.encryptedToken,
				appData.secret
			);
			setAppData((prev) => ({
				...prev,
				result: {
					header: parsed.protectedHeader,
					payload: parsed.payload,
				},
			}));
		} catch (err) {
			setAppData((prev) => ({
				...prev,
				error: "Failed to parse session token. Please check your inputs.",
			}));
		} finally {
			setAppData((prev) => ({ ...prev, isLoading: false }));
		}
	};

	return (
		<Card className="p-8 mb-8 bg-white dark:bg-gray-900 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
			<div className="grid gap-6">
				<div>
					<Label
						htmlFor="token"
						className="text-lg font-black uppercase tracking-wider mb-2 block dark:text-white"
					>
						Encrypted Session Token
					</Label>
					<Textarea
						id="token"
						placeholder="eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..."
						value={appData.encryptedToken}
						onChange={(e) =>
							setAppData((prev) => ({
								...prev,
								encryptedToken: e.target.value,
							}))
						}
						className="min-h-[120px] font-mono text-sm border-2 border-black dark:border-white rounded-none focus:ring-0 focus:border-black dark:focus:border-white resize-none bg-white dark:bg-gray-800 dark:text-white"
					/>
				</div>

				<div>
					<Label
						htmlFor="secret"
						className="text-lg font-black uppercase tracking-wider mb-2 block dark:text-white"
					>
						Secret Key
					</Label>
					<Textarea
						id="secret"
						placeholder="your-secret-key-here"
						value={appData.secret}
						onChange={(e) =>
							setAppData((prev) => ({ ...prev, secret: e.target.value }))
						}
						className="min-h-[80px] font-mono text-sm border-2 border-black dark:border-white rounded-none focus:ring-0 focus:border-black dark:focus:border-white resize-none bg-white dark:bg-gray-800 dark:text-white"
					/>
				</div>

				{appData.error && (
					<div className="bg-red-100 dark:bg-red-900 border-2 border-red-500 p-4 text-red-800 dark:text-red-200 font-bold uppercase tracking-wide">
						⚠️ {appData.error}
					</div>
				)}

				<Button
					onClick={handleParse}
					disabled={appData.isLoading}
					className="bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white font-black uppercase tracking-wider py-6 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none transition-all rounded-none"
				>
					{appData.isLoading ? (
						<>
							<Loader2 className="w-5 h-5 mr-2 animate-spin" />
							Parsing...
						</>
					) : (
						"Parse Session"
					)}
				</Button>
			</div>
		</Card>
	);
};

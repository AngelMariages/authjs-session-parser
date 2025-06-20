import { AppHeader } from "@/components/main-feature/app-header";
import { RenderResult } from "@/components/main-feature/render-result";
import { TokenDataInputs } from "@/components/main-feature/token-data-inputs";
import { atom } from "jotai";

export const dataAtom = atom<{
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

export default function Component() {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 p-8 transition-colors">
			<div className="max-w-6xl mx-auto">
				<AppHeader />

				<TokenDataInputs />

				<RenderResult />
			</div>
		</div>
	);
}

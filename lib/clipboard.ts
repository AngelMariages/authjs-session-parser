export async function copyToClipboard(text: string) {
	if (!navigator.clipboard) {
		console.warn("Clipboard API not supported in this browser.");
		return;
	}

	await navigator.clipboard.writeText(JSON.stringify(text, null, 2));
}

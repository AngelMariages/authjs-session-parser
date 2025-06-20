export function isTokenExpired(payload: any): boolean {
	if (!payload.exp) return false;
	const now = Math.floor(Date.now() / 1000);
	return payload.exp < now;
}

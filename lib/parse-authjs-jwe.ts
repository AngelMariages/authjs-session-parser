import * as jose from "jose";

const encodeInfo = (info: string): Uint8Array => {
	return new TextEncoder().encode(info);
};

const getDerivedEncryptionKey = async (
	keyMaterial: string
): Promise<Uint8Array> => {
	const {
		crypto: { subtle },
	} = globalThis;

	const res = new Uint8Array(
		await subtle.deriveBits(
			{
				name: "HKDF",
				hash: "SHA-256",
				salt: new Uint8Array(), // Empty salt for session tokens
				info: encodeInfo(`NextAuth.js Generated Encryption Key`),
			},
			await subtle.importKey("raw", Buffer.from(keyMaterial), "HKDF", false, [
				"deriveBits",
			]),
			32 << 3 // 32 bytes * 8 bits per byte = 256 bits
		)
	);

	return res;
};

export const parseJWESession = async (
	session: string,
	nextJSSecret: string
): Promise<{
	payload: jose.JWTPayload;
	protectedHeader: jose.JWSHeaderParameters;
}> => {
	const encryptionSecret = await getDerivedEncryptionKey(nextJSSecret);

	const { payload, protectedHeader } = await jose.jwtDecrypt(
		session,
		encryptionSecret,
		{
			clockTolerance: 15,
		}
	);

	return { payload, protectedHeader };
};

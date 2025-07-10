import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata - this is used by Next.js to set headers correctly.
export const alt = "AuthJS JWE Parser - A NextAuth.js Utility";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

// Function to read a font file from the public directory.
// It's memoized with `cache` in Next.js 14, but for clarity, we'll use a direct promise.
const getFont = (fontFileName: string) => {
	// The path is relative to the project root.
	// In production on Vercel, the path needs to be resolved correctly.
	// Using `join(process.cwd(), ...)` is a robust way to do this.
	const fontPath = join(process.cwd(), "resources", "fonts", fontFileName);
	return readFile(fontPath);
};

// Image generation
export default async function Image() {
	// Load the fonts you've downloaded.
	const interSemiBold = await getFont("Inter-SemiBold.ttf");
	const interRegular = await getFont("Inter-Regular.ttf");

	return new ImageResponse(
		(
			// Root container with background styles. It has only ONE child.
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					backgroundColor: "#0A0A0A",
					backgroundImage:
						"linear-gradient(to bottom right, #171717 25%, #0A0A0A 75%)",
					color: "white",
					fontFamily: '"Inter"',
				}}
			>
				{/* This wrapper uses a pure flexbox layout to position children */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between", // Pushes children to top and bottom
						alignItems: "center",
						width: "100%",
						height: "100%",
						padding: "60px",
					}}
				>
					{/* Empty spacer div to push the main content down from the top */}
					<div style={{ display: "flex" }} />

					{/* Main content container (vertically centered by space-between) */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center",
						}}
					>
						{/* Icon: A stylized lock representing security and encryption */}
						<div style={{ display: "flex", marginBottom: "40px" }}>
							<svg
								width="90"
								height="90"
								viewBox="0 0 24 24"
								fill="none"
								stroke="rgba(255, 255, 255, 0.8)"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
								<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
							</svg>
						</div>

						{/* Main Title */}
						<h1
							style={{
								fontSize: "64px",
								fontWeight: 600,
								lineHeight: 1.1,
								margin: 0,
								color: "#FFFFFF",
							}}
						>
							AuthJS JWE Parser
						</h1>

						{/* Subtitle */}
						<p
							style={{
								fontSize: "32px",
								fontWeight: 400,
								marginTop: "15px",
								color: "#A1A1AA",
								maxWidth: "80%",
							}}
						>
							Parse and decrypt session tokens locally in your browser
						</p>
					</div>

					{/* Footer, now a flex item pushed to the bottom and aligned right */}
					<div
						style={{
							display: "flex",
							width: "100%",
							justifyContent: "flex-end", // Aligns text to the right
							fontSize: "20px",
							fontWeight: 400,
							color: "#71717A",
						}}
					>
						by Àngel Mariages
					</div>
				</div>
			</div>
		),
		// ImageResponse options
		{
			...size,
			fonts: [
				{
					name: "Inter",
					data: interRegular,
					weight: 400,
					style: "normal",
				},
				{
					name: "Inter",
					data: interSemiBold,
					weight: 600,
					style: "normal",
				},
			],
		}
	);
}

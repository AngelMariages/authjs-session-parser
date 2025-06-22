"use client";
import { AlertTriangle, Code, CheckCircle, Copy } from "lucide-react";
import { useState, JSX, PropsWithChildren } from "react";
import { Card } from "./ui/card";
import { copyToClipboard } from "@/lib/clipboard";
import { JWT_CLAIMS } from "@/lib/jwt-claims";
import { isTokenExpired } from "@/lib/jwt";
import { cn, formatTimestamp } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";

const getJWTClaimsTooltip = (key: string): string => {
	if (JWT_CLAIMS[key as keyof typeof JWT_CLAIMS]) {
		return JWT_CLAIMS[key as keyof typeof JWT_CLAIMS];
	}
	return "";
};

const KeyTooltip = ({ claimKey, children }: PropsWithChildren<{ claimKey: string }>) => {
	const tooltip = getJWTClaimsTooltip(claimKey);

	if (!tooltip) {
		return children;
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="cursor-help">
					{children}
				</TooltipTrigger>
				<TooltipContent className="max-w-xs">
					<div className="font-semibold">{tooltip}</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

const ValueRenderer = ({
	data,
	dataName,
}: {
	data: any;
	dataName?: string;
}): JSX.Element => {
	if (typeof data === "object" && data !== null) {
		const keysLength = Object.keys(data).length;

		return (
			<div className="ml-4">
				{"{"}
				<div className="ml-4">
					{Object.entries(data).map(([key, value], index) => (
						<div key={key} className="my-1">
							<span className="relative group">
								<KeyTooltip claimKey={key}>
									<span className="text-blue-600 dark:text-blue-400 font-bold">
										"{key}"
									</span>
								</KeyTooltip>
							</span>
							<span className="text-gray-600 dark:text-gray-400">: </span>
							<ValueRenderer data={value} dataName={key} />
							{index < keysLength - 1 && (
								<span className="text-gray-600 dark:text-gray-400">,</span>
							)}
						</div>
					))}
				</div>
				{"}"}
			</div>
		);
	}

	if (typeof data === "string") {
		return <span className="text-green-600 dark:text-green-400">"{data}"</span>;
	}

	if (typeof data === "number") {
		// Check if it's a 10-digit timestamp
		const isTimestamp = data.toString().length === 10 && data > 1000000000;
		const isExpiredTimestamp =
			dataName?.toLowerCase()?.includes("exp") &&
			data < Math.floor(Date.now() / 1000);

		if (isTimestamp) {
			const { human, relative } = formatTimestamp(data);
			return (
				<span className="relative group">
					<span
						className={cn(
							"border-b-2 border-dotted cursor-help",
							isExpiredTimestamp
								? "text-red-600 dark:text-red-400 border-red-400"
								: "text-orange-600 dark:text-orange-400 border-orange-400"
						)}
					>
						{data}
						{isExpiredTimestamp && (
							<AlertTriangle className="inline w-4 h-4 ml-1 text-red-500" />
						)}
					</span>
					<div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-black dark:bg-white text-white dark:text-black text-xs rounded px-2 py-1 whitespace-nowrap z-10 shadow-lg">
						<div className="font-semibold">{human}</div>
						<div className="text-gray-300 dark:text-gray-600">{relative}</div>
						{isExpiredTimestamp && (
							<div className="text-red-300 dark:text-red-600 font-bold">
								⚠️ EXPIRED
							</div>
						)}
						<div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
					</div>
				</span>
			);
		}
		return <span className="text-purple-600 dark:text-purple-400">{data}</span>;
	}

	if (typeof data === "boolean") {
		return (
			<span className="text-red-600 dark:text-red-400">{data.toString()}</span>
		);
	}

	return (
		<span className="text-gray-600 dark:text-gray-400">{String(data)}</span>
	);
};

export function JsonViewer({ data, title }: { data: any; title: string }) {
	const [copied, setCopied] = useState(false);
	const isExpired = title === "Payload" && isTokenExpired(data);

	const handleCopy = async () => {
		await copyToClipboard(data).catch((err) => {
			console.error("Failed to copy to clipboard:", err);
		});
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Card className="p-6 bg-white dark:bg-gray-900 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-2">
					<Code className="w-5 h-5 dark:text-white" />
					<h3 className="text-xl font-black uppercase tracking-wider dark:text-white">
						{title}
					</h3>
					{isExpired && (
						<div className="relative group">
							<AlertTriangle className="w-5 h-5 text-red-500 cursor-help" />
							<div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-black dark:bg-white text-white dark:text-black text-xs rounded px-2 py-1 whitespace-nowrap z-10 shadow-lg">
								<div className="font-semibold">Token Expired</div>
								<div className="text-gray-300 dark:text-gray-600">
									This session is no longer valid
								</div>
								<div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
							</div>
						</div>
					)}
				</div>
				<Button
					onClick={handleCopy}
					variant="outline"
					size="sm"
					className="border-2 border-black dark:border-white bg-white dark:bg-gray-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold uppercase tracking-wider rounded-none"
				>
					{copied ? (
						<>
							<CheckCircle className="w-4 h-4 mr-1" />
							Copied!
						</>
					) : (
						<>
							<Copy className="w-4 h-4 mr-1" />
							Copy
						</>
					)}
				</Button>
			</div>
			<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-none border-2 border-black dark:border-white font-mono text-sm overflow-x-auto">
				<ValueRenderer data={data} />
			</div>
		</Card>
	);
}

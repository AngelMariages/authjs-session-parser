import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { AppHeader } from "@/components/main-feature/app-header";
import Link from "next/link";
import {
	Shield,
	Lock,
	Key,
	Eye,
	EyeOff,
	FileText,
	Layers,
	ArrowRight,
	CheckCircle,
	AlertTriangle,
	Info,
	Zap,
	Users,
	Server,
	ArrowLeft,
} from "lucide-react";

export default function HowItWorksPage() {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 p-8 transition-colors">
			<div className="max-w-4xl mx-auto">
				<AppHeader />

				{/* Hero Section */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border">
						<Lock className="w-5 h-5 text-slate-600 dark:text-slate-400" />
						<span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
							Security Deep Dive
						</span>
					</div>
					<h2 className="text-4xl font-bold mb-6 dark:text-white tracking-tight">
						Understanding Encrypted JWTs
					</h2>{" "}
					<p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
						Explore how JSON Web Encryption (JWE) provides enterprise-grade
						confidentiality to signed tokens, ensuring sensitive data remains
						protected during transmission.
					</p>
					<div className="mt-8">
						<Link href="/">
							<Button variant="outline" className="gap-2">
								<ArrowLeft className="w-4 h-4" />
								Back to Parser
							</Button>
						</Link>
					</div>
				</div>

				{/* Introduction */}
				<Card className="mb-12 border-slate-200 dark:border-slate-700">
					<CardHeader className="pb-4">
						<CardTitle className="flex items-center gap-3 text-xl">
							<div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							</div>
							The Challenge of Secure Communication
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-6">
						<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
							In modern web applications, JSON Web Tokens (JWTs) serve as the
							backbone for secure information exchange. However, standard JWTs
							present a fundamental trade-off between
							<strong> authenticity and confidentiality</strong>.
						</p>

						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-3">
								<div className="flex items-center gap-2 mb-2">
									<Eye className="w-5 h-5 text-amber-600" />
									<h4 className="font-semibold text-slate-800 dark:text-slate-200">
										Standard JWT (JWS)
									</h4>
								</div>
								<p className="text-slate-600 dark:text-slate-400 text-sm">
									Like a{" "}
									<strong>signed document in a transparent envelope</strong> —
									the signature proves authenticity, but the contents are
									visible to anyone who intercepts it.
								</p>
							</div>

							<div className="space-y-3">
								<div className="flex items-center gap-2 mb-2">
									<Lock className="w-5 h-5 text-green-600" />
									<h4 className="font-semibold text-slate-800 dark:text-slate-200">
										Encrypted JWT (JWE)
									</h4>
								</div>
								<p className="text-slate-600 dark:text-slate-400 text-sm">
									Like placing that signed document in a{" "}
									<strong>cryptographically sealed vault</strong> — only the
									intended recipient possesses the key to access the contents.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Standard Tokens Section */}
				<Card className="mb-12 border-slate-200 dark:border-slate-700">
					<CardHeader className="pb-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
								<Eye className="w-5 h-5 text-amber-600 dark:text-amber-400" />
							</div>
							<CardTitle className="text-xl">
								JSON Web Signature (JWS) Structure
							</CardTitle>
						</div>
						<CardDescription className="text-base">
							Standard JWTs provide integrity and authentication through digital
							signatures, but offer no confidentiality protection.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-8">
						<div className="grid md:grid-cols-3 gap-6">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-help">
											<div className="font-mono text-xs text-center mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
												HEADER
											</div>
											<h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
												Algorithm Metadata
											</h4>
											<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
												Specifies cryptographic algorithms and token type
												information
											</p>
										</div>
									</TooltipTrigger>
									<TooltipContent side="bottom" className="max-w-xs">
										<p className="font-mono text-xs">
											{'{ "alg": "ES256", "typ": "JWT" }'}
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>

							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-colors cursor-help">
											<div className="font-mono text-xs text-center mb-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
												PAYLOAD
											</div>
											<h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
												Claims Data
											</h4>
											<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
												Contains user identity, permissions, and
												application-specific data
											</p>
										</div>
									</TooltipTrigger>
									<TooltipContent side="bottom" className="max-w-xs">
										<p className="text-xs">
											User ID, roles, expiration time, and custom claims
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>

							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-help">
											<div className="font-mono text-xs text-center mb-4 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
												SIGNATURE
											</div>
											<h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
												Integrity Proof
											</h4>
											<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
												Cryptographic signature ensuring authenticity and
												preventing tampering
											</p>
										</div>
									</TooltipTrigger>
									<TooltipContent side="bottom" className="max-w-xs">
										<p className="text-xs">
											ECDSA, RSA, or HMAC signature validation
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>

						<div className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10 p-6 rounded-r-lg">
							<div className="flex items-start gap-3">
								<AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
								<div>
									<h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">
										Security Limitation
									</h4>
									<p className="text-amber-800 dark:text-amber-300 leading-relaxed">
										While JWS tokens guarantee{" "}
										<strong>authenticity and integrity</strong>, they provide
										<strong> zero confidentiality</strong>. Sensitive payload
										data such as personally identifiable information (PII) or
										access credentials remain fully exposed to any party with
										access to the token.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Encrypted Tokens Section */}
				<Card className="mb-12 border-slate-200 dark:border-slate-700">
					<CardHeader className="pb-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
								<Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
							</div>
							<CardTitle className="text-xl">
								JSON Web Encryption (JWE) Architecture
							</CardTitle>
						</div>
						<CardDescription className="text-base">
							JWE extends the JWT framework with comprehensive confidentiality
							protection, expanding the token structure to five distinct
							components.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-8">
						<div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border">
							<div className="font-mono text-sm text-center space-x-2 flex items-center justify-center flex-wrap">
								<span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded">
									HEADER
								</span>
								<span className="text-slate-400">·</span>
								<span className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded">
									ENCRYPTED_KEY
								</span>
								<span className="text-slate-400">·</span>
								<span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 rounded">
									IV
								</span>
								<span className="text-slate-400">·</span>
								<span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded">
									CIPHERTEXT
								</span>
								<span className="text-slate-400">·</span>
								<span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded">
									AUTH_TAG
								</span>
							</div>
						</div>

						<div className="grid gap-6">
							<div className="flex gap-4 p-6 border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">
								<div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
									1
								</div>
								<div className="space-y-2">
									<h4 className="font-semibold text-blue-900 dark:text-blue-200">
										Protected Header
									</h4>
									<p className="text-blue-800 dark:text-blue-300 leading-relaxed">
										Unencrypted metadata specifying the cryptographic algorithms
										used for key encryption and content encryption, enabling
										proper decryption procedures.
									</p>
								</div>
							</div>

							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="flex gap-4 p-6 border-l-4 border-red-500 bg-red-50/50 dark:bg-red-900/10 rounded-r-lg cursor-help hover:bg-red-100/50 dark:hover:bg-red-900/20 transition-colors">
											<div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
												2
											</div>
											<div className="space-y-2">
												<h4 className="font-semibold text-red-900 dark:text-red-200">
													Encrypted Content Encryption Key (CEK)
												</h4>
												<p className="text-red-800 dark:text-red-300 leading-relaxed">
													Contains the encrypted symmetric key when key wrapping
													is used. In server-only encryption scenarios, this
													field remains empty since the server retains the
													encryption key internally.
												</p>
												<div className="mt-3 p-3 bg-red-100 dark:bg-red-900/20 rounded border font-mono text-xs">
													<span className="text-red-700 dark:text-red-300">
														Server-only tokens:
													</span>
													<div className="mt-1 text-red-600 dark:text-red-400">
														HEADER.
														<span className="bg-red-200 dark:bg-red-800 px-1">
															[empty]
														</span>
														.IV.CIPHERTEXT.AUTH_TAG
													</div>
												</div>
											</div>
										</div>
									</TooltipTrigger>
									<TooltipContent side="bottom" className="max-w-md">
										<div className="space-y-2">
											<p className="font-semibold">
												Why is the CEK field empty?
											</p>
											<p className="text-sm">
												In authentication-only scenarios, the server encrypts
												the JWE using its own secret key without sharing the
												encryption key with the client. The client receives the
												token for authentication purposes but cannot decrypt or
												modify its contents - only the server possesses the
												necessary key for decryption operations.
											</p>
											<div className="mt-2 p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs">
												<span className="text-slate-600 dark:text-slate-400">
													Example:
												</span>
												<br />
												eyJ0eXAiOiJKV1QiLCJhbGciOiJFQ0RILUVTK....
												<span className="text-red-500">[empty]</span>
												..GciOUVBMjU2R0NNIn0..8w7Qx...mVzw
											</div>
										</div>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>

							<div className="flex gap-4 p-6 border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-r-lg">
								<div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
									3
								</div>
								<div className="space-y-2">
									<h4 className="font-semibold text-yellow-900 dark:text-yellow-200">
										Initialization Vector (IV)
									</h4>
									<p className="text-yellow-800 dark:text-yellow-300 leading-relaxed">
										Cryptographically secure random value ensuring semantic
										security. Prevents identical plaintexts from producing
										identical ciphertexts, thwarting pattern analysis attacks.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-6 border-l-4 border-green-500 bg-green-50/50 dark:bg-green-900/10 rounded-r-lg">
								<div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
									4
								</div>
								<div className="space-y-2">
									<h4 className="font-semibold text-green-900 dark:text-green-200">
										Encrypted Payload (Ciphertext)
									</h4>
									<p className="text-green-800 dark:text-green-300 leading-relaxed">
										The confidential data encrypted using authenticated
										encryption algorithms. In nested implementations, this
										contains the complete JWS token.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-6 border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-lg">
								<div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
									5
								</div>
								<div className="space-y-2">
									<h4 className="font-semibold text-purple-900 dark:text-purple-200">
										Authentication Tag
									</h4>
									<p className="text-purple-800 dark:text-purple-300 leading-relaxed">
										Cryptographic integrity verification ensuring both
										ciphertext and additional authenticated data remain
										unmodified during transmission.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* How It Works Section */}
				<Card className="mb-12 border-slate-200 dark:border-slate-700">
					<CardHeader className="pb-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<Key className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							</div>
							<CardTitle className="text-xl">
								Hybrid Encryption Implementation
							</CardTitle>
						</div>
						<CardDescription className="text-base">
							JWE leverages hybrid cryptography to achieve both performance and
							security, combining asymmetric and symmetric encryption
							methodologies.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-8">
						<div className="grid lg:grid-cols-2 gap-8">
							<div className="space-y-6">
								<div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
									<div className="flex items-center gap-3 mb-4">
										<Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
										<h4 className="font-semibold text-slate-800 dark:text-slate-200">
											Asymmetric Cryptography
										</h4>
									</div>
									<div className="space-y-4">
										<div className="space-y-3">
											<div className="flex items-center gap-2">
												<CheckCircle className="w-4 h-4 text-green-600" />
												<span className="text-sm text-slate-700 dark:text-slate-300">
													Mathematically secure key exchange
												</span>
											</div>
											<div className="flex items-center gap-2">
												<CheckCircle className="w-4 h-4 text-green-600" />
												<span className="text-sm text-slate-700 dark:text-slate-300">
													No shared secret required
												</span>
											</div>
											<div className="flex items-center gap-2">
												<Zap className="w-4 h-4 text-amber-600" />
												<span className="text-sm text-slate-700 dark:text-slate-300">
													Computationally intensive
												</span>
											</div>
										</div>
										<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
											Utilizes public-key cryptography (RSA, ECDH) for secure
											key distribution. Ideal for initial key exchange but
											inefficient for bulk data encryption.
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-6">
								<div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
									<div className="flex items-center gap-3 mb-4">
										<Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
										<h4 className="font-semibold text-slate-800 dark:text-slate-200">
											Symmetric Cryptography
										</h4>
									</div>
									<div className="space-y-4">
										<div className="space-y-3">
											<div className="flex items-center gap-2">
												<CheckCircle className="w-4 h-4 text-green-600" />
												<span className="text-sm text-slate-700 dark:text-slate-300">
													High-performance encryption
												</span>
											</div>
											<div className="flex items-center gap-2">
												<CheckCircle className="w-4 h-4 text-green-600" />
												<span className="text-sm text-slate-700 dark:text-slate-300">
													Optimized for large payloads
												</span>
											</div>
											<div className="flex items-center gap-2">
												<Users className="w-4 h-4 text-amber-600" />
												<span className="text-sm text-slate-700 dark:text-slate-300">
													Requires secure key distribution
												</span>
											</div>
										</div>
										<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
											Employs algorithms like AES-GCM for authenticated
											encryption. Provides rapid encryption/decryption with
											built-in integrity verification.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 p-6 rounded-r-lg">
							<div className="flex items-start gap-3">
								<Info className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
								<div className="space-y-3">
									<h4 className="font-semibold text-green-900 dark:text-green-200">
										Optimal Hybrid Strategy
									</h4>
									<p className="text-green-800 dark:text-green-300 leading-relaxed">
										JWE generates a ephemeral Content Encryption Key (CEK) for
										high-speed symmetric encryption of the payload data. This
										CEK is then secured using the recipient's public key through
										asymmetric encryption. This approach delivers
										enterprise-grade security while maintaining performance
										scalability for production workloads.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Nested JWTs Section */}
				<Card className="mb-12 border-slate-200 dark:border-slate-700">
					<CardHeader className="pb-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
								<Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
							</div>
							<CardTitle className="text-xl">
								Nested JWT Implementation
							</CardTitle>
						</div>
						<CardDescription className="text-base">
							The most robust security model combines JWS authentication with
							JWE confidentiality, providing comprehensive protection for
							sensitive token-based communications.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-8">
						{/* Mobile Flow Diagram */}
						<div className="md:hidden">
							<div className="space-y-6">
								<div className="text-center space-y-4 p-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
									<div className="w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center mx-auto">
										<FileText className="w-8 h-8 text-white" />
									</div>
									<div>
										<p className="font-semibold text-slate-800 dark:text-slate-200">
											Create JWS
										</p>
										<p className="text-xs text-slate-600 dark:text-slate-400">
											Digital signature
										</p>
									</div>
								</div>

								<div className="flex justify-center">
									<div className="w-px h-8 bg-slate-300 dark:bg-slate-600"></div>
								</div>

								<div className="text-center space-y-4 p-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
									<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg mx-auto">
										<Lock className="w-8 h-8 text-white" />
									</div>
									<div>
										<p className="font-semibold text-slate-800 dark:text-slate-200">
											Encrypt JWS
										</p>
										<p className="text-xs text-slate-600 dark:text-slate-400">
											JWE wrapping
										</p>
									</div>
								</div>

								<div className="flex justify-center">
									<div className="w-px h-8 bg-slate-300 dark:bg-slate-600"></div>
								</div>

								<div className="text-center space-y-4 p-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
									<div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg mx-auto">
										<Shield className="w-8 h-8 text-white" />
									</div>
									<div>
										<p className="font-semibold text-slate-800 dark:text-slate-200">
											Nested JWT
										</p>
										<p className="text-xs text-slate-600 dark:text-slate-400">
											Complete protection
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Desktop Flow Diagram */}
						<div className="hidden md:block">
							<div className="text-center">
								<div className="inline-flex items-center gap-6 p-6 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600">
									<div className="text-center space-y-3 flex items-center justify-center flex-col">
										<div className="w-20 h-20 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
											<FileText className="w-10 h-10 text-white" />
										</div>
										<div>
											<p className="font-semibold text-slate-800 dark:text-slate-200">
												Create JWS
											</p>
											<p className="text-xs text-slate-600 dark:text-slate-400">
												Digital signature
											</p>
										</div>
									</div>

									<ArrowRight className="w-8 h-8 text-slate-400" />

									<div className="text-center space-y-3 flex items-center justify-center flex-col">
										<div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
											<Lock className="w-10 h-10 text-white" />
										</div>
										<div>
											<p className="font-semibold text-slate-800 dark:text-slate-200">
												Encrypt JWS
											</p>
											<p className="text-xs text-slate-600 dark:text-slate-400">
												JWE wrapping
											</p>
										</div>
									</div>

									<ArrowRight className="w-8 h-8 text-slate-400" />

									<div className="text-center space-y-3 flex items-center justify-center flex-col">
										<div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
											<Shield className="w-10 h-10 text-white" />
										</div>
										<div>
											<p className="font-semibold text-slate-800 dark:text-slate-200">
												Nested JWT
											</p>
											<p className="text-xs text-slate-600 dark:text-slate-400">
												Complete protection
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="grid lg:grid-cols-2 gap-8">
							<div className="space-y-4">
								<div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 p-6 rounded-r-lg">
									<div className="flex items-center gap-3 mb-3">
										<EyeOff className="w-5 h-5 text-green-600 dark:text-green-400" />
										<h4 className="font-semibold text-green-800 dark:text-green-300">
											Confidentiality Assurance
										</h4>
									</div>
									<p className="text-green-700 dark:text-green-400 leading-relaxed">
										JWE encryption ensures payload contents remain opaque to
										unauthorized parties, protecting sensitive data during
										transmission and storage.
									</p>
								</div>

								<div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-r-lg">
									<div className="flex items-center gap-3 mb-3">
										<Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
										<h4 className="font-semibold text-blue-800 dark:text-blue-300">
											Authenticity Verification
										</h4>
									</div>
									<p className="text-blue-700 dark:text-blue-400 leading-relaxed">
										Underlying JWS signature provides cryptographic proof of
										token origin and integrity after successful decryption.
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/10 p-6 rounded-r-lg">
									<div className="flex items-center gap-3 mb-3">
										<Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />
										<h4 className="font-semibold text-purple-800 dark:text-purple-300">
											Processing Workflow
										</h4>
									</div>
									<div className="space-y-2 text-purple-700 dark:text-purple-400">
										<p className="text-sm">
											• Recipient decrypts JWE using private key
										</p>
										<p className="text-sm">
											• Extracted JWS undergoes signature validation
										</p>
										<p className="text-sm">
											• Claims are trusted only after both verifications
										</p>
									</div>
								</div>

								<div className="border-l-4 border-slate-500 bg-slate-50 dark:bg-slate-900/10 p-6 rounded-r-lg">
									<div className="flex items-center gap-3 mb-3">
										<AlertTriangle className="w-5 h-5 text-slate-600 dark:text-slate-400" />
										<h4 className="font-semibold text-slate-800 dark:text-slate-300">
											Security Considerations
										</h4>
									</div>
									<p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed">
										Proper key management and algorithm selection are critical.
										Implementation must validate both encryption and signature
										layers.
									</p>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg border border-slate-200 dark:border-slate-600">
							<h4 className="font-semibold mb-6 text-slate-800 dark:text-slate-200 text-lg">
								Implementation Example
							</h4>
							<div className="space-y-6">
								<div className="flex gap-4">
									<div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
										1
									</div>
									<div className="space-y-2">
										<p className="font-medium text-slate-800 dark:text-slate-200">
											Generate Signed Token (JWS)
										</p>
										<div className="bg-slate-800 dark:bg-slate-900 p-4 rounded-lg text-sm font-mono text-slate-300 overflow-x-auto">
											<div className="text-blue-400">Header:</div>
											<div className="ml-2">
												{'{ "alg": "ES256", "typ": "JWT" }'}
											</div>
											<div className="text-green-400 mt-2">Payload:</div>
											<div className="ml-2">
												{
													'{ "sub": "usr_12345", "role": "admin", "pii": "sensitive_data" }'
												}
											</div>
										</div>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
										2
									</div>
									<div className="space-y-2">
										<p className="font-medium text-slate-800 dark:text-slate-200">
											Encrypt Complete JWS Token
										</p>
										<p className="text-slate-600 dark:text-slate-400 text-sm">
											The entire signed JWT becomes the plaintext payload for
											JWE encryption, creating a nested security structure.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
										3
									</div>
									<div className="space-y-2">
										<p className="font-medium text-slate-800 dark:text-slate-200">
											Recipient Verification Process
										</p>
										<p className="text-slate-600 dark:text-slate-400 text-sm">
											Decrypt JWE to recover the JWS, then validate the
											signature before accepting any claims. Both cryptographic
											layers must be verified.
										</p>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Conclusion */}
				<Card className="border-slate-200 dark:border-slate-700">
					<CardHeader className="pb-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
								<CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
							</div>
							<CardTitle className="text-xl">
								Enterprise-Grade Token Security
							</CardTitle>
						</div>
					</CardHeader>
					<CardContent className="space-y-6">
						<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
							Nested JWT implementation represents the current standard for
							high-security token-based authentication systems. By combining JWS
							authenticity guarantees with JWE confidentiality protection,
							organizations can confidently transmit sensitive data across
							untrusted networks.
						</p>

						<div className="grid md:grid-cols-3 gap-6">
							<div className="text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
								<Shield className="w-8 h-8 text-slate-600 dark:text-slate-400 mx-auto mb-3" />
								<h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
									Cryptographic Integrity
								</h4>
								<p className="text-sm text-slate-600 dark:text-slate-400">
									Mathematical guarantees against tampering and forgery
								</p>
							</div>

							<div className="text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
								<Lock className="w-8 h-8 text-slate-600 dark:text-slate-400 mx-auto mb-3" />
								<h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
									Data Confidentiality
								</h4>
								<p className="text-sm text-slate-600 dark:text-slate-400">
									Strong encryption protecting sensitive payload information
								</p>
							</div>

							<div className="text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
								<Zap className="w-8 h-8 text-slate-600 dark:text-slate-400 mx-auto mb-3" />
								<h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
									Performance Optimized
								</h4>
								<p className="text-sm text-slate-600 dark:text-slate-400">
									Hybrid encryption delivering security without sacrificing
									speed
								</p>
							</div>
						</div>

						<div className="border-l-4 border-slate-400 bg-slate-50 dark:bg-slate-800/30 p-6 rounded-r-lg">
							<div className="flex items-center gap-3 mb-3">
								<Info className="w-6 h-6 text-slate-600 dark:text-slate-400" />
								<h4 className="font-semibold text-slate-800 dark:text-slate-300">
									Implementation Recommendation
								</h4>
							</div>
							<p className="text-slate-700 dark:text-slate-300 leading-relaxed">
								JWE transforms standard readable JWTs into cryptographically
								sealed packages accessible only to authorized recipients, while
								preserving all authentication and integrity benefits of the
								underlying signed tokens. This dual-layer approach provides
								comprehensive protection suitable for mission-critical
								applications handling sensitive user data or financial
								information.
							</p>
						</div>
					</CardContent>
				</Card>

				<div className="flex justify-center mt-8">
					<Link href="/">
						<Button variant="outline" className="gap-2">
							<ArrowLeft className="w-4 h-4" />
							Back to Parser
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

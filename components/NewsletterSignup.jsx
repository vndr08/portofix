"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSpinner, faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NewsletterSignup() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle"); // idle, loading, success, error
	const [error, setError] = useState("");

	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		if (!email.trim()) {
			setError("Email is required");
			return;
		}

		if (!validateEmail(email)) {
			setError("Please enter a valid email");
			return;
		}

		setStatus("loading");

		// Simulate API call - replace with your actual newsletter service
		// Options: ConvertKit, Mailchimp, Buttondown, Resend, etc.
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// For demo purposes, always succeed
		// In production, you'd call your newsletter API here
		setStatus("success");
		setEmail("");
	};

	return (
		<section className="theme-section px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.55, ease: "easeOut" }}
					className="relative overflow-hidden rounded-[2rem] border p-8 md:p-12 theme-card">
					{/* Background decoration */}
					<div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl" />
					<div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-3xl" />

					<div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
						{/* Text content */}
						<div>
							<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
								<FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
							</div>
							<h3 className="text-2xl font-bold md:text-3xl theme-text">
								Stay updated with Ivan&apos;s work
							</h3>
							<p className="mt-4 text-base leading-relaxed theme-muted">
								Get notified about new projects, blog posts, and technical insights. No spam, unsubscribe anytime.
							</p>
						</div>

						{/* Form */}
						<div>
							<AnimatePresence mode="wait">
								{status === "success" ? (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										className="flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 p-6 text-center">
										<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
											<FontAwesomeIcon
												icon={faCheck}
												className="h-6 w-6 text-emerald-500"
											/>
										</div>
										<p className="font-bold theme-text">You&apos;re subscribed!</p>
										<p className="mt-1 text-sm theme-muted">
											Thanks for following along.
										</p>
									</motion.div>
								) : (
									<motion.form
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										onSubmit={handleSubmit}
										className="space-y-4">
										<div>
											<label htmlFor="newsletter-email" className="sr-only">
												Email address
											</label>
											<input
												type="email"
												id="newsletter-email"
												value={email}
												onChange={(e) => {
													setEmail(e.target.value);
													setError("");
												}}
												placeholder="your@email.com"
												className={`w-full rounded-xl border bg-transparent px-5 py-4 text-sm font-medium transition-all duration-200 theme-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
													error
														? "border-red-500/50 theme-card"
														: "theme-border theme-card"
												}`}
												disabled={status === "loading"}
											/>
											{error && (
												<p className="mt-2 text-xs text-red-500">{error}</p>
											)}
										</div>
										<button
											type="submit"
											disabled={status === "loading"}
											className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-70">
											{status === "loading" ? (
												<>
													<FontAwesomeIcon
														icon={faSpinner}
														className="h-4 w-4 animate-spin"
													/>
													Subscribing...
												</>
											) : (
												<>
													Subscribe
													<FontAwesomeIcon
														icon={faArrowRight}
														className="h-4 w-4"
													/>
												</>
											)}
										</button>
									</motion.form>
								)}
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

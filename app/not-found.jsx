"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faArrowRight, faRobot } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";

export default function Enhanced404() {
	return (
		<main className="theme-page relative flex min-h-screen items-center justify-center px-4 overflow-hidden">
			{/* Background elements */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-3xl" />
				<div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-3xl" />
			</div>

			{/* Floating particles */}
			<div className="pointer-events-none absolute inset-0">
				{Array.from({ length: 12 }).map((_, i) => (
					<span
						key={i}
						className="absolute h-2 w-2 rounded-full bg-emerald-500/30"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${i * 0.3}s`,
							animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 text-center">
				{/* 404 Icon */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, type: "spring" }}
					className="mb-8 inline-flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-2xl shadow-emerald-500/30">
					<FontAwesomeIcon icon={faRobot} className="h-16 w-16 animate-pulse" />
				</motion.div>

				{/* Error code */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1, duration: 0.5 }}
					className="text-[10rem] font-bold leading-none theme-text opacity-10 sm:text-[14rem]">
					404
				</motion.h1>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="-mt-16 sm:-mt-24">
					<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
						Page not found
					</p>
					<h2 className="text-3xl font-bold md:text-4xl theme-text">
						Looks like this page took a wrong turn
					</h2>
					<p className="mx-auto mt-4 max-w-md text-base leading-7 theme-muted">
						The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
					</p>
				</motion.div>

				{/* Action buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button href="/" variation="primary">
						<FontAwesomeIcon icon={faHome} className="h-4 w-4" />
						Back to Home
					</Button>
					<Button href="/projects">
						View Projects
						<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
					</Button>
				</motion.div>

				{/* Quick links */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="mt-12">
					<p className="mb-4 text-sm theme-muted">Or explore:</p>
					<div className="flex flex-wrap justify-center gap-3">
						{[
							{ label: "About", href: "/#about" },
							{ label: "Skills", href: "/#skills" },
							{ label: "Blog", href: "/blog" },
							{ label: "Contact", href: "/#contact" },
						].map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 theme-chip hover:text-emerald-500 theme-border">
								{link.label}
							</Link>
						))}
					</div>
				</motion.div>
			</div>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-20px);
					}
				}
			`}</style>
		</main>
	);
}

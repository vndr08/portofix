"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import profile from "@/json/profile.json";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
	{ href: "/#home", label: "Home", id: "home" },
	{ href: "/#about", label: "About", id: "about" },
	{ href: "/#projects", label: "Projects", id: "projects" },
	{ href: "/#skills", label: "Skills", id: "skills" },
	{ href: "/#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const pathname = usePathname();

	const closeNav = () => setIsNavOpen(false);

	useEffect(() => {
		if (pathname?.startsWith("/projects")) {
			setActiveSection("projects");
			return undefined;
		}

		if (pathname === "/about") {
			setActiveSection("about");
			return undefined;
		}

		if (pathname !== "/") {
			setActiveSection("");
			return undefined;
		}

		const sectionIds = navLinks.map((link) => link.id);
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean);

		const syncFromScroll = () => {
			const current = sections
				.map((section) => ({
					id: section.id,
					distance: Math.abs(section.getBoundingClientRect().top - 96),
					top: section.getBoundingClientRect().top,
				}))
				.filter((section) => section.top < window.innerHeight * 0.68)
				.sort((a, b) => a.distance - b.distance)[0];

			setActiveSection(current?.id || "home");
		};

		syncFromScroll();
		window.addEventListener("scroll", syncFromScroll, { passive: true });
		window.addEventListener("hashchange", syncFromScroll);

		return () => {
			window.removeEventListener("scroll", syncFromScroll);
			window.removeEventListener("hashchange", syncFromScroll);
		};
	}, [pathname]);

	return (
		<>
			<nav className="navbar fixed left-0 right-0 top-0 z-50 border-b px-5 backdrop-blur-xl transition md:px-10 lg:px-20 theme-border bg-[color-mix(in_srgb,var(--surface-solid)_82%,transparent)]">
				<div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
					<Link
						href="/#home"
						className="text-xl font-bold tracking-tight theme-text transition hover:text-emerald-500"
						onClick={closeNav}>
						{profile.shortName}
					</Link>

					<div className="hidden items-center gap-6 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								aria-current={activeSection === link.id ? "page" : undefined}
								className={`relative py-2 text-sm font-semibold transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-emerald-500 after:transition-all after:duration-300 hover:text-emerald-500 ${
									activeSection === link.id
										? "text-emerald-500 after:w-full"
										: "theme-soft after:w-0 hover:after:w-full"
								}`}>
								{link.label}
							</Link>
						))}
						<ThemeToggle />
						<a
							href={profile.cvUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-600 theme-button-shadow">
							Resume
						</a>
					</div>

					<button
						className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border md:hidden theme-card-solid"
						onClick={() => setIsNavOpen((value) => !value)}
						type="button"
						aria-label="Toggle navigation menu"
						aria-expanded={isNavOpen}>
						<span
							className={`h-0.5 w-5 rounded-full bg-current theme-text transition ${
								isNavOpen ? "translate-y-2 rotate-45" : ""
							}`}
						/>
						<span
							className={`h-0.5 w-5 rounded-full bg-current theme-text transition ${
								isNavOpen ? "opacity-0" : ""
							}`}
						/>
						<span
							className={`h-0.5 w-5 rounded-full bg-current theme-text transition ${
								isNavOpen ? "-translate-y-2 -rotate-45" : ""
							}`}
						/>
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{isNavOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 px-6 pt-24 md:hidden theme-page">
						<motion.div
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.98 }}
							className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,var(--accent-soft),transparent_22rem)]"
						/>
						<div className="relative mx-auto flex max-w-sm flex-col gap-3">
							{navLinks.map((link, index) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.04 }}>
									<Link
										href={link.href}
										onClick={closeNav}
										aria-current={activeSection === link.id ? "page" : undefined}
										className={`block rounded-2xl px-4 py-4 text-xl font-bold transition hover:text-emerald-500 theme-card-solid ${
											activeSection === link.id ? "text-emerald-500" : "theme-text"
										}`}>
										<span className="flex items-center justify-between gap-4">
											{link.label}
											<span
												className={`h-0.5 rounded-full bg-emerald-500 transition-all ${
													activeSection === link.id ? "w-10" : "w-0"
												}`}
											/>
										</span>
									</Link>
								</motion.div>
							))}
							<ThemeToggle label className="mt-3 w-full rounded-2xl py-5" />
							<a
								href={profile.cvUrl}
								target="_blank"
								rel="noopener noreferrer"
								onClick={closeNav}
								className="block rounded-2xl bg-emerald-500 px-4 py-4 text-center text-base font-bold text-white theme-button-shadow">
								Open Resume
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

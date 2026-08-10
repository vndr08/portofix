"use client";

import Link from "next/link";
import profile from "@/json/profile.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t px-6 py-10 md:px-10 lg:px-20 theme-border bg-[color-mix(in_srgb,var(--surface-solid)_70%,transparent)]" role="contentinfo">
			<div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="text-lg font-bold theme-text">{profile.name}</p>
					<p className="mt-2 max-w-xl text-sm leading-6 theme-muted">
						{profile.availability}
					</p>
					<p className="mt-2 text-xs theme-muted">
						Built with <FontAwesomeIcon icon={faHeart} className="text-emerald-500" /> using Next.js, Tailwind CSS, and Framer Motion
					</p>
				</div>
				<nav className="flex flex-wrap gap-3" aria-label="Footer navigation">
					<a
						href={`mailto:${profile.email}`}
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 theme-card-solid theme-text"
						aria-label="Send email">
						<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" aria-hidden="true" />
						Email
					</a>
					<a
						href={profile.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 theme-card-solid theme-text"
						aria-label="Visit LinkedIn profile (opens in new tab)">
						<FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" aria-hidden="true" />
						LinkedIn
					</a>
					<a
						href={profile.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 theme-card-solid theme-text"
						aria-label="Visit GitHub profile (opens in new tab)">
						<FontAwesomeIcon icon={faGithub} className="h-4 w-4" aria-hidden="true" />
						GitHub
					</a>
					<Link
						href="/#contact"
						className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
						Contact
						<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" />
					</Link>
				</nav>
			</div>
			<div className="mx-auto mt-8 max-w-7xl text-sm theme-muted">
				<p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
			</div>
		</footer>
	);
}

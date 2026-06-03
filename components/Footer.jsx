"use client";

import Link from "next/link";
import profile from "@/json/profile.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	return (
		<footer className="border-t px-6 py-10 md:px-10 lg:px-20 theme-border bg-[color-mix(in_srgb,var(--surface-solid)_70%,transparent)]">
			<div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="text-lg font-bold theme-text">{profile.name}</p>
					<p className="mt-2 max-w-xl text-sm leading-6 theme-muted">
						{profile.availability}
					</p>
				</div>
				<div className="flex flex-wrap gap-3">
					<a
						href={`mailto:${profile.email}`}
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:text-emerald-600 theme-card-solid theme-text">
						<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
						Email
					</a>
					<a
						href={profile.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:text-emerald-600 theme-card-solid theme-text">
						<FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
						LinkedIn
					</a>
					<a
						href={profile.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:text-emerald-600 theme-card-solid theme-text">
						<FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
						GitHub
					</a>
					<Link
						href="/#contact"
						className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-600">
						Contact
						<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
					</Link>
				</div>
			</div>
			<div className="mx-auto mt-8 max-w-7xl text-sm theme-muted">
				&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
			</div>
		</footer>
	);
}

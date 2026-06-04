"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import FixedButton from "@/components/FixedButton";
import Projects from "@/json/data.json";

export default function Page() {
	const projects = Projects.Projects.filter((project) => project.show);

	return (
		<main className="theme-page px-4 pb-16 pt-24 sm:px-6 sm:pt-28 md:px-10 lg:px-20">
			<FixedButton href="/projects">
				<FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
			</FixedButton>

			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, ease: "easeOut" }}
					className="mb-10">
					<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
						Archive
					</p>
					<h1 className="text-3xl font-bold leading-tight theme-text sm:text-4xl md:text-6xl">
						Project index
					</h1>
					<p className="mt-4 max-w-2xl text-base leading-7 theme-muted">
						A compact list for quickly scanning years, titles, roles, and
						technologies.
					</p>
				</motion.div>

				<div className="theme-card overflow-hidden rounded-[1.5rem]">
					<div className="overflow-x-auto">
						<p className="sr-only">
							This table scrolls horizontally on small screens.
						</p>
						<table className="w-full min-w-[820px] border-collapse text-left text-sm">
							<thead className="bg-emerald-500 text-white">
								<tr>
									<th className="px-5 py-4 font-semibold">Year</th>
									<th className="px-5 py-4 font-semibold">Title</th>
									<th className="px-5 py-4 font-semibold">Role</th>
									<th className="px-5 py-4 font-semibold">Technology</th>
									<th className="px-5 py-4 font-semibold">Links</th>
								</tr>
							</thead>
							<tbody>
								{projects.map((project) => (
									<tr
										key={project.slug}
										className="border-t transition hover:bg-[color-mix(in_srgb,var(--accent-soft)_70%,transparent)] theme-border">
										<td className="px-5 py-4 font-semibold theme-soft">
											{project.year}
										</td>
										<td className="px-5 py-4">
											<Link
												href={`/projects/${project.slug}`}
												className="font-bold theme-text transition hover:text-emerald-600">
												{project.title}
											</Link>
										</td>
										<td className="px-5 py-4 theme-muted">
											{project.role || "Project"}
										</td>
										<td className="px-5 py-4 theme-muted">
											{project.tech.join(", ")}
										</td>
										<td className="px-5 py-4">
											<div className="flex items-center gap-3">
												{project.code && (
													<a
														href={project.code}
														target="_blank"
														rel="noopener noreferrer"
														title="Link to GitHub"
														className="theme-muted transition hover:text-emerald-600">
														<FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
													</a>
												)}
												{project.preview && (
													<a
														href={project.preview}
														target="_blank"
														rel="noopener noreferrer"
														title="Link to project preview"
														className="theme-muted transition hover:text-emerald-600">
														<FontAwesomeIcon
															icon={faArrowUpRightFromSquare}
															className="h-4 w-4"
														/>
													</a>
												)}
												{!project.code && !project.preview && (
													<span className="text-xs font-semibold theme-muted">
														Details only
													</span>
												)}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}

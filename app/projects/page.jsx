"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import ProjectAll from "@/public/image/projects.png";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import profile from "@/json/profile.json";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDown,
	faChevronLeft,
	faDownload,
	faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const categories = {
	all: "All",
	"1": "Web Development",
	"2": "AI & Machine Learning",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState("all");
	const projects = Projects.Projects.filter((item) => item.show === true);
	const featuredCount = projects.filter((project) => project.featured).length;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="theme-page relative">
			<div className="hero-grid-bg pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-45" />
			<div className="shape shape-ring right-[12%] top-28" />
			<div className="shape shape-dots left-[7%] top-48" />
			<FixedButton href="/#projects">
				<FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
			</FixedButton>

			<section className="theme-section px-6 pb-16 pt-28 md:px-10 lg:px-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, ease: "easeOut" }}>
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Projects
						</p>
						<h1 className="text-4xl font-bold leading-tight theme-text md:text-6xl">
							Animated work grid for AI, software, and full-stack projects.
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-8 theme-muted md:text-lg">
							A curated collection of dashboards, AI tools, data automation, and
							application systems built from real project contexts.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button href="#project-list" variation="primary">
								Browse Work
								<FontAwesomeIcon icon={faArrowDown} className="h-4 w-4" />
							</Button>
							<Button href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
								Open Resume
								<FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
							</Button>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
						className="relative">
						<div className="theme-card relative aspect-[4/3] overflow-hidden rounded-[2rem] p-3">
							<div className="relative h-full overflow-hidden rounded-[1.5rem]">
								<Image
									src={ProjectAll}
									alt="Portfolio projects preview"
									fill
									priority
									sizes="(max-width: 1024px) 90vw, 40vw"
									placeholder="blur"
									className="object-cover"
								/>
							</div>
						</div>
						<div className="floating-orbit theme-card absolute -bottom-5 left-5 rounded-2xl px-5 py-4">
							<p className="text-3xl font-bold theme-text">{projects.length}</p>
							<p className="text-xs font-bold uppercase tracking-wider theme-muted">
								projects documented
							</p>
						</div>
						<div className="floating-orbit-delay theme-card absolute -right-2 top-8 hidden rounded-2xl px-5 py-4 sm:block">
							<p className="text-3xl font-bold theme-accent">{featuredCount}</p>
							<p className="text-xs font-bold uppercase tracking-wider theme-muted">
								featured
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			<section id="project-list" className="theme-section theme-band px-6 py-16 md:px-10 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<div>
							<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
								Portfolio Grid
							</p>
							<h2 className="text-3xl font-bold theme-text md:text-5xl">
								Filter, scan, and open case studies.
							</h2>
						</div>
						<div className="flex flex-wrap gap-3">
							{Object.entries(categories).map(([key, label]) => {
								const count =
									key === "all"
										? projects.length
										: projects.filter((project) =>
												project.category.includes(Number(key))
										  ).length;

								return (
									<button
										key={key}
										type="button"
										className={`rounded-full px-4 py-2 text-sm font-bold transition ${
											activeCategory === key
												? "bg-emerald-500 text-white theme-button-shadow"
												: "theme-chip hover:text-emerald-600"
										}`}
										onClick={() => setActiveCategory(key)}>
										{label} ({count})
									</button>
								);
							})}
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{projects.map((project) => (
							<ProjectCard
								project={project}
								key={project.slug}
								activeCategory={activeCategory}
							/>
						))}
					</div>

					<div className="mt-10 flex justify-center">
						<Button href="/projects/archive">
							<FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />
							View Compact Archive
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import ProjectCard from "./components/ProjectCard";
import data from "@/json/data.json";

const categories = [
	["all", "All systems"],
	["2", "AI / ML"],
	["1", "Software"],
];

export default function Page() {
	const [activeCategory, setActiveCategory] = useState("all");
	const reduceMotion = useReducedMotion();
	const projects = useMemo(() => data.Projects.filter((item) => item.show), []);
	const heroProjects = projects.slice(0, 4);

	return (
		<main className="spatial-page projects-atlas">
			<SpatialPageBackground variant="projects" />
			<section className="atlas-hero">
				<div className="atlas-hero-copy">
					<h1>THE<br />SYSTEM<br />ATLAS.</h1>
					<p>Fourteen products, prototypes, and operational systems—mapped as evidence of how I think, build, and ship.</p>
					<div className="atlas-hero-actions"><a href="#atlas-index">Enter the archive ↓</a><Link href="/about">Read my profile ↗</Link></div>
				</div>
				<div className="atlas-stack" aria-label="Selected project previews">
					{heroProjects.map((project, index) => (
						<motion.div key={project.slug} className={`atlas-stack-plane plane-${index + 1}`} animate={reduceMotion ? undefined : { y: [0, index % 2 ? 9 : -9, 0], rotateZ: [index * 1.2 - 2, index * 1.2 - 1.4, index * 1.2 - 2] }} transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}>
							<Image src={project.thumbnail} alt="" fill priority={index === 0} sizes="50vw" className="object-cover" />
							<span>{String(index + 1).padStart(2, "0")} / {project.title}</span>
						</motion.div>
					))}
				</div>
				<div className="atlas-hero-register" aria-hidden="true"><span>14 RECORDS</span><span>2023—2026</span><span>JAKARTA</span></div>
			</section>

			<section id="atlas-index" className="atlas-index" aria-labelledby="atlas-title">
				<header className="atlas-index-head">
					<h2 id="atlas-title">ALL PROJECTS</h2>
					<div className="atlas-filters" aria-label="Filter projects">
						{categories.map(([key, label]) => (
							<button key={key} type="button" className={activeCategory === key ? "is-active" : ""} aria-pressed={activeCategory === key} onClick={() => setActiveCategory(key)}>
								{label}<span>{key === "all" ? projects.length : projects.filter((project) => project.category.includes(Number(key))).length}</span>
							</button>
						))}
					</div>
				</header>
				<div className="atlas-list">
					{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} activeCategory={activeCategory} />)}
				</div>
				<footer className="atlas-footer"><p>Need the recruiter-fast version?</p><Link href="/projects/archive">Open the technical index ↗</Link></footer>
			</section>
		</main>
	);
}

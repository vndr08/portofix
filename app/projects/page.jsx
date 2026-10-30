"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";
import ProjectCard from "./components/ProjectCard";
import data from "@/json/data.json";

const categories = [
	["all", "All systems"],
	["2", "AI / ML"],
	["1", "Software"],
];

export default function Page() {
	const [activeCategory, setActiveCategory] = useState("all");
	const reduceMotion = useSafeReducedMotion();
	const projects = useMemo(() => data.Projects.filter((item) => item.show), []);
	const heroProjects = projects.slice(0, 4);
	const visibleProjects = useMemo(() => activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(Number(activeCategory))), [activeCategory, projects]);
	const stackX = useMotionValue(0);
	const stackY = useMotionValue(0);
	const stackRotateX = useSpring(stackX, { stiffness: 130, damping: 22, mass: 0.5 });
	const stackRotateY = useSpring(stackY, { stiffness: 130, damping: 22, mass: 0.5 });
	const handleStackPointer = (event) => {
		if (reduceMotion || event.pointerType === "touch") return;
		const bounds = event.currentTarget.getBoundingClientRect();
		stackY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
		stackX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -5);
	};
	const resetStack = () => { stackX.set(0); stackY.set(0); };

	return (
		<main className="spatial-page projects-atlas">
			<SpatialPageBackground variant="projects" />
			<section className="atlas-hero" onPointerMove={handleStackPointer} onPointerLeave={resetStack}>
				<div className="atlas-hero-copy">
					<h1>THE<br />SYSTEM<br />ATLAS.</h1>
					<p>Fourteen products, prototypes, and operational systems—mapped as evidence of how I think, build, and ship.</p>
					<div className="atlas-hero-actions"><a href="#atlas-index">Browse all projects ↓</a><Link href="/about">Read my profile ↗</Link></div>
				</div>
				<motion.div className="atlas-stack" aria-label="Selected project previews" style={reduceMotion ? undefined : { rotateX: stackRotateX, rotateY: stackRotateY, transformPerspective: 1600 }}>
					{heroProjects.map((project, index) => (
						<motion.div key={project.slug} className={`atlas-stack-plane plane-${index + 1}`} animate={reduceMotion ? undefined : { y: [0, index % 2 ? 9 : -9, 0], rotateZ: [index * 1.2 - 2, index * 1.2 - 1.4, index * 1.2 - 2] }} transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}>
							<Image src={project.thumbnail} alt="" fill priority={index === 0} sizes="50vw" className="object-cover" />
							<span>{String(index + 1).padStart(2, "0")} / {project.title}</span>
						</motion.div>
					))}
				</motion.div>
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
				<motion.div className="atlas-list" layout>
					<AnimatePresence mode="popLayout" initial={false}>
						{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} index={projects.findIndex((item) => item.slug === project.slug)} />)}
					</AnimatePresence>
				</motion.div>
				<footer className="atlas-footer"><p>Need the recruiter-fast version?</p><Link href="/projects/archive">Open the technical index ↗</Link></footer>
			</section>
		</main>
	);
}

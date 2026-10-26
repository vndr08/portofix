"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectCard({ project, activeCategory, index }) {
	const reduceMotion = useReducedMotion();
	if (activeCategory !== "all" && !project.category.includes(Number(activeCategory))) return null;
	const isConcept = project.thumbnail.includes("concept-covers");

	return (
		<motion.article
			className="atlas-project"
			initial={false}
			whileInView={reduceMotion ? undefined : { opacity: [0.86, 1], y: [22, 0] }}
			viewport={{ once: true, amount: 0.16 }}
			transition={{ duration: 0.65, delay: Math.min(index * 0.025, 0.18), ease: [0.16, 1, 0.3, 1] }}>
			<Link href={`/projects/${project.slug}`} className="atlas-project-link">
				<div className="atlas-project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
				<div className="atlas-project-copy">
					<p>{project.year} · {project.category.includes(2) ? "AI / DATA" : "SOFTWARE"}</p>
					<h2>{project.title}</h2>
					<span>{project.summary || project.desc[0]}</span>
					<ul>{project.tech.slice(0, 5).map((tech) => <li key={tech}>{tech}</li>)}</ul>
				</div>
				<div className={`atlas-project-visual ${isConcept ? "is-concept" : ""}`}>
					<i className="atlas-echo echo-a" aria-hidden="true" />
					<i className="atlas-echo echo-b" aria-hidden="true" />
					<Image src={project.thumbnail} alt={`${project.title} ${isConcept ? "concept cover" : "interface"}`} fill sizes="(max-width: 900px) 92vw, 48vw" className="object-cover" />
					<b>{isConcept ? "CONCEPT COVER" : "PROJECT CAPTURE"}</b>
				</div>
				<span className="atlas-project-open">Open case study ↗</span>
			</Link>
		</motion.article>
	);
}

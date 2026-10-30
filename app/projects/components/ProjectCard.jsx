"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

export default function ProjectCard({ project, index }) {
	const reduceMotion = useSafeReducedMotion();
	const isConcept = project.thumbnail.includes("concept-covers");
	const restingTilt = index % 2 === 0 ? -6 : 6;
	const pointerX = useMotionValue(restingTilt);
	const pointerY = useMotionValue(1.5);
	const smoothX = useSpring(pointerX, { stiffness: 125, damping: 25, mass: 0.5 });
	const smoothY = useSpring(pointerY, { stiffness: 125, damping: 25, mass: 0.5 });
	const imageX = useTransform(smoothX, [restingTilt - 6, restingTilt + 6], [-7, 7]);
	const imageY = useTransform(smoothY, [-3, 6], [6, -6]);
	const glintX = useTransform(smoothX, [restingTilt - 6, restingTilt + 6], [-110, 110]);
	const glintY = useTransform(smoothY, [-3, 6], [54, -54]);

	const handlePointerMove = (event) => {
		if (reduceMotion || event.pointerType === "touch") return;
		const bounds = event.currentTarget.getBoundingClientRect();
		pointerX.set(restingTilt + ((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
		pointerY.set(1.5 + ((event.clientY - bounds.top) / bounds.height - 0.5) * -9);
	};

	const resetPointer = () => {
		pointerX.set(restingTilt);
		pointerY.set(1.5);
	};

	return (
		<motion.article
			className="atlas-project"
			layout
			initial={false}
			whileInView={reduceMotion ? undefined : { opacity: [0.86, 1], y: [22, 0] }}
			exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, filter: "blur(5px)" }}
			viewport={{ once: true, amount: 0.16 }}
			transition={{ layout: { duration: 0.42, ease: [0.16, 1, 0.3, 1] }, duration: 0.65, delay: Math.min(index * 0.025, 0.18), ease: [0.16, 1, 0.3, 1] }}>
			<Link href={`/projects/${project.slug}`} className="atlas-project-link" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
				<div className="atlas-project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
				<div className="atlas-project-copy">
					<p>{project.year} · {project.category.includes(2) ? "AI / DATA" : "SOFTWARE"}</p>
					<h2>{project.title}</h2>
					<span>{project.summary || project.desc[0]}</span>
					<ul>{project.tech.slice(0, 5).map((tech) => <li key={tech}>{tech}</li>)}</ul>
				</div>
				<motion.div className={`atlas-project-visual ${isConcept ? "is-concept" : ""}`} style={reduceMotion ? undefined : { rotateX: smoothY, rotateY: smoothX, transformPerspective: 1400 }}>
					<i className="atlas-echo echo-a" aria-hidden="true" />
					<i className="atlas-echo echo-b" aria-hidden="true" />
					<motion.div className="atlas-project-image" style={reduceMotion ? undefined : { x: imageX, y: imageY }}><Image src={project.thumbnail} alt={`${project.title} ${isConcept ? "concept cover" : "interface"}`} fill sizes="(max-width: 900px) 92vw, 48vw" className="object-cover" /></motion.div>
					<i className="atlas-project-scan" aria-hidden="true" />
					<motion.i className="atlas-project-glint" style={reduceMotion ? undefined : { x: glintX, y: glintY }} aria-hidden="true" />
					<b>{isConcept ? "CONCEPT COVER" : "PROJECT CAPTURE"}</b>
				</motion.div>
				<span className="atlas-project-open">Open case study ↗</span>
			</Link>
		</motion.article>
	);
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";
import data from "@/json/data.json";

export default function Page() {
	const projects = data.Projects.filter((project) => project.show);
	const [active, setActive] = useState(projects[0]);
	const reduceMotion = useSafeReducedMotion();
	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);
	const smoothX = useSpring(pointerX, { stiffness: 110, damping: 24, mass: 0.55 });
	const smoothY = useSpring(pointerY, { stiffness: 110, damping: 24, mass: 0.55 });
	const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]);
	const rotateX = useTransform(smoothY, [-1, 1], [4, -4]);
	const imageX = useTransform(smoothX, [-1, 1], [-7, 7]);
	const imageY = useTransform(smoothY, [-1, 1], [-5, 5]);
	const handlePointerMove = (event) => {
		if (reduceMotion || event.pointerType === "touch") return;
		const bounds = event.currentTarget.getBoundingClientRect();
		pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
		pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
	};
	const resetPointer = () => { pointerX.set(0); pointerY.set(0); };

	return (
		<main className="spatial-page technical-index">
			<SpatialPageBackground variant="signal" />
			<header className="technical-index-head"><Link href="/projects">← Spatial atlas</Link><h1>TECHNICAL<br />INDEX.</h1><p>A recruiter-fast scan of every system, role, year, and technology.</p></header>
			<section className="technical-index-body">
				<div className="technical-preview" aria-live="polite" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
					<motion.div style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}>
						<i className="technical-preview-echo echo-one" aria-hidden="true" /><i className="technical-preview-echo echo-two" aria-hidden="true" />
						<AnimatePresence mode="wait" initial={false}>
							<motion.div key={active.slug} initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.04, filter: "blur(6px)" }} animate={{ clipPath: "inset(0 0 0% 0)", scale: 1, filter: "blur(0px)" }} exit={reduceMotion ? undefined : { clipPath: "inset(100% 0 0 0)", scale: 0.985, filter: "blur(4px)" }} transition={{ duration: reduceMotion ? 0 : 0.44, ease: [0.16, 1, 0.3, 1] }} style={reduceMotion ? undefined : { x: imageX, y: imageY }}>
								<Image src={active.thumbnail} alt={`Preview of ${active.title}`} fill sizes="42vw" className="object-cover" />
							</motion.div>
						</AnimatePresence>
						<i className="technical-preview-scan" aria-hidden="true" />
					</motion.div>
					<AnimatePresence mode="wait" initial={false}><motion.span key={active.slug} initial={reduceMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, x: -8 }} transition={{ duration: reduceMotion ? 0 : 0.26 }}>{active.title}</motion.span></AnimatePresence>
				</div>
				<div className="technical-rows">
					{projects.map((project, index) => (
						<Link className={active.slug === project.slug ? "is-active" : ""} key={project.slug} href={`/projects/${project.slug}`} onPointerEnter={() => setActive(project)} onFocus={() => setActive(project)}>
							<span>{String(index + 1).padStart(2, "0")}</span><time>{project.year}</time><h2>{project.title}</h2><p>{project.tech.slice(0, 4).join(" · ")}</p><b>↗</b>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}

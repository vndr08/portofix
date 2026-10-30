"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import data from "@/json/data.json";
import SignalIcon from "@/components/SignalIcon";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

export default function ProjectConstellation() {
	const sectionRef = useRef(null);
	const projects = data.Projects.filter((project) => project.show);
	const [activeIndex, setActiveIndex] = useState(0);
	const reduceMotion = useSafeReducedMotion();
	const isInView = useInView(sectionRef, { margin: "-14% 0px -14% 0px" });
	const activeProject = projects[activeIndex];
	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);
	const smoothX = useSpring(pointerX, { stiffness: 110, damping: 24, mass: 0.55 });
	const smoothY = useSpring(pointerY, { stiffness: 110, damping: 24, mass: 0.55 });
	const rotateY = useTransform(smoothX, [-1, 1], [-5.5, 5.5]);
	const rotateX = useTransform(smoothY, [-1, 1], [4, -4]);
	const imageX = useTransform(smoothX, [-1, 1], [-8, 8]);
	const imageY = useTransform(smoothY, [-1, 1], [-6, 6]);
	const glintX = useTransform(smoothX, [-1, 1], [-90, 90]);
	const glintY = useTransform(smoothY, [-1, 1], [-48, 48]);
	const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
	const scrollDepth = useSpring(scrollYProgress, { stiffness: 72, damping: 27, mass: 0.6 });
	const previewY = useTransform(scrollDepth, [0, 0.5, 1], [38, 0, -34]);
	const previewRotate = useTransform(scrollDepth, [0, 0.5, 1], [-1.4, 0, 1.2]);

	const handlePointerMove = (event) => {
		if (reduceMotion || event.pointerType === "touch") return;
		const bounds = event.currentTarget.getBoundingClientRect();
		pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
		pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
	};

	const resetPointer = () => {
		pointerX.set(0);
		pointerY.set(0);
	};

	return (
		<section ref={sectionRef} className={`project-constellation${isInView ? " is-in-view" : ""}`} aria-labelledby="constellation-title">
			<header>
				<h2 id="constellation-title">THE<br />PROJECT INDEX.</h2>
				<p>Fourteen shipped and exploratory builds across operational software, applied AI, dashboards, and digital products. Select a title to inspect the real interface.</p>
			</header>
			<div className="project-index-layout">
				<nav className="project-index-list" aria-label="Complete project index">
					{projects.map((project, index) => (
						<Link href={`/projects/${project.slug}`} key={project.slug} className={`project-index-row${activeIndex === index ? " is-active" : ""}`} onPointerEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)}>
							<span>{String(index + 1).padStart(2, "0")}</span>
							<h3>{project.title}</h3>
							<time>{project.year}</time>
							<SignalIcon direction="up-right" />
						</Link>
					))}
				</nav>
				<motion.aside className="project-index-preview" style={reduceMotion ? undefined : { y: previewY, rotateZ: previewRotate }}>
					<motion.div className="project-preview-object" onPointerMove={handlePointerMove} onPointerLeave={resetPointer} style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1400 }}>
						<i className="project-preview-echo echo-one" aria-hidden="true" />
						<i className="project-preview-echo echo-two" aria-hidden="true" />
						<div className="project-preview-stage">
							<AnimatePresence mode="wait" initial={false}>
								<motion.div key={activeProject.slug} initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.045, filter: "blur(7px)" }} animate={{ clipPath: "inset(0 0 0% 0)", scale: 1, filter: "blur(0px)" }} exit={reduceMotion ? undefined : { clipPath: "inset(100% 0 0 0)", scale: 0.985, filter: "blur(4px)", transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } }} transition={{ duration: reduceMotion ? 0 : 0.54, ease: [0.16, 1, 0.3, 1] }} style={reduceMotion ? undefined : { x: imageX, y: imageY }}>
									<Image src={activeProject.thumbnail} alt={`Preview of ${activeProject.title}`} fill sizes="(max-width: 900px) 86vw, 44vw" className="object-cover" priority={activeIndex === 0} />
								</motion.div>
							</AnimatePresence>
							<i className="project-preview-scan" aria-hidden="true" />
							<motion.i className="project-preview-glint" style={reduceMotion ? undefined : { x: glintX, y: glintY }} aria-hidden="true" />
							<span><b>{String(activeIndex + 1).padStart(2, "0")}</b> / {String(projects.length).padStart(2, "0")}</span>
						</div>
					</motion.div>
					<AnimatePresence mode="wait" initial={false}>
						<motion.div key={activeProject.slug} className="project-preview-meta" initial={reduceMotion ? false : { y: 10, opacity: 0, filter: "blur(3px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} exit={reduceMotion ? undefined : { y: -6, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}><p>{activeProject.title}</p><time>{activeProject.year}</time></motion.div>
					</AnimatePresence>
					<Link className="constellation-all" href="/projects">Explore every case study <SignalIcon direction="up-right" /></Link>
				</motion.aside>
			</div>
		</section>
	);
}

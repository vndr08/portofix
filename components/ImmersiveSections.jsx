"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import profile from "@/json/profile.json";
import SignalIcon from "@/components/SignalIcon";
import ProjectConstellation from "@/components/ProjectConstellation";

const projects = [
	{ slug: "vanguard", name: "VANGUARD", role: "Fleet Control Tower · July 2026", detail: "A 14-module realtime fleet-monitoring web app with live mapping, geofencing, and automated alerts for logistics dispatchers.", image: "/image/lightfield/vanguard-ui.webp", width: 1800, height: 1034, alt: "Actual VANGUARD fleet control tower interface with realtime vehicle map", stack: ["FastAPI", "SQLAlchemy", "WebSocket", "PostgreSQL"], tone: "mint" },
	{ slug: "whatsapp-issue-reporting", name: "AI WHATSAPP", role: "Capstone · PT Andakara Informatika Nusantara", detail: "An AI chatbot and analytics dashboard that turns WhatsApp issue reports into structured workflows integrated with TRAMOS Web.", image: "/image/lightfield/whatsapp-ui.webp", width: 1800, height: 1019, alt: "Actual TRAMOS issue reporting analytics interface", stack: ["Claude AI", "WhatsApp Gateway", "TRAMOS Web"], tone: "violet" },
	{ slug: "kalbe-dashboard", name: "KALBE OPS", role: "Bootcamp client project · June—July 2025", detail: "Energy, work orders, equipment performance, MTTR, MTBF, and CAPA translated into one clear engineering decision surface.", image: "/image/lightfield/kalbe-ui.webp", width: 1691, height: 1100, alt: "Actual Kalbe engineering operations dashboard", stack: ["Requirements", "Dashboard", "Engineering ops"], tone: "orange" },
];

const capabilities = [
	["AI & architecture", "LLMs · RAG · NLP · REST APIs · AWS / GCP cloud deployment"],
	["Software systems", "Python · React · C# / .NET · PostgreSQL · MySQL · Docker"],
	["Product leadership", "Product lifecycle · requirements · UI/UX strategy · B2B negotiation · Agile / Scrum"],
];

function ProjectScene({ project, index }) {
	const ref = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	const smooth = useSpring(scrollYProgress, { stiffness: 72, damping: 24, mass: 0.65 });
	const imageY = useTransform(smooth, [0, 0.5, 1], [110, 0, -110]);
	const imageRotate = useTransform(smooth, [0, 0.5, 1], [8, 0, -7]);
	const copyY = useTransform(smooth, [0, 0.5, 1], [55, 0, -45]);
	const depth = useTransform(smooth, [0, 0.5, 1], [0.82, 1, 0.88]);

	return (
		<article ref={ref} className={`project-scene tone-${project.tone}`}>
			<div className="project-atmosphere" aria-hidden="true" />
			<motion.div className="project-copy" style={reduceMotion ? undefined : { y: copyY }}>
				<h3>{project.name}</h3>
				<p className="project-role">{project.role}</p><p className="project-detail">{project.detail}</p>
				<ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
				<Link href={`/projects/${project.slug}`}>Open case study <SignalIcon direction="up-right" /></Link>
			</motion.div>
			<motion.div className="project-viewport" style={reduceMotion ? undefined : { y: imageY, rotateX: imageRotate, scale: depth }}>
				<div className="project-depth depth-back" aria-hidden="true" /><div className="project-depth depth-mid" aria-hidden="true" />
				<Image src={project.image} width={project.width} height={project.height} sizes="(max-width: 900px) 86vw, 58vw" alt={project.alt} /><span className="viewport-index" aria-hidden="true">ACTUAL UI / 0{index + 1}</span>
			</motion.div>
		</article>
	);
}

export default function ImmersiveSections() {
	const reduceMotion = useReducedMotion();
	const contactRef = useRef(null);
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 25, mass: 0.6 });
	const { scrollYProgress: contactProgress } = useScroll({ target: contactRef, offset: ["start end", "end start"] });
	const orbit = useTransform(contactProgress, [0, 1], [-22, 36]);

	return (
		<>
			<motion.div className="page-progress" style={reduceMotion ? undefined : { scaleX: progress }} aria-hidden="true" />
			<section id="manifesto" className="manifesto-section" aria-labelledby="manifesto-title">
				<p>Software should feel less like machinery<br />and more like clarity arriving.</p>
				<h2 id="manifesto-title">I connect product requirements, system architecture, and interface design—then carry the work through implementation and rollout.</h2>
				<div className="manifesto-axis" aria-hidden="true"><span>ASK</span><i /><span>MODEL</span><i /><span>BUILD</span><i /><span>SHIP</span></div>
			</section>

			<section id="work" className="work-section" aria-labelledby="work-title">
				<header className="work-heading"><h2 id="work-title">SELECTED<br />SYSTEMS</h2><p>Real tools for operational work. Each scene opens into the engineering decisions behind it.</p></header>
				{projects.map((project, index) => <ProjectScene key={project.slug} project={project} index={index} />)}
				<Link className="all-work-link" href="/projects">Explore all 14 projects <SignalIcon /></Link>
			</section>

			<section id="about" className="practice-section" aria-labelledby="practice-title">
				<div className="practice-heading"><h2 id="practice-title">ONE PRACTICE.<br />THREE LENSES.</h2><p>My Information Systems background lets me move between AI behavior, enterprise architecture, and product decisions without losing sight of the people using the system.</p></div>
				<div className="capability-list">{capabilities.map(([title, detail], index) => <div className="capability-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></div>)}</div>
			</section>

			<ProjectConstellation />

			<section className="experience-section-v2" aria-labelledby="experience-title-v2">
				<h2 id="experience-title-v2">BUILT WITH<br />JABABEKA.</h2>
				<div className="experience-line">
					<article><time>MAR — AUG 2026</time><h3>Software Engineering Partnership</h3><p>Co-managed the JIFAS enterprise financial system lifecycle, led its Telerik UI/UX migration, and collaborated with stakeholders on an internal AI chatbot.</p></article>
					<article><time>AUG 2025 — FEB 2026</time><h3>AI Engineer Intern</h3><p>Served as technical product lead for an internal AI Agent and built a Python duplicate-detection tool for financial reporting.</p></article>
				</div>
				<div className="evidence-line"><span><b>3.76</b> GPA</span><span><b>3rd</b> SETSsail Biz Accel</span><span><b>75%</b> scholarship</span></div>
			</section>

			<section ref={contactRef} id="contact" className="contact-stage" aria-labelledby="contact-title-v2">
				<motion.div className="contact-sphere" style={reduceMotion ? undefined : { x: "-50%", y: "-50%", rotate: orbit }} aria-hidden="true"><i /><i /><i /><b /></motion.div>
				<h2 id="contact-title-v2">LET&apos;S MAKE<br />IT REAL.</h2><p>Have an ambitious system in mind?</p>
				<div className="contact-stage-actions"><a href={`mailto:${profile.email}`}>Start a conversation <SignalIcon direction="up-right" /></a><a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Download résumé <SignalIcon direction="down" /></a></div>
				<footer><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><span>Jakarta · Indonesia · 2026</span></footer>
			</section>
		</>
	);
}

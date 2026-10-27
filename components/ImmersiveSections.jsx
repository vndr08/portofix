"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";
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

function CareerTrajectory() {
	const ref = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 22, mass: 0.7 });
	const orbitRotate = useTransform(smooth, [0, 1], [-28, 118]);
	const orbitScale = useTransform(smooth, [0, 0.5, 1], [0.88, 1, 0.92]);

	return (
		<section ref={ref} className="career-trajectory" aria-labelledby="career-trajectory-title">
			<div className="career-intro">
				<h2 id="career-trajectory-title">FROM AI PROTOTYPES<br />TO ENTERPRISE OWNERSHIP.</h2>
				<p>Two consecutive roles at PT Jababeka trace one clear progression: understanding operational problems, shipping applied AI, then co-owning the lifecycle and interface of an enterprise financial system.</p>
				<motion.div className="career-orbit-v2" style={reduceMotion ? undefined : { rotate: orbitRotate, scale: orbitScale }} aria-hidden="true">
					<i /><i /><i /><span>ASK</span><span>BUILD</span><span>OWN</span><b>01→02</b>
				</motion.div>
			</div>

			<div className="career-records">
				{resume.experience.map((experience, index) => (
					<motion.article key={`${experience.role}-${experience.period}`} initial={false} whileInView={reduceMotion ? undefined : { y: [28, 0], opacity: [0.82, 1] }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
						<header><span>0{index + 1}</span><time>{experience.period}</time><b>{experience.company}</b></header>
						<h3>{experience.role}</h3>
						<p>{experience.summary}</p>
						<ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
						<div>{experience.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
					</motion.article>
				))}
			</div>

			<div className="career-proof-band" aria-label="Career delivery evidence">
				<span><b>AI AGENT</b>Product lead</span>
				<span><b>JIFAS</b>Lifecycle co-management</span>
				<span><b>TELERIK</b>Interface migration</span>
				<span><b>PYTHON</b>Finance automation</span>
			</div>
		</section>
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

			<CareerTrajectory />

			<section ref={contactRef} id="contact" className="contact-stage" aria-labelledby="contact-title-v2">
				<motion.div className="contact-sphere" style={reduceMotion ? undefined : { x: "-50%", y: "-50%", rotate: orbit }} aria-hidden="true"><i /><i /><i /><b /></motion.div>
				<h2 id="contact-title-v2">LET&apos;S MAKE<br />IT REAL.</h2><p>Have an ambitious system in mind?</p>
				<div className="contact-stage-actions"><a href={`mailto:${profile.email}`}>Start a conversation <SignalIcon direction="up-right" /></a><a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Download résumé <SignalIcon direction="down" /></a></div>
				<footer><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><span>Jakarta · Indonesia · 2026</span></footer>
			</section>
		</>
	);
}

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";
import SignalIcon from "@/components/SignalIcon";
import ProjectConstellation from "@/components/ProjectConstellation";

const projects = [
	{ slug: "vanguard", name: "VANGUARD", role: "Fleet Control Tower · July 2026", detail: "A 14-module realtime fleet-monitoring web app with live mapping, geofencing, and automated alerts for logistics dispatchers.", image: "/image/lightfield/vanguard-ui.webp", width: 1800, height: 1034, alt: "Actual VANGUARD fleet control tower interface with realtime vehicle map", stack: ["FastAPI", "SQLAlchemy", "WebSocket", "PostgreSQL"], tone: "mint" },
	{ slug: "whatsapp-issue-reporting", name: "AI WHATSAPP", role: "Capstone · PT Andakara Informatika Nusantara", detail: "An AI chatbot and analytics dashboard that turns WhatsApp issue reports into structured workflows integrated with TRAMOS Web.", image: "/image/lightfield/whatsapp-ui.webp", width: 1800, height: 1019, alt: "Actual TRAMOS issue reporting analytics interface", stack: ["Claude AI", "WhatsApp Gateway", "TRAMOS Web"], tone: "violet" },
	{ slug: "kalbe-dashboard", name: "KALBE OPS", role: "Bootcamp client project · June—July 2025", detail: "Energy, work orders, equipment performance, MTTR, MTBF, and CAPA translated into one clear engineering decision surface.", image: "/image/lightfield/kalbe-ui.webp", width: 1691, height: 1100, alt: "Actual Kalbe engineering operations dashboard", stack: ["Requirements", "Dashboard", "Engineering ops"], tone: "orange" },
];

const operatingStages = [
	["Understand", "Requirements, user pain points, stakeholder goals, and operational constraints."],
	["Architect", "Data flows, AI behavior, system boundaries, APIs, and interface hierarchy."],
	["Build", "Python, FastAPI, React, C# / .NET, SQL, LLM integration, and automation."],
	["Operationalize", "Testing, deployment, monitoring, iteration, documentation, and rollout."],
];

function JourneyPanel({ project, index, progress, range, active, reduceMotion }) {
	const restingTilt = index % 2 === 0 ? -5 : 5;
	const pointerX = useMotionValue(restingTilt);
	const pointerY = useMotionValue(1.5);
	const pointerRotateX = useSpring(pointerY, { stiffness: 180, damping: 24, mass: 0.45 });
	const pointerRotateY = useSpring(pointerX, { stiffness: 180, damping: 24, mass: 0.45 });
	const entry = Math.max(0, range[0] - 0.08);
	const exit = Math.min(1, range[1] + 0.08);
	const opacity = useTransform(progress, [entry, range[0], range[1], exit], [0, 1, 1, 0]);
	const x = useTransform(progress, [entry, range[0], range[1], exit], index % 2 === 0 ? [180, 0, 0, -140] : [-180, 0, 0, 140]);
	const y = useTransform(progress, [entry, range[0], range[1], exit], [80, 0, 0, -70]);
	const scale = useTransform(progress, [entry, range[0], range[1], exit], [0.82, 1, 1, 0.9]);
	const rotateY = useTransform(progress, [entry, range[0], range[1], exit], index % 2 === 0 ? [13, 0, 0, -9] : [-13, 0, 0, 9]);
	const blur = useTransform(progress, [entry, range[0], range[1], exit], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(5px)"]);
	const handlePointerMove = (event) => {
		if (reduceMotion || event.pointerType === "touch") return;
		const bounds = event.currentTarget.getBoundingClientRect();
		pointerX.set(restingTilt + ((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
		pointerY.set(1.5 + ((event.clientY - bounds.top) / bounds.height - 0.5) * -6);
	};
	const resetPointer = () => {
		pointerX.set(restingTilt);
		pointerY.set(1.5);
	};

	return (
		<motion.article className={`journey-panel tone-${project.tone}`} aria-hidden={reduceMotion ? undefined : !active} style={reduceMotion ? undefined : { x, y, scale, rotateY, opacity, filter: blur, pointerEvents: active ? "auto" : "none" }}>
			<div className="journey-copy">
				<span className="journey-count">0{index + 1} / 03</span>
				<h3>{project.name}</h3>
				<p className="project-role">{project.role}</p><p className="project-detail">{project.detail}</p>
				<ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
				<Link tabIndex={reduceMotion || active ? 0 : -1} href={`/projects/${project.slug}`}>Open case study <SignalIcon direction="up-right" /></Link>
			</div>
			<motion.div className="journey-artifact" onPointerMove={handlePointerMove} onPointerLeave={resetPointer} style={reduceMotion ? undefined : { rotateX: pointerRotateX, rotateY: pointerRotateY, transformPerspective: 1400 }}>
				<div className="journey-depth depth-back" aria-hidden="true" /><div className="journey-depth depth-mid" aria-hidden="true" />
				<Image src={project.image} width={project.width} height={project.height} sizes="(max-width: 900px) 86vw, 58vw" alt={project.alt} /><span className="viewport-index" aria-hidden="true">ACTUAL UI / 0{index + 1}</span>
			</motion.div>
		</motion.article>
	);
}

function ProjectJourney() {
	const ref = useRef(null);
	const reduceMotion = useReducedMotion();
	const [active, setActive] = useState(0);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
	const progress = useSpring(scrollYProgress, { stiffness: 72, damping: 26, mass: 0.62 });
	const introOpacity = useTransform(progress, [0, 0.08, 0.15, 0.2], [1, 1, 0.24, 0]);
	const introY = useTransform(progress, [0, 0.12, 0.2], [0, -20, -90]);
	const outroOpacity = useTransform(progress, [0.86, 0.94, 1], [0, 1, 1]);
	const outroY = useTransform(progress, [0.86, 0.94, 1], [60, 0, 0]);
	const railOpacity = useTransform(progress, [0, 0.14, 0.2, 0.84, 0.92, 1], [0, 0, 1, 1, 0, 0]);
	const ranges = [[0.18, 0.39], [0.42, 0.63], [0.66, 0.85]];

	useMotionValueEvent(progress, "change", (value) => {
		const next = value < 0.405 ? 0 : value < 0.645 ? 1 : 2;
		setActive((current) => current === next ? current : next);
	});

	return (
		<section ref={ref} id="work" className={`work-section project-journey${reduceMotion ? " is-static" : ""}`} aria-labelledby="work-title">
			<div className="journey-stage">
				<motion.header className="journey-intro" style={reduceMotion ? undefined : { opacity: introOpacity, y: introY }}>
					<h2 id="work-title">THREE SYSTEMS.<br />THREE PROOFS.</h2>
					<p>Realtime operations, AI-assisted workflows, and decision intelligence—shown through actual interfaces and engineering decisions.</p>
				</motion.header>
				{projects.map((project, index) => <JourneyPanel key={project.slug} project={project} index={index} progress={progress} range={ranges[index]} active={active === index} reduceMotion={reduceMotion} />)}
				<motion.nav className="journey-rail" aria-label="Featured project progress" style={reduceMotion ? undefined : { opacity: railOpacity }}>
					<span>SELECTED SYSTEMS</span>
					<ol>{projects.map((project, index) => <li key={project.slug} className={active === index ? "is-active" : ""}><i />{project.name}</li>)}</ol>
				</motion.nav>
				<motion.div className="journey-outro" style={reduceMotion ? undefined : { opacity: outroOpacity, y: outroY }}>
					<span>14 projects across AI, enterprise software, dashboards, web, mobile, and creative technology.</span>
					<Link href="/projects">Explore the complete collection <SignalIcon /></Link>
				</motion.div>
			</div>
			<div className="journey-anchors" aria-hidden="true">{projects.map((project) => <i key={project.slug} className="project-anchor" />)}</div>
		</section>
	);
}

function OperatingModel() {
	const ref = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	const smooth = useSpring(scrollYProgress, { stiffness: 72, damping: 28, mass: 0.6 });
	const objectRotate = useTransform(smooth, [0, 1], [-10, 22]);
	const objectY = useTransform(smooth, [0, 1], [34, -30]);
	const lineProgress = useTransform(smooth, [0.18, 0.82], [0, 1]);

	return (
		<section ref={ref} id="method" className="operating-model" aria-labelledby="operating-title">
			<header>
				<h2 id="operating-title">FROM OPERATIONAL FRICTION<br />TO WORKING SYSTEMS.</h2>
				<p>My role is translation with accountability: understand the real workflow, design the system around it, build the product, and stay through rollout.</p>
			</header>
			<motion.div className="operating-object" style={reduceMotion ? undefined : { rotateY: objectRotate, y: objectY }} aria-hidden="true">
				{["ASK", "MODEL", "BUILD", "SHIP"].map((label, index) => <i key={label} style={{ "--plane": index }}><span>{label}</span><b>0{index + 1}</b></i>)}
			</motion.div>
			<div className="operating-path">
				<motion.i className="operating-line-horizontal" style={reduceMotion ? undefined : { scaleX: lineProgress }} aria-hidden="true" />
				<motion.i className="operating-line-vertical" style={reduceMotion ? undefined : { scaleY: lineProgress }} aria-hidden="true" />
				{operatingStages.map(([title, detail], index) => (
					<motion.article key={title} initial={false} whileInView={reduceMotion ? undefined : { y: [16, 0], opacity: [0.86, 1], filter: ["blur(3px)", "blur(0px)"] }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.32, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}>
						<span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p>
					</motion.article>
				))}
			</div>
		</section>
	);
}

function CareerTrajectory() {
	const reduceMotion = useReducedMotion();

	return (
		<section className="career-trajectory" aria-labelledby="career-trajectory-title">
			<div className="career-intro">
				<h2 id="career-trajectory-title">FROM AI PROTOTYPES<br />TO ENTERPRISE OWNERSHIP.</h2>
				<p>Two consecutive roles at PT Jababeka trace one clear progression: understanding operational problems, shipping applied AI, then co-owning the lifecycle and interface of an enterprise financial system.</p>
			</div>

			<div className="career-records">
				{resume.experience.map((experience, index) => (
					<motion.article key={`${experience.role}-${experience.period}`} initial={false} whileInView={reduceMotion ? undefined : { y: [18, 0], opacity: [0.88, 1] }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}>
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
			<OperatingModel />

			<ProjectJourney />

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

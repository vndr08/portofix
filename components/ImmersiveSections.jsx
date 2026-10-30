"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";
import SignalIcon from "@/components/SignalIcon";
import ProjectConstellation from "@/components/ProjectConstellation";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

const projects = [
	{ slug: "vanguard", name: "VANGUARD", role: "Fleet Control Tower · July 2026", ownership: "Product requirements + full-stack engineering", outcome: "Turned dispatch workflow into realtime fleet monitoring", detail: "A 14-module realtime fleet-monitoring web app with live mapping, geofencing, and automated alerts for logistics dispatchers.", image: "/image/lightfield/vanguard-ui.webp", width: 1800, height: 1034, alt: "Actual VANGUARD fleet control tower interface with realtime vehicle map", stack: ["FastAPI", "SQLAlchemy", "WebSocket", "PostgreSQL"], signals: ["Realtime map", "Geofencing", "Automated alerts"], tone: "mint" },
	{ slug: "whatsapp-issue-reporting", name: "AI WHATSAPP", role: "Capstone · PT Andakara Informatika Nusantara", ownership: "Product lead + AI / backend development", outcome: "Made issue intake structured and trends visible", detail: "An AI chatbot and analytics dashboard that turns WhatsApp issue reports into structured workflows integrated with TRAMOS Web.", image: "/image/lightfield/whatsapp-ui.webp", width: 1800, height: 1019, alt: "Actual TRAMOS issue reporting analytics interface", stack: ["Claude AI", "WhatsApp Gateway", "TRAMOS Web"], signals: ["Issue intake", "AI classification", "TRAMOS workflow"], tone: "violet" },
	{ slug: "kalbe-dashboard", name: "KALBE OPS", role: "Bootcamp client project · June—July 2025", ownership: "Requirements + dashboard delivery", outcome: "Consolidated maintenance data into one decision surface", detail: "Energy, work orders, equipment performance, MTTR, MTBF, and CAPA translated into one clear engineering decision surface.", image: "/image/lightfield/kalbe-ui.webp", width: 1691, height: 1100, alt: "Actual Kalbe engineering operations dashboard", stack: ["Requirements", "Dashboard", "Engineering ops"], signals: ["Energy", "Maintenance", "CAPA"], tone: "orange" },
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
	const screenReveal = useTransform(progress, [entry, range[0], range[1], exit], ["inset(12% 10% 12% 10%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(8% 7% 8% 7%)"]);
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
		<motion.article className={`journey-panel tone-${project.tone}${active ? " is-active" : ""}`} aria-hidden={reduceMotion ? undefined : !active} style={reduceMotion ? undefined : { x, y, scale, rotateY, opacity, filter: blur, pointerEvents: active ? "auto" : "none" }}>
			<div className="journey-copy">
				<span className="journey-count">0{index + 1} / 03</span>
				<h3>{project.name}</h3>
				<p className="project-role">{project.role}</p><p className="project-detail">{project.detail}</p>
				<div className="journey-proof"><span><b>ROLE</b>{project.ownership}</span><span><b>OUTCOME</b>{project.outcome}</span></div>
				<ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
				<Link tabIndex={reduceMotion || active ? 0 : -1} href={`/projects/${project.slug}`}>Open case study <SignalIcon direction="up-right" /></Link>
			</div>
			<motion.div className="journey-artifact" onPointerMove={handlePointerMove} onPointerLeave={resetPointer} style={reduceMotion ? undefined : { rotateX: pointerRotateX, rotateY: pointerRotateY, transformPerspective: 1400 }}>
				<div className="journey-depth depth-back" aria-hidden="true" /><div className="journey-depth depth-mid" aria-hidden="true" />
				<motion.div className="journey-screen" style={reduceMotion ? undefined : { clipPath: screenReveal }}>
					<div className="journey-screen-bar" aria-hidden="true"><span>Actual product interface</span><b>System 0{index + 1}</b></div>
					<Image src={project.image} width={project.width} height={project.height} sizes="(max-width: 900px) 86vw, 58vw" alt={project.alt} />
				</motion.div>
				<div className="journey-signals" aria-hidden="true">
					{project.signals.map((signal, signalIndex) => <span key={signal} style={{ "--signal-index": signalIndex }}><i />{signal}</span>)}
				</div>
			</motion.div>
		</motion.article>
	);
}

function ProjectJourney() {
	const ref = useRef(null);
	const reduceMotion = useSafeReducedMotion();
	const [isCompact, setIsCompact] = useState(false);
	useEffect(() => {
		const query = window.matchMedia("(max-width: 900px)");
		const update = () => setIsCompact(query.matches);
		update();
		query.addEventListener("change", update);
		return () => query.removeEventListener("change", update);
	}, []);
	const staticMode = reduceMotion || isCompact;
	const [active, setActive] = useState(0);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
	const progress = useSpring(scrollYProgress, { stiffness: 72, damping: 26, mass: 0.62 });
	const introOpacity = useTransform(progress, [0, 0.08, 0.15, 0.2], [1, 1, 0.24, 0]);
	const introY = useTransform(progress, [0, 0.12, 0.2], [0, -20, -90]);
	const outroOpacity = useTransform(progress, [0.86, 0.94, 1], [0, 1, 1]);
	const outroY = useTransform(progress, [0.86, 0.94, 1], [60, 0, 0]);
	const railOpacity = useTransform(progress, [0, 0.14, 0.2, 0.84, 0.92, 1], [0, 0, 1, 1, 0, 0]);
	const ranges = [[0.18, 0.39], [0.42, 0.63], [0.66, 0.85]];
	const jumpToProject = (index) => {
		if (!ref.current) return;
		const bounds = ref.current.getBoundingClientRect();
		const sectionTop = bounds.top + window.scrollY;
		const travel = Math.max(0, ref.current.offsetHeight - window.innerHeight);
		const midpoint = (ranges[index][0] + ranges[index][1]) / 2;
		window.scrollTo({ top: sectionTop + travel * midpoint, behavior: reduceMotion ? "auto" : "smooth" });
	};

	useMotionValueEvent(progress, "change", (value) => {
		if (staticMode) return;
		const next = value < 0.405 ? 0 : value < 0.645 ? 1 : 2;
		setActive((current) => current === next ? current : next);
	});

	return (
		<section ref={ref} id="work" className={`work-section project-journey${staticMode ? " is-static" : ""}`} aria-labelledby="work-title">
			<div className="journey-stage">
				<motion.header className="journey-intro" style={staticMode ? undefined : { opacity: introOpacity, y: introY }}>
					<h2 id="work-title">SYSTEMS<br />I SHIPPED.</h2>
					<div className="journey-intro-copy"><p>Three real products. Scroll to inspect the operational problem, shipped interface, and engineering decisions behind each.</p><span>Scroll to inspect <i /></span></div>
					<ol>{projects.map((project, index) => <li key={project.slug}><span>0{index + 1}</span>{project.name}</li>)}</ol>
				</motion.header>
				{projects.map((project, index) => <JourneyPanel key={project.slug} project={project} index={index} progress={progress} range={ranges[index]} active={active === index} reduceMotion={staticMode} />)}
				<motion.nav className="journey-rail" aria-label="Featured project progress" style={staticMode ? undefined : { opacity: railOpacity }}>
					<span>SELECTED SYSTEMS</span>
					<ol>{projects.map((project, index) => <li key={project.slug} className={active === index ? "is-active" : ""}><button type="button" aria-current={active === index ? "step" : undefined} onClick={() => jumpToProject(index)}><i />{project.name}</button></li>)}</ol>
				</motion.nav>
				<motion.div className="journey-outro" style={staticMode ? undefined : { opacity: outroOpacity, y: outroY }}>
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
	const reduceMotion = useSafeReducedMotion();
	const [activeStage, setActiveStage] = useState(0);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	const smooth = useSpring(scrollYProgress, { stiffness: 72, damping: 28, mass: 0.6 });
	const objectRotate = useTransform(smooth, [0, 1], [-10, 22]);
	const objectY = useTransform(smooth, [0, 1], [34, -30]);
	const lineProgress = useTransform(smooth, [0.18, 0.82], [0, 1]);

	useMotionValueEvent(smooth, "change", (value) => {
		const next = Math.min(3, Math.max(0, Math.floor(value * 4)));
		setActiveStage((current) => current === next ? current : next);
	});

	return (
		<section ref={ref} id="method" className="operating-model" aria-labelledby="operating-title">
			<header>
				<h2 id="operating-title">FROM OPERATIONAL FRICTION<br />TO WORKING SYSTEMS.</h2>
				<p>My role is translation with accountability: understand the real workflow, design the system around it, build the product, and stay through rollout.</p>
			</header>
			<motion.div className="operating-object" style={reduceMotion ? undefined : { rotateY: objectRotate, y: objectY }} aria-hidden="true">
				{["ASK", "MODEL", "BUILD", "SHIP"].map((label, index) => <i className={!reduceMotion && activeStage === index ? "is-active" : ""} key={label} style={{ "--plane": index }}><span>{label}</span><b>0{index + 1}</b></i>)}
			</motion.div>
			<div className="operating-path">
				<motion.i className="operating-line-horizontal" style={reduceMotion ? undefined : { scaleX: lineProgress }} aria-hidden="true" />
				<motion.i className="operating-line-vertical" style={reduceMotion ? undefined : { scaleY: lineProgress }} aria-hidden="true" />
				{operatingStages.map(([title, detail], index) => (
					<motion.article className={!reduceMotion && activeStage === index ? "is-active" : ""} key={title} initial={false} whileInView={reduceMotion ? undefined : { y: [16, 0], opacity: [0.86, 1], filter: ["blur(3px)", "blur(0px)"] }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.32, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}>
						<span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p>
					</motion.article>
				))}
			</div>
		</section>
	);
}

function CareerTrajectory() {
	const reduceMotion = useSafeReducedMotion();

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
				<span><b>Telerik</b>Interface migration</span>
				<span><b>PYTHON</b>Finance automation</span>
			</div>
		</section>
	);
}

export default function ImmersiveSections() {
	const reduceMotion = useSafeReducedMotion();
	const contactRef = useRef(null);
	const contactInView = useInView(contactRef, { margin: "-18% 0px -18% 0px" });
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 25, mass: 0.6 });
	const { scrollYProgress: contactProgress } = useScroll({ target: contactRef, offset: ["start end", "end start"] });
	const orbit = useTransform(contactProgress, [0, 1], [-22, 36]);
	const contactY = useTransform(contactProgress, [0.08, 0.44, 0.82], [46, 0, -10]);
	const contactClip = useTransform(contactProgress, [0.08, 0.42], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
	const contactOpacity = useTransform(contactProgress, [0.16, 0.44], [0, 1]);

	return (
		<>
			<motion.div className="page-progress" style={reduceMotion ? undefined : { scaleX: progress }} aria-hidden="true" />
			<OperatingModel />

			<ProjectJourney />

			<ProjectConstellation />

			<CareerTrajectory />

			<section ref={contactRef} id="contact" className={`contact-stage${contactInView ? " is-in-view" : ""}`} aria-labelledby="contact-title-v2">
				<motion.div className="contact-sphere" style={reduceMotion ? undefined : { x: "-50%", y: "-50%", rotate: orbit }} aria-hidden="true"><i /><i /><i /><b /></motion.div>
				<motion.h2 id="contact-title-v2" style={reduceMotion ? undefined : { y: contactY, clipPath: contactClip }}>LET&apos;S MAKE<br />IT REAL.</motion.h2><motion.p style={reduceMotion ? undefined : { opacity: contactOpacity }}>Have an ambitious system in mind?</motion.p>
				<motion.div className="contact-stage-actions" style={reduceMotion ? undefined : { opacity: contactOpacity }}><a href={`mailto:${profile.email}`}>Start a conversation <SignalIcon direction="up-right" /></a><a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Download résumé <SignalIcon direction="down" /></a></motion.div>
				<footer><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><span>Jakarta · Indonesia · 2026</span></footer>
			</section>
		</>
	);
}

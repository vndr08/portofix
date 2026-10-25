"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import profile from "@/json/profile.json";
import SignalIcon from "@/components/SignalIcon";

const systems = [
	{ index: "A1", title: "Applied AI", detail: "LLM orchestration, retrieval, NLP, OCR, intent routing, and workflow automation.", tools: "LangChain · Ollama · Claude AI · Python" },
	{ index: "S2", title: "Software Systems", detail: "Async APIs, realtime data, enterprise workflows, integrations, and production delivery.", tools: "FastAPI · ASP.NET · WebSocket · PostgreSQL" },
	{ index: "I3", title: "Interfaces", detail: "Dense operational products that make complex systems legible and actionable.", tools: "Next.js · React · TypeScript · Kendo UI" },
];

const additionalProjects = [
	["04", "Jababeka AI Agent", "Enterprise support agent with retrieval, OCR, troubleshooting, and ticket creation.", "jababeka-chatbot"],
	["05", "Duplicate Detection", "Python workflow for finding duplicate records across CSV and Excel datasets.", "duplicate-detection"],
	["06", "EduIntel", "Random Forest system that helps educators identify student performance risk.", "eduintel"],
	["07", "BERSUARA", "Anonymous campus conversation app powered by realtime Firebase messaging.", "bersuara"],
];

export default function ImmersiveSections() {
	const experienceRef = useRef(null);
	const archiveRef = useRef(null);
	const contactRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const scrollBeam = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.5 });
	const { scrollYProgress: experienceProgress } = useScroll({ target: experienceRef, offset: ["start end", "end start"] });
	const { scrollYProgress: archiveProgress } = useScroll({ target: archiveRef, offset: ["start end", "end start"] });
	const { scrollYProgress: contactProgress } = useScroll({ target: contactRef, offset: ["start end", "end start"] });
	const currentY = useTransform(experienceProgress, [0, 1], [70, -70]);
	const priorY = useTransform(experienceProgress, [0, 1], [130, -35]);
	const prismY = useTransform(experienceProgress, [0, 1], [20, -110]);
	const archiveX = useTransform(archiveProgress, [0, 1], [65, -55]);
	const orbitRotate = useTransform(contactProgress, [0, 1], [-18, 28]);

	return (
		<>
			<motion.div className="immersive-scroll-beam" style={{ scaleX: scrollBeam }} aria-hidden="true" />
			<section ref={experienceRef} id="about" className="lightfield-section experience-section" aria-labelledby="experience-title">
				<div className="section-register" aria-hidden="true"><span>OPERATING CONTEXT</span></div>
				<header className="section-heading">
					<h2 id="experience-title">ENGINEERING THE<br />WHOLE SYSTEM.</h2>
					<p className="section-intro">I work where product decisions, interface design, software architecture, and business operations meet.</p>
				</header>
				<div className="experience-stage">
					<motion.div className="experience-prism prism-back" style={reduceMotion ? undefined : { y: prismY, rotateY: -13, z: -120 }} aria-hidden="true" />
					<motion.div className="experience-prism prism-mid" style={reduceMotion ? undefined : { y: prismY, rotateY: -9, z: -60 }} aria-hidden="true" />
					<motion.article className="experience-record experience-current" style={reduceMotion ? undefined : { y: currentY, rotateY: -5 }}>
						<div className="record-code"><span>EXP / 01</span><span>MAR—AUG 2026</span></div>
						<p className="record-company">PT JABABEKA TBK</p>
						<h3>Software Engineering Partnership</h3>
						<p>Co-managed the product lifecycle of JIFAS, an enterprise financial system, while translating accounting and finance pain points into shipped feature and interface improvements.</p>
						<ul>
							<li>Led front-end UI/UX migration to Kendo UI Telerik.</li>
							<li>Refined an internal AI chatbot with business stakeholders.</li>
							<li>Worked across ASP.NET, SQL, finance modules, and product delivery.</li>
						</ul>
					</motion.article>
					<motion.article className="experience-record experience-prior" style={reduceMotion ? undefined : { y: priorY, rotateY: 6 }}>
						<div className="record-code"><span>EXP / 02</span><span>AUG 2025—FEB 2026</span></div>
						<p className="record-company">PT JABABEKA TBK</p>
						<h3>AI Engineer Intern</h3>
						<p>Led requirements and technical delivery for internal AI and data-automation tools supporting employee and financial workflows.</p>
						<ul>
							<li>Technical product lead for an AI support and ticketing agent.</li>
							<li>Built a Python duplicate-data detection workflow.</li>
							<li>Aligned automation behavior with operational teams.</li>
						</ul>
					</motion.article>
				</div>
			</section>

			<section id="skills" className="lightfield-section systems-section" aria-labelledby="systems-title">
				<div className="section-register" aria-hidden="true"><span>SYSTEMS INDEX</span></div>
				<header className="systems-heading">
					<h2 id="systems-title">FROM MODEL<br />TO MOMENT.</h2>
				</header>
				<div className="systems-axis" aria-hidden="true"><span>Research</span><span>Architecture</span><span>Interface</span><span>Delivery</span></div>
				<div className="systems-list">
					{systems.map((system) => (
						<article className="system-row" key={system.index}>
							<span className="system-index">{system.index}</span>
							<h3>{system.title}</h3>
							<p>{system.detail}</p>
							<span className="system-tools">{system.tools}</span>
						</article>
					))}
				</div>
			</section>

			<section ref={archiveRef} className="lightfield-section archive-section" aria-labelledby="archive-title">
				<div className="section-register" aria-hidden="true"><span>SELECTED ARCHIVE</span></div>
				<header className="archive-heading">
					<h2 id="archive-title">MORE SYSTEMS,<br />SAME STANDARD.</h2>
				</header>
				<motion.div className="archive-track" style={reduceMotion ? undefined : { x: archiveX, rotate: -2.5 }}>
					{additionalProjects.map(([index, title, detail, slug]) => (
						<Link className="archive-entry" href={`/projects/${slug}`} key={slug}>
							<span>{index}</span><h3>{title}</h3><p>{detail}</p><strong>Inspect case study <SignalIcon /></strong>
						</Link>
					))}
				</motion.div>
				<Link className="archive-all" href="/projects">Explore all projects <SignalIcon direction="up-right" /></Link>
			</section>

			<section className="lightfield-section profile-section" aria-labelledby="profile-title">
				<div className="section-register" aria-hidden="true"><span>PERSON / PRACTICE</span></div>
				<div className="profile-statement">
					<h2 id="profile-title">TECHNICAL RANGE.<br />HUMAN JUDGMENT.</h2>
					<p>I care about the invisible parts of a product: reliable data flow, legible decisions, thoughtful defaults, and the operational reality after launch.</p>
				</div>
				<div className="profile-evidence">
					<article><strong>3.76</strong><span>Current GPA</span><p>President University<br />2023—2026</p></article>
					<article><strong>3rd</strong><span>Place</span><p>SETSsail Biz Accel<br />Service Category · 2024</p></article>
					<article><strong>75%</strong><span>Tuition covered</span><p>Jababeka Scholarship<br />Awardee</p></article>
				</div>
				<div className="profile-signal" aria-hidden="true"><span>Curiosity</span><span>Ownership</span><span>Clarity</span><span>Follow-through</span></div>
			</section>

			<section ref={contactRef} id="contact" className="lightfield-section contact-section" aria-labelledby="contact-title">
				<motion.div className="contact-orbit" style={reduceMotion ? undefined : { rotate: orbitRotate }} aria-hidden="true"><i /><i /><i /></motion.div>
				<h2 id="contact-title">LET&apos;S BUILD<br />WHAT HOLDS UP.</h2>
				<p className="contact-copy">For AI engineering, software systems, product-minded development, and ambitious digital experiences.</p>
				<div className="contact-actions">
					<a href={`mailto:${profile.email}`}>Start a conversation <SignalIcon direction="up-right" /></a>
					<a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Download résumé <SignalIcon direction="down" /></a>
				</div>
				<div className="contact-links">
					<a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
					<span>© 2026 Ivander Johana Pratama</span>
				</div>
			</section>
		</>
	);
}

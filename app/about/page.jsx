"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import SpatialProjectFrame from "@/components/SpatialProjectFrame";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";

export default function Page() {
	const reduceMotion = useReducedMotion();

	return (
		<main className="spatial-page profile-world">
			<SpatialPageBackground variant="about" />
			<section className="profile-hero">
				<div className="profile-hero-copy">
					<h1>ENGINEER.<br />TRANSLATOR.<br />BUILDER.</h1>
					<div>{resume.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
					<nav><a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Open résumé ↗</a><a href={`mailto:${profile.email}`}>Start a conversation ↗</a></nav>
				</div>
				<div className="profile-portrait-stage">
					<SpatialProjectFrame src="/image/me2.jpg" alt="Ivander Johana Pratama" priority portrait />
					<div className="portrait-orbits" aria-hidden="true"><i /><i /><i /><b>IVAN</b></div>
				</div>
				<div className="profile-proof-line">
					{resume.recruiterHighlights.map((item) => <span key={item.label}><b>{item.value}</b>{item.label}</span>)}
				</div>
			</section>

			<section className="career-orbit" aria-labelledby="career-title">
				<header><h2 id="career-title">CAREER<br />SIGNAL.</h2><p>A progression from applied AI delivery into enterprise product lifecycle ownership.</p></header>
				<div className="career-timeline">
					{resume.experience.map((item, index) => (
						<motion.article key={`${item.role}-${item.period}`} initial={reduceMotion ? false : { opacity: 0, x: index % 2 ? 50 : -50 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
							<time>{item.period}</time><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.summary}</p>
							<ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
						</motion.article>
					))}
				</div>
			</section>

			<section className="capability-field" aria-labelledby="capability-title">
				<header><h2 id="capability-title">CAPABILITY<br />FIELD.</h2><p>Not a stack for display—a working range used to move from requirements to rollout.</p></header>
				<div className="capability-orbit">
					<div className="capability-core" aria-hidden="true"><span>END</span><span>TO</span><span>END</span></div>
					{resume.skills.map((group, index) => (
						<article key={group.group} className={`capability-node node-${index + 1}`}>
							<span>0{index + 1}</span><h3>{group.group}</h3><p>{group.items.join(" · ")}</p>
						</article>
					))}
				</div>
			</section>

			<section className="education-transmission">
				<div className="education-record"><span>{resume.education.period}</span><h2>{resume.education.program}</h2><p>{resume.education.school}</p><b>GPA {resume.education.gpa}</b></div>
				<div className="achievement-stream">
					<h2>PROOF OUTSIDE THE CODE.</h2>
					{resume.achievements.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}
				</div>
			</section>

			<section className="credential-field">
				<header><h2>LEARNING<br />IN PUBLIC.</h2><p>Selected certifications and programs across AI, cloud, data, and responsible production.</p></header>
				<div>{resume.certifications.map((group) => <article key={group.group}><h3>{group.group}</h3>{group.items.map((item) => <p key={item}>{item}</p>)}</article>)}</div>
			</section>

			<section className="profile-close">
				<h2>BUILDING FOR<br />REAL WORK.</h2><p>Jakarta, Indonesia · Indonesian / English</p>
				<div><Link href="/projects">Explore project atlas ↗</Link><a href={`mailto:${profile.email}`}>{profile.email} ↗</a></div>
			</section>
		</main>
	);
}

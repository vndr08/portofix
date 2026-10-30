"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import SpatialProjectFrame from "@/components/SpatialProjectFrame";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";

export default function Page() {
	const reduceMotion = useSafeReducedMotion();
	const heroRef = useRef(null);
	const careerRef = useRef(null);
	const capabilityRef = useRef(null);
	const closeRef = useRef(null);
	const closeInView = useInView(closeRef, { margin: "-18% 0px -18% 0px" });
	const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
	const heroProgress = useSpring(scrollYProgress, { stiffness: 82, damping: 28, mass: 0.55 });
	const copyY = useTransform(heroProgress, [0, 1], [0, -48]);
	const copyOpacity = useTransform(heroProgress, [0, 0.82], [1, 0.28]);
	const portraitY = useTransform(heroProgress, [0, 1], [0, 76]);
	const portraitRotate = useTransform(heroProgress, [0, 1], [0, 4]);
	const { scrollYProgress: careerScroll } = useScroll({ target: careerRef, offset: ["start 70%", "end 75%"] });
	const careerProgress = useSpring(careerScroll, { stiffness: 78, damping: 28, mass: 0.58 });
	const { scrollYProgress: capabilityScroll } = useScroll({ target: capabilityRef, offset: ["start end", "end start"] });
	const capabilityProgress = useSpring(capabilityScroll, { stiffness: 74, damping: 27, mass: 0.6 });
	const capabilityY = useTransform(capabilityProgress, [0, 0.5, 1], [34, 0, -28]);
	const capabilityRotate = useTransform(capabilityProgress, [0, 1], [-12, 26]);
	const capabilityScale = useTransform(capabilityProgress, [0, 0.5, 1], [0.9, 1, 0.94]);

	return (
		<main className="spatial-page profile-world">
			<SpatialPageBackground variant="about" />
			<section ref={heroRef} className="profile-hero">
				<motion.div className="profile-hero-copy" style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}>
					<h1>ENGINEER.<br />TRANSLATOR.<br />BUILDER.</h1>
					<div>{resume.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
					<nav><a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Open résumé ↗</a><a href={`mailto:${profile.email}`}>Start a conversation ↗</a></nav>
				</motion.div>
				<motion.div className="profile-portrait-stage" style={reduceMotion ? undefined : { y: portraitY, rotateZ: portraitRotate }}>
					<SpatialProjectFrame src="/image/me2.jpg" alt="Ivander Johana Pratama" priority portrait />
					<div className="portrait-orbits" aria-hidden="true"><i /><i /><i /><b>IVAN</b></div>
				</motion.div>
				<div className="profile-proof-line">
					{resume.recruiterHighlights.map((item) => <span key={item.label}><b>{item.value}</b>{item.label}</span>)}
				</div>
			</section>

			<section ref={careerRef} className="career-orbit" aria-labelledby="career-title">
				<header><h2 id="career-title">CAREER<br />SIGNAL.</h2><p>A progression from applied AI delivery into enterprise product lifecycle ownership.</p></header>
				<div className="career-timeline">
					<motion.i className="career-signal-progress" style={reduceMotion ? undefined : { scaleY: careerProgress }} aria-hidden="true" />
					{resume.experience.map((item, index) => (
						<motion.article key={`${item.role}-${item.period}`} initial={false} whileInView={reduceMotion ? undefined : { opacity: [0.82, 1], x: [index % 2 ? 18 : -18, 0] }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
							<time>{item.period}</time><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.summary}</p>
							<ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
						</motion.article>
					))}
				</div>
			</section>

			<section ref={capabilityRef} className="capability-field" aria-labelledby="capability-title">
				<header><h2 id="capability-title">CAPABILITY<br />FIELD.</h2><p>Not a stack for display—a working range used to move from requirements to rollout.</p></header>
				<div className="capability-orbit">
					<motion.div className="capability-core-motion" style={reduceMotion ? undefined : { y: capabilityY, rotateZ: capabilityRotate, scale: capabilityScale }} aria-hidden="true"><div className="capability-core"><span>END</span><span>TO</span><span>END</span></div></motion.div>
					{resume.skills.map((group, index) => (
						<motion.article key={group.group} className={`capability-node node-${index + 1}`} initial={false} whileInView={reduceMotion ? undefined : { clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"], opacity: [0.72, 1] }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.48, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}>
							<span>0{index + 1}</span><h3>{group.group}</h3><p>{group.items.join(" · ")}</p>
						</motion.article>
					))}
				</div>
			</section>

			<section className="education-transmission">
				<motion.div className="education-record" initial={false} whileInView={reduceMotion ? undefined : { x: [-38, 0], opacity: [0.76, 1], filter: ["blur(5px)", "blur(0px)"] }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}><span>{resume.education.period}</span><h2>{resume.education.program}</h2><p>{resume.education.school}</p><b>GPA {resume.education.gpa}</b></motion.div>
				<div className="achievement-stream">
					<h2>PROOF OUTSIDE THE CODE.</h2>
					{resume.achievements.map((item, index) => <motion.p key={item} initial={false} whileInView={reduceMotion ? undefined : { x: [28, 0], opacity: [0.72, 1] }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.38, delay: Math.min(index * 0.04, 0.16), ease: [0.16, 1, 0.3, 1] }}><span>{String(index + 1).padStart(2, "0")}</span>{item}</motion.p>)}
				</div>
			</section>

			<section className="credential-field">
				<header><h2>LEARNING<br />IN PUBLIC.</h2><p>Selected certifications and programs across AI, cloud, data, and responsible production.</p></header>
				<div>{resume.certifications.map((group, index) => <motion.article key={group.group} initial={false} whileInView={reduceMotion ? undefined : { y: [22, 0], opacity: [0.78, 1] }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.42, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}><h3>{group.group}</h3>{group.items.map((item) => <p key={item}>{item}</p>)}</motion.article>)}</div>
			</section>

			<section ref={closeRef} className={`profile-close${closeInView ? " is-in-view" : ""}`}>
				<motion.h2 initial={false} whileInView={reduceMotion ? undefined : { clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"], y: [22, 0] }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1] }}>BUILDING FOR<br />REAL WORK.</motion.h2><p>Jakarta, Indonesia · Indonesian / English</p>
				<div><Link href="/projects">Explore project atlas ↗</Link><a href={`mailto:${profile.email}`}>{profile.email} ↗</a></div>
			</section>
		</main>
	);
}

"use client";

/* eslint-disable @next/next/no-img-element -- optical plates need direct Framer Motion transforms without optimizer wrappers. */

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import SignalIcon from "@/components/SignalIcon";
import profile from "@/json/profile.json";

const spring = { stiffness: 120, damping: 24, mass: 0.7 };

export default function ImmersiveHero() {
	const frameRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);
	const smoothX = useSpring(pointerX, spring);
	const smoothY = useSpring(pointerY, spring);
	const vanguardRotateX = useTransform(smoothY, [-1, 1], [2.8, -2.8]);
	const vanguardRotateY = useTransform(smoothX, [-1, 1], [-4.5, 4.5]);
	const whatsappRotateY = useTransform(smoothX, [-1, 1], [3.4, -3.4]);
	const kalbeRotateY = useTransform(smoothX, [-1, 1], [-2.4, 2.4]);

	const handlePointerMove = (event) => {
		if (reduceMotion || !frameRef.current || event.pointerType === "touch") return;
		const bounds = frameRef.current.getBoundingClientRect();
		pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
		pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
	};

	const resetPointer = () => {
		pointerX.set(0);
		pointerY.set(0);
	};

	return (
		<section
			ref={frameRef}
			id="home"
			className="lightfield-frame"
			aria-labelledby="lightfield-title"
			onPointerMove={handlePointerMove}
			onPointerLeave={resetPointer}>
			<div className="lightfield-ground" aria-hidden="true" />
			<img className="ground-sample" src="/image/lightfield/ground-texture.png" alt="" aria-hidden="true" />

			<motion.img
				className="lightfield-plate plate-vanguard"
				src="/image/lightfield/vanguard-film.png"
				alt="VANGUARD fleet control tower interface rendered as layered optical film"
				style={reduceMotion ? undefined : { rotateX: vanguardRotateX, rotateY: vanguardRotateY, transformPerspective: 1400 }}
			/>
			<motion.img
				className="lightfield-plate plate-whatsapp"
				src="/image/lightfield/whatsapp-visual.png"
				alt="WhatsApp issue report moving through AI processing into a structured ticket"
				style={reduceMotion ? undefined : { rotateY: whatsappRotateY, transformPerspective: 1200 }}
			/>
			<motion.img
				className="lightfield-plate plate-kalbe"
				src="/image/lightfield/kalbe-visual.png"
				alt="Kalbe engineering operations dashboard inside an optical film frame"
				style={reduceMotion ? undefined : { rotateY: kalbeRotateY, transformPerspective: 1200 }}
			/>

			<div className="registration-rail" aria-hidden="true">
				<span className="registration-cross cross-top" />
				<span className="registration-cross cross-middle" />
				<span className="registration-cross cross-bottom" />
			</div>

			<div className="lightfield-top-rule" aria-hidden="true" />
			<p className="lightfield-edition" aria-hidden="true">PORTFOLIO / 2026<br />SYSTEMS · AI · PRODUCT</p>
			<div className="lightfield-brand">
				<Link href="#home" className="brand-mark">IVAN</Link>
				<span className="brand-divider" aria-hidden="true" />
				<span className="brand-name">IVANDER JOHANA PRATAMA<br />AI ENGINEER · SOFTWARE ENGINEER</span>
			</div>
			<nav className="lightfield-nav" aria-label="Primary navigation">
				<a href="#work">Work</a>
				<a href="#about">About</a>
				<a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Résumé</a>
				<a href="#contact">Contact</a>
			</nav>
			<p className="lightfield-availability"><span aria-hidden="true" />Available for opportunities · Jakarta, Indonesia</p>

			<h1 id="lightfield-title" className="lightfield-name">IVANDER JOHANA PRATAMA</h1>
			<p className="lightfield-role">AI Engineer · Software Engineer</p>
			<p className="lightfield-statement">I build intelligent systems for work that matters.</p>
			<p className="lightfield-education">Information Systems · Data Science · GPA 3.76</p>
			<a className="lightfield-action action-primary" href="#work">Explore selected work <SignalIcon /></a>
			<a className="lightfield-action action-secondary" href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Download résumé <SignalIcon direction="down" /></a>

			<div className="lightfield-proof" aria-label="Selected proof points">
				<p><strong>14</strong><span>Fleet modules</span></p>
				<p><strong>Realtime</strong><span>Telemetry delivery</span></p>
				<p><strong>End-to-end</strong><span>Product ownership</span></p>
			</div>

			<div id="work" className="vanguard-title-block">
				<span>01 / 03</span>
				<h2>VANGUARD</h2>
				<p>Fleet Control Tower · Full-stack & Product Design</p>
			</div>
			<p className="vanguard-summary">A 14-module control-room cockpit for dispatch, safety, and management—combining live vehicle mapping, planned-versus-actual routes, geofencing, trip replay, and operational alerts.</p>
			<div className="vanguard-tags" aria-label="VANGUARD technologies"><span>Next.js</span><span>FastAPI</span><span>WebSocket</span></div>
			<Link className="project-entry vanguard-entry" href="/projects/vanguard">View project details <SignalIcon /></Link>
			<dl className="vanguard-metadata" aria-label="VANGUARD technical details">
				<div><dt>Telemetry</dt><dd>25-truck GPS simulator</dd></div>
				<div><dt>Interface</dt><dd>Graphite Command system</dd></div>
			</dl>

			<div className="whatsapp-title-block">
				<span>02 / 03</span>
				<h2>WhatsApp<br />Issue Reporting</h2>
				<p>AI & Full-stack Developer · 2025</p>
			</div>
			<p className="whatsapp-summary">Turns natural-language field reports into structured osTicket cases through Claude AI, a WhatsApp gateway, and a management analytics surface.</p>
			<div className="whatsapp-tags" aria-label="WhatsApp project technologies"><span>Claude AI</span><span>WhatsApp API</span><span>Automation</span></div>
			<Link className="project-entry whatsapp-entry" href="/projects/whatsapp-issue-reporting">View project details <SignalIcon /></Link>

			<div className="kalbe-title-block">
				<span>03 / 03</span>
				<h2>Kalbe Dashboard</h2>
				<p>Dashboard Developer · 2025</p>
			</div>
			<p className="kalbe-summary">Engineering intelligence for energy consumption, work orders, MTTR, MTBF, and CAPA—translated from client workflows into one operational view.</p>
			<div className="kalbe-tags" aria-label="Kalbe dashboard strengths"><span>Data integration</span><span>Real-time dashboard</span><span>Business impact</span></div>
			<Link className="project-entry kalbe-entry" href="/projects/kalbe-dashboard">View project details <SignalIcon /></Link>

			<div className="lightfield-side-notes" aria-hidden="true">
				<p><span>01</span> Realtime systems</p>
				<p><span>02</span> Applied intelligence</p>
				<p><span>03</span> Operational clarity</p>
			</div>
		</section>
	);
}

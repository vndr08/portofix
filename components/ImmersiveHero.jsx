"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import profile from "@/json/profile.json";
import SignalIcon from "@/components/SignalIcon";

const spring = { stiffness: 52, damping: 18, mass: 0.85 };

export default function ImmersiveHero() {
	const frameRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);
	const smoothX = useSpring(pointerX, spring);
	const smoothY = useSpring(pointerY, spring);
	const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
	const rotateY = useTransform(smoothX, [-1, 1], [-12, 12]);
	const lightX = useTransform(smoothX, [-1, 1], ["34%", "66%"]);
	const lightY = useTransform(smoothY, [-1, 1], ["38%", "62%"]);

	const handlePointerMove = (event) => {
		if (reduceMotion || event.pointerType === "touch" || !frameRef.current) return;
		const bounds = frameRef.current.getBoundingClientRect();
		pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
		pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
	};

	const resetPointer = () => {
		pointerX.set(0);
		pointerY.set(0);
	};

	return (
		<section ref={frameRef} id="home" className="portal-hero" aria-labelledby="portal-title" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
			<div className="portal-noise" aria-hidden="true" />
			<motion.div className="portal-aurora" style={reduceMotion ? undefined : { left: lightX, top: lightY }} aria-hidden="true" />

			<div className="portal-copy">
				<h1 id="portal-title"><span>IVANDER</span><span>JOHANA</span><span>PRATAMA</span></h1>
				<p className="portal-role">AI engineer · software engineer</p>
				<p className="portal-thesis">I turn operational friction into production-ready AI and software systems—from requirements and UX to architecture, deployment, and rollout.</p>
				<div className="portal-actions">
					<a href="#work">Enter selected work <SignalIcon /></a>
					<a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Open résumé <SignalIcon direction="up-right" /></a>
				</div>
			</div>

			<motion.div className="portal-object" style={reduceMotion ? undefined : { x: "-50%", y: "-50%", rotateX, rotateY }} aria-hidden="true">
				<div className="portal-depth-plane plane-far" />
				<div className="portal-depth-plane plane-near" />
				<div className="portal-core">
					<span className="core-face face-front"><b>AI</b><small>INTELLIGENCE</small></span>
					<span className="core-face face-back"><b>01</b><small>SYSTEM</small></span>
					<span className="core-face face-left" /><span className="core-face face-right" />
					<span className="core-face face-top" /><span className="core-face face-bottom" />
				</div>
				<div className="portal-ring ring-a" /><div className="portal-ring ring-b" /><div className="portal-ring ring-c" />
				<div className="portal-satellite satellite-a" /><div className="portal-satellite satellite-b" /><div className="portal-satellite satellite-c" />
			</motion.div>

			<div className="portal-coordinates" aria-hidden="true"><span>06°12&apos;S</span><span>106°49&apos;E</span><span>2026 / PORTFOLIO</span></div>
			<a className="portal-scroll" href="#method"><span /> See how I work</a>
		</section>
	);
}

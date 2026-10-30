"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import profile from "@/json/profile.json";
import SignalIcon from "@/components/SignalIcon";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

const spring = { stiffness: 52, damping: 18, mass: 0.85 };
const easeOut = [0.16, 1, 0.3, 1];

const lineVariants = {
	hidden: { y: "108%", rotate: 1.5 },
	visible: (index) => ({ y: "0%", rotate: 0, transition: { duration: 0.72, delay: 0.08 + index * 0.075, ease: easeOut } }),
};

const supportVariants = {
	hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
	visible: (delay = 0.3) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.58, delay, ease: easeOut } }),
};

export default function ImmersiveHero() {
	const frameRef = useRef(null);
	const reduceMotion = useSafeReducedMotion();
	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);
	const smoothX = useSpring(pointerX, spring);
	const smoothY = useSpring(pointerY, spring);
	const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
	const rotateY = useTransform(smoothX, [-1, 1], [-12, 12]);
	const lightX = useTransform(smoothX, [-1, 1], ["34%", "66%"]);
	const lightY = useTransform(smoothY, [-1, 1], ["38%", "62%"]);
	const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start start", "end start"] });
	const scrollProgress = useSpring(scrollYProgress, { stiffness: 72, damping: 28, mass: 0.7 });
	const copyY = useTransform(scrollProgress, [0, 0.72, 1], [0, -26, -120]);
	const copyOpacity = useTransform(scrollProgress, [0, 0.68, 1], [1, 0.92, 0]);
	const objectY = useTransform(scrollProgress, [0, 1], [0, -72]);
	const objectScale = useTransform(scrollProgress, [0, 0.72, 1], [1, 1.08, 1.3]);
	const objectOpacity = useTransform(scrollProgress, [0, 0.78, 1], [1, 0.82, 0]);

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

			<motion.div className="portal-copy" style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}>
				<h1 id="portal-title">{["IVANDER", "JOHANA", "PRATAMA"].map((line, index) => <span className="portal-line" key={line}><motion.span custom={index} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">{line}</motion.span></span>)}</h1>
				<motion.p className="portal-role" custom={0.28} variants={supportVariants} initial={reduceMotion ? false : "hidden"} animate="visible">AI engineer · software engineer</motion.p>
				<motion.p className="portal-thesis" custom={0.36} variants={supportVariants} initial={reduceMotion ? false : "hidden"} animate="visible">I design and ship AI-powered software for real operational work—from requirements and interface decisions to production rollout.</motion.p>
				<motion.div className="portal-actions" custom={0.44} variants={supportVariants} initial={reduceMotion ? false : "hidden"} animate="visible">
					<a href="#work">Enter selected work <SignalIcon /></a>
					<Link href="/projects/archive">Recruiter-fast index <SignalIcon direction="up-right" /></Link>
					<a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Open résumé <SignalIcon direction="up-right" /></a>
				</motion.div>
				<motion.div className="portal-availability" custom={0.52} variants={supportVariants} initial={reduceMotion ? false : "hidden"} animate="visible"><span><i />Available for opportunities</span><b>Jakarta, Indonesia</b></motion.div>
			</motion.div>

			<motion.div className="portal-object" initial={reduceMotion ? false : { opacity: 0, scale: 0.82, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.18, ease: easeOut }} style={reduceMotion ? undefined : { x: "-50%", y: "-50%", rotateX, rotateY }} aria-hidden="true">
				<motion.div className="portal-object-motion" style={reduceMotion ? undefined : { y: objectY, scale: objectScale, opacity: objectOpacity }}>
					<div className="portal-depth-plane plane-far" />
					<div className="portal-depth-plane plane-near" />
					<div className="portal-core">
						<span className="core-face face-front"><b>AI</b><small>SYSTEMS / SHIPPED</small></span>
						<span className="core-face face-back"><b>01</b><small>PRODUCTION</small></span>
						<span className="core-face face-left" /><span className="core-face face-right" />
						<span className="core-face face-top" /><span className="core-face face-bottom" />
					</div>
					<div className="portal-module module-discover"><span>01</span><b>DISCOVER</b><small>Workflow + requirements</small></div>
					<div className="portal-module module-build"><span>02</span><b>BUILD</b><small>AI + software delivery</small></div>
					<div className="portal-module module-ship"><span>03</span><b>SHIP</b><small>Production + rollout</small></div>
					<div className="portal-ring ring-a" /><div className="portal-ring ring-b" /><div className="portal-ring ring-c" />
					<div className="portal-satellite satellite-a" /><div className="portal-satellite satellite-b" /><div className="portal-satellite satellite-c" />
				</motion.div>
			</motion.div>

			<div className="portal-coordinates" aria-hidden="true"><span>06°12&apos;S</span><span>106°49&apos;E</span><span>2026 / PORTFOLIO</span></div>
			<a className="portal-scroll" href="#method"><span /> See how I work</a>
		</section>
	);
}

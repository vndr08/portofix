"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export default function SpatialProjectFrame({ src, alt, priority = false, portrait = false, className = "" }) {
	const frameRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const smoothX = useSpring(x, { stiffness: 95, damping: 22, mass: 0.55 });
	const smoothY = useSpring(y, { stiffness: 95, damping: 22, mass: 0.55 });
	const rotateY = useTransform(smoothX, [-1, 1], [-6.5, 6.5]);
	const rotateX = useTransform(smoothY, [-1, 1], [5, -5]);
	const imageX = useTransform(smoothX, [-1, 1], [-9, 9]);
	const imageY = useTransform(smoothY, [-1, 1], [-7, 7]);

	const handlePointerMove = (event) => {
		if (reduceMotion || event.pointerType === "touch" || !frameRef.current) return;
		const bounds = frameRef.current.getBoundingClientRect();
		x.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
		y.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
	};

	const reset = () => { x.set(0); y.set(0); };

	return (
		<motion.div
			ref={frameRef}
			className={`spatial-project-frame ${portrait ? "is-portrait" : ""} ${className}`}
			onPointerMove={handlePointerMove}
			onPointerLeave={reset}
			style={reduceMotion ? undefined : { rotateX, rotateY }}>
			<div className="spatial-frame-echo echo-one" aria-hidden="true" />
			<div className="spatial-frame-echo echo-two" aria-hidden="true" />
			<motion.div className="spatial-frame-image" style={reduceMotion ? undefined : { x: imageX, y: imageY }}>
				<Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 900px) 92vw, 54vw" className="object-cover" />
			</motion.div>
			<span className="spatial-frame-glint" aria-hidden="true" />
		</motion.div>
	);
}

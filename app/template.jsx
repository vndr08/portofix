"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className="route-transition"
			initial={reduceMotion ? false : { opacity: 0.94, y: 8, filter: "blur(4px)" }}
			animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
			transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}>
			{children}
		</motion.div>
	);
}

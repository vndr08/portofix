"use client";

import { motion } from "framer-motion";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

export default function Template({ children }) {
	const reduceMotion = useSafeReducedMotion();

	return (
		<motion.div
			className="route-transition"
			initial={reduceMotion ? false : { opacity: 0.96, y: 5, clipPath: "inset(0 0 2.5% 0)" }}
			animate={reduceMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
			transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}>
			{children}
		</motion.div>
	);
}

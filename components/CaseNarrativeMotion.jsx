"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

export default function CaseNarrativeMotion({ description, impact, highlights = [] }) {
	const ref = useRef(null);
	const reduceMotion = useSafeReducedMotion();
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end 72%"] });
	const progress = useSpring(scrollYProgress, { stiffness: 84, damping: 28, mass: 0.55 });
	const lineScale = useTransform(progress, [0.08, 0.94], [0, 1]);

	return (
		<div ref={ref} className="case-narrative">
			<motion.i className="case-narrative-signal" style={reduceMotion ? undefined : { scaleY: lineScale }} aria-hidden="true" />
			<motion.h2 initial={false} whileInView={reduceMotion ? undefined : { clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"], y: [18, 0] }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}>FROM CONTEXT<br />TO SYSTEM.</motion.h2>
			{description.map((paragraph, index) => (
				<motion.p key={paragraph} initial={false} whileInView={reduceMotion ? undefined : { opacity: [0.72, 1], x: [index % 2 ? 18 : -18, 0], filter: ["blur(3px)", "blur(0px)"] }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}>{paragraph}</motion.p>
			))}
			{impact && <motion.blockquote initial={false} whileInView={reduceMotion ? undefined : { clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0%)"], opacity: [0.7, 1] }} viewport={{ once: true, amount: 0.42 }} transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}><span>What changed</span>{impact}</motion.blockquote>}
			{highlights.length > 0 && (
				<div className="case-evidence">
					<h3>ENGINEERING EVIDENCE</h3>
					{highlights.map((highlight, index) => <motion.article key={highlight} initial={false} whileInView={reduceMotion ? undefined : { x: [24, 0], opacity: [0.68, 1] }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.4, delay: Math.min(index * 0.045, 0.18), ease: [0.16, 1, 0.3, 1] }}><b>{String(index + 1).padStart(2, "0")}</b><p>{highlight}</p></motion.article>)}
				</div>
			)}
		</div>
	);
}

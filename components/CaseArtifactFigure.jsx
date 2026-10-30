"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

export default function CaseArtifactFigure({ image, title, index, concept, portrait }) {
	const ref = useRef(null);
	const reduceMotion = useSafeReducedMotion();
	const isInView = useInView(ref, { margin: "-12% 0px -12% 0px" });
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	const progress = useSpring(scrollYProgress, { stiffness: 72, damping: 27, mass: 0.6 });
	const y = useTransform(progress, [0, 0.5, 1], [36, 0, -24]);
	const rotateY = useTransform(progress, [0, 0.5, 1], index % 2 === 0 ? [-7, -2, 2] : [7, 2, -2]);
	const clipPath = useTransform(progress, [0.05, 0.38], ["inset(12% 8% 12% 8%)", "inset(0% 0% 0% 0%)"]);

	return (
		<motion.figure ref={ref} className={`${portrait ? "portrait-capture " : ""}${isInView ? "is-in-view" : ""}`} style={reduceMotion ? undefined : { y }}>
			<motion.div style={reduceMotion ? undefined : { rotateY, clipPath, transformPerspective: 1400 }}>
				<Image src={image} alt={`${title} artifact ${index + 1}`} width={1920} height={1080} sizes="(max-width: 900px) 92vw, 78vw" />
				<i className="case-artifact-scan" aria-hidden="true" />
			</motion.div>
			<figcaption>{concept ? "Concept cover" : "Project capture"} · {String(index + 1).padStart(2, "0")}</figcaption>
		</motion.figure>
	);
}

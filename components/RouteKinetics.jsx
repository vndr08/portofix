"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

export default function RouteKinetics() {
	const reduceMotion = useSafeReducedMotion();
	const { scrollY, scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 92, damping: 28, mass: 0.55 });
	const velocity = useVelocity(scrollY);
	const markerY = useTransform(progress, [0, 1], ["0vh", "66vh"]);
	const velocityStretch = useTransform(velocity, [-1800, 0, 1800], [2.2, 1, 2.2]);
	const velocityOpacity = useTransform(velocity, [-1800, 0, 1800], [0.75, 0.3, 0.75]);

	return (
		<div className="route-kinetics" aria-hidden="true">
			<div className="route-kinetics-rail">
				<motion.i style={reduceMotion ? undefined : { scaleY: progress }} />
				<motion.span style={reduceMotion ? undefined : { y: markerY, scaleY: velocityStretch, opacity: velocityOpacity }} />
			</div>
			<div className="route-kinetics-axis"><i /><i /><b /></div>
		</div>
	);
}

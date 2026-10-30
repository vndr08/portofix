"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignalIcon from "@/components/SignalIcon";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const reduceMotion = useSafeReducedMotion();

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 500);
		};

		window.addEventListener("scroll", toggleVisibility, { passive: true });
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={reduceMotion ? false : { opacity: 0, scale: 0.86, y: 16 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
					transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: [0.16, 1, 0.3, 1] }}
					onClick={scrollToTop}
					className="system-back-to-top"
					aria-label="Scroll back to top">
					<SignalIcon direction="up" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}

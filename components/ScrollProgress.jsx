"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setProgress(Math.min(scrollProgress, 100));
		};

		window.addEventListener("scroll", updateProgress, { passive: true });
		updateProgress();

		return () => window.removeEventListener("scroll", updateProgress);
	}, []);

	return (
		<div
			className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-75"
			style={{ width: `${progress}%` }}
			role="progressbar"
			aria-valuenow={Math.round(progress)}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label="Page scroll progress"
		/>
	);
}

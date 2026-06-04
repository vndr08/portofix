"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle({ label = false, className = "" }) {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const currentTheme =
			document.documentElement.getAttribute("data-theme") || "light";
		setTheme(currentTheme);
	}, []);

	const nextTheme = theme === "dark" ? "light" : "dark";

	const toggleTheme = () => {
		document.documentElement.setAttribute("data-theme", nextTheme);
		window.localStorage.setItem("ivan-theme-v2", nextTheme);
		setTheme(nextTheme);
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={`Switch to ${nextTheme} mode`}
			title={`Switch to ${nextTheme} mode`}
			className={`outer-shadow hover-in-shadow inline-flex h-10 items-center justify-center gap-2 rounded-full border px-3 text-sm font-bold transition hover:-translate-y-0.5 theme-card-solid theme-text ${className}`}>
			<motion.span
				key={theme}
				initial={{ rotate: -90, scale: 0.65, opacity: 0 }}
				animate={{ rotate: 0, scale: 1, opacity: 1 }}
				transition={{ type: "spring", stiffness: 260, damping: 18 }}
				className="inline-flex">
				<FontAwesomeIcon
					icon={theme === "dark" ? faSun : faMoon}
					className="h-4 w-4 theme-accent"
				/>
			</motion.span>
			{label && <span>{theme === "dark" ? "Light" : "Dark"}</span>}
		</button>
	);
}

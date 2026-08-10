"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Magnetic Button - follows cursor when nearby
 */
export function MagneticButton({ children, className = "", strength = 0.3 }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = (e) => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
		const centerX = left + width / 2;
		const centerY = top + height / 2;
		const deltaX = (e.clientX - centerX) * strength;
		const deltaY = (e.clientY - centerY) * strength;
		setPosition({ x: deltaX, y: deltaY });
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
		setIsHovered(false);
	};

	return (
		<motion.div
			animate={{ x: position.x, y: position.y }}
			transition={{ type: "spring", stiffness: 150, damping: 15 }}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			className={`inline-block ${className}`}>
			{children}
		</motion.div>
	);
}

/**
 * Ripple Effect - adds ripple on click
 */
export function RippleEffect({ className = "" }) {
	const [ripples, setRipples] = useState([]);

	const addRipple = (e) => {
		const button = e.currentTarget;
		const rect = button.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const id = Date.now();

		setRipples((prev) => [...prev, { x, y, id }]);

		setTimeout(() => {
			setRipples((prev) => prev.filter((r) => r.id !== id));
		}, 600);
	};

	return (
		<div className={`relative overflow-hidden ${className}`} onClick={addRipple}>
			{ripples.map((ripple) => (
				<span
					key={ripple.id}
					className="absolute rounded-full bg-white/30"
					style={{
						left: ripple.x,
						top: ripple.y,
						width: 0,
						height: 0,
						animation: "ripple 0.6s ease-out",
					}}
				/>
			))}
			<style jsx>{`
				@keyframes ripple {
					to {
						width: 300px;
						height: 300px;
						margin-left: -150px;
						margin-top: -150px;
						opacity: 0;
					}
				}
			`}</style>
		</div>
	);
}

/**
 * Text Scramble Effect
 */
export function useTextScramble(text, speed = 50) {
	const [displayText, setDisplayText] = useState(text);
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			const scrambled = text
				.split("")
				.map((char, index) => {
					if (index < currentIndex) return text[index];
					if (char === " ") return " ";
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join("");
			setDisplayText(scrambled);

			if (currentIndex < text.length) {
				currentIndex += 1;
			} else {
				clearInterval(interval);
				setDisplayText(text);
			}
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed]);

	return displayText;
}

/**
 * Typewriter Effect with Cursor
 */
export function TypewriterCursor({
	text,
	className = "",
	cursorClassName = "theme-accent",
	speed = 50,
}) {
	const [displayText, setDisplayText] = useState("");
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex < text.length) {
				setDisplayText(text.substring(0, currentIndex + 1));
				currentIndex += 1;
			} else {
				clearInterval(interval);
			}
		}, speed);

		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => {
			clearInterval(interval);
			clearInterval(cursorInterval);
		};
	}, [text, speed]);

	return (
		<span className={className}>
			{displayText}
			<span className={`inline-block w-0.5 animate-pulse ${cursorClassName}`}>
				{showCursor ? "|" : " "}
			</span>
		</span>
	);
}

/**
 * Glitch Text Effect
 */
export function GlitchText({ children, className = "" }) {
	const [isGlitching, setIsGlitching] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsGlitching(true);
			setTimeout(() => setIsGlitching(false), 200);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<span
			className={`relative inline-block ${className} ${
				isGlitching ? "animate-glitch" : ""
			}`}
			data-text={children}>
			{children}
		</span>
	);
}

/**
 * Shimmer Loading Effect
 */
export function Shimmer({ className = "" }) {
	return <div className={`shimmer ${className}`} />;
}

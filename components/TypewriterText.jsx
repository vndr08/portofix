"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
	words,
	typeDelay = 90,
	eraseDelay = 45,
	pauseDelay = 1300,
	className = "",
}) {
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		if (!words?.length) return undefined;

		const currentWord = words[wordIndex];
		const isWordComplete = charIndex === currentWord.length;
		const isWordEmpty = charIndex === 0;
		const delay = isDeleting
			? eraseDelay
			: isWordComplete
			  ? pauseDelay
			  : typeDelay;

		const timeout = window.setTimeout(() => {
			if (!isDeleting && isWordComplete) {
				setIsDeleting(true);
				return;
			}

			if (isDeleting && isWordEmpty) {
				setIsDeleting(false);
				setWordIndex((index) => (index + 1) % words.length);
				return;
			}

			setCharIndex((index) => index + (isDeleting ? -1 : 1));
		}, delay);

		return () => window.clearTimeout(timeout);
	}, [charIndex, eraseDelay, isDeleting, pauseDelay, typeDelay, wordIndex, words]);

	if (!words?.length) return null;

	const visibleText = words[wordIndex].slice(0, charIndex);

	return (
		<span className={className}>
			<span>{visibleText}</span>
			<span className="typed-cursor" aria-hidden="true" />
		</span>
	);
}

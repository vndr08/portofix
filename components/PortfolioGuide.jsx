"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SignalIcon from "@/components/SignalIcon";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";
import data from "@/json/data.json";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";

const featuredProjects = data.Projects.filter((project) => project.show).slice(0, 3);
const quickPrompts = [
	{ id: "projects", label: "Best projects" },
	{ id: "experience", label: "Experience" },
	{ id: "skills", label: "Technical range" },
	{ id: "availability", label: "Availability" },
];

const responseMap = {
	projects: {
		text: "Start with these three systems. Together they show realtime product engineering, applied AI, and production-oriented delivery.",
		links: featuredProjects.map((project) => ({ label: project.title, href: `/projects/${project.slug}` })),
	},
	experience: {
		text: `${resume.experience[0].role} and ${resume.experience[1].role} at ${resume.experience[0].company}. The work spans enterprise finance workflows, UI migration, internal AI agents, requirements, and data automation.`,
		links: [{ label: "Read the full profile", href: "/about" }],
	},
	skills: {
		text: `Core technical range: ${resume.skills[0].items.slice(0, 7).join(", ")}. Delivery strengths include ${resume.skills[1].items.slice(0, 4).join(", ")}.`,
		links: [{ label: "Open technical index", href: "/projects/archive" }],
	},
	availability: {
		text: `${profile.availability} Based in ${profile.location}.`,
		links: [{ label: "Email Ivan", href: `mailto:${profile.email}` }, { label: "Open résumé", href: profile.cvUrl }],
	},
	education: {
		text: `${resume.education.program} at ${resume.education.school}, ${resume.education.period}. Current GPA: ${resume.education.gpa}.`,
		links: [{ label: "See education and credentials", href: "/about" }],
	},
	contact: {
		text: `The fastest route is email: ${profile.email}. You can also review Ivan's GitHub and LinkedIn profiles.`,
		links: [{ label: "Email", href: `mailto:${profile.email}` }, { label: "LinkedIn", href: profile.linkedin }, { label: "GitHub", href: profile.github }],
	},
	resume: {
		text: "Ivan's ATS résumé contains the compact recruiter view of experience, education, skills, and achievements.",
		links: [{ label: "Open résumé", href: profile.cvUrl }],
	},
	fallback: {
		text: "I can guide you through Ivan's projects, experience, technical range, education, availability, résumé, or contact details.",
		links: [{ label: "Browse all projects", href: "/projects" }],
	},
};

function resolveIntent(value) {
	const query = value.toLowerCase();
	if (/project|proyek|portfolio|work|case|karya/.test(query)) return "projects";
	if (/experience|pengalaman|jababeka|intern|kerja/.test(query)) return "experience";
	if (/skill|stack|tech|teknologi|python|react|langchain|software/.test(query)) return "skills";
	if (/available|availability|open|opportunity|kesempatan|hire|rekrut/.test(query)) return "availability";
	if (/education|pendidikan|kampus|university|gpa|ipk/.test(query)) return "education";
	if (/contact|kontak|email|linkedin|github|hubungi/.test(query)) return "contact";
	if (/resume|résumé|cv/.test(query)) return "resume";
	return "fallback";
}

function GuideLink({ item }) {
	const content = <>{item.label}<SignalIcon direction="up-right" /></>;
	if (item.href.startsWith("/")) return <Link href={item.href}>{content}</Link>;
	return <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>{content}</a>;
}

export default function PortfolioGuide() {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [messages, setMessages] = useState([{ id: "welcome", from: "guide", ...responseMap.fallback }]);
	const reduceMotion = useSafeReducedMotion();
	const inputRef = useRef(null);
	const logRef = useRef(null);
	const timerRef = useRef(null);

	useEffect(() => {
		if (!isOpen) return undefined;
		const focusTimer = window.setTimeout(() => inputRef.current?.focus(), reduceMotion ? 0 : 260);
		const closeOnEscape = (event) => {
			if (event.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => {
			window.clearTimeout(focusTimer);
			window.removeEventListener("keydown", closeOnEscape);
		};
	}, [isOpen, reduceMotion]);

	useEffect(() => {
		if (logRef.current) logRef.current.scrollTo({ top: logRef.current.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
	}, [messages, isTyping, reduceMotion]);

	useEffect(() => () => window.clearTimeout(timerRef.current), []);

	const answer = (intent, userText) => {
		if (isTyping) return;
		const response = responseMap[intent] || responseMap.fallback;
		if (userText) setMessages((current) => [...current, { id: `user-${Date.now()}`, from: "user", text: userText }]);
		setIsTyping(true);
		timerRef.current = window.setTimeout(() => {
			setMessages((current) => [...current, { id: `guide-${Date.now()}`, from: "guide", ...response }]);
			setIsTyping(false);
		}, reduceMotion ? 0 : 420);
	};

	const submit = (event) => {
		event.preventDefault();
		const value = input.trim();
		if (!value) return;
		setInput("");
		answer(resolveIntent(value), value);
	};

	return (
		<div className={`portfolio-guide${isOpen ? " is-open" : ""}`}>
			<AnimatePresence>
				{isOpen && (
					<motion.section
						id="portfolio-guide"
						className="guide-panel"
						role="dialog"
						aria-modal="false"
						aria-label="Ivan portfolio guide"
						initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97, clipPath: "inset(8% 0 0 0)" }}
						animate={{ opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0 0 0)" }}
						exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
						transition={{ duration: reduceMotion ? 0.01 : 0.32, ease: [0.16, 1, 0.3, 1] }}>
						<header className="guide-head">
							<div><span><i />Portfolio guide</span><p>Rule-based · no AI · no data leaves this page</p></div>
							<button type="button" onClick={() => setIsOpen(false)} aria-label="Close portfolio guide"><i /><i /></button>
						</header>

						<div className="guide-log" ref={logRef} aria-live="polite" aria-relevant="additions">
							{messages.map((message) => (
								<article key={message.id} className={`guide-message is-${message.from}`}>
									<span>{message.from === "guide" ? "IVAN / GUIDE" : "YOU"}</span>
									<p>{message.text}</p>
									{message.links?.length ? <nav aria-label="Related links">{message.links.map((item) => <GuideLink key={`${message.id}-${item.label}`} item={item} />)}</nav> : null}
								</article>
							))}
							{isTyping ? <div className="guide-typing" role="status" aria-label="Preparing answer"><i /><i /><i /></div> : null}
						</div>

						<div className="guide-prompts" aria-label="Suggested questions">
							{quickPrompts.map((prompt) => <button type="button" key={prompt.id} disabled={isTyping} onClick={() => answer(prompt.id)}>{prompt.label}</button>)}
						</div>

						<form className="guide-input" onSubmit={submit}>
							<label htmlFor="portfolio-guide-input">Ask about Ivan</label>
							<input ref={inputRef} id="portfolio-guide-input" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Projects, experience, skills…" autoComplete="off" />
							<button type="submit" disabled={!input.trim() || isTyping} aria-label="Send question"><SignalIcon /></button>
						</form>
					</motion.section>
				)}
			</AnimatePresence>

			<motion.button
				type="button"
				className="guide-launcher"
				onClick={() => setIsOpen((current) => !current)}
				aria-expanded={isOpen}
				aria-controls="portfolio-guide"
				whileTap={reduceMotion ? undefined : { scale: 0.97 }}>
				<span><i />{isOpen ? "Close guide" : "Ask Ivan"}</span><SignalIcon direction={isOpen ? "down" : "up-right"} />
			</motion.button>
		</div>
	);
}

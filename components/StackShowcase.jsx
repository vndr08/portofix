"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAws,
	faCss3Alt,
	faDocker,
	faFigma,
	faGitAlt,
	faGithub,
	faHtml5,
	faJava,
	faJs,
	faPhp,
	faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBolt,
	faBrain,
	faChartLine,
	faCode,
	faComments,
	faDatabase,
	faFire,
	faHandshake,
	faLayerGroup,
	faLightbulb,
	faMicrophone,
	faPeopleGroup,
	faPuzzlePiece,
	faRobot,
	faServer,
	faTerminal,
	faTimeline,
	faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const skillTabs = [
	{
		id: "all",
		label: "All Skills",
		title: "A recruiter-readable stack map.",
		description: "Grouped by the work Ivan actually does: AI automation, web systems, databases, and delivery tools.",
		items: [
			"Python",
			"JavaScript",
			"Java",
			"PHP",
			"ASP.NET",
			"FastAPI",
			"Django",
			"Streamlit",
			"LangChain",
			"Ollama",
			"Gemini AI",
			"MySQL",
			"PostgreSQL",
			"Firebase",
			"Git",
			"GitHub",
			"Docker",
			"Power BI",
			"Figma",
			"Kendo UI Telerik",
			"Teamwork",
			"Leadership",
			"Public Speaking",
			"Problem-Solving",
		],
	},
	{
		id: "ai",
		label: "AI & Data",
		title: "AI tools for automation and decision support.",
		description: "Used across chatbot, duplicate detection, and machine-learning dashboard work.",
		items: [
			"Python",
			"LangChain",
			"FastAPI",
			"Ollama",
			"Gemini AI",
			"NLP",
			"Machine Learning",
			"Pandas",
			"NumPy",
			"Scikit-learn",
			"Random Forest",
			"Streamlit",
		],
	},
	{
		id: "web",
		label: "Web & Systems",
		title: "Full-stack and enterprise software delivery.",
		description: "Built from project and internship work across dashboards, finance modules, and web applications.",
		items: [
			"JavaScript",
			"HTML",
			"CSS",
			"PHP",
			"Java",
			"ASP.NET",
			"FastAPI",
			"Django",
			"Streamlit",
			"Kendo UI Telerik",
			"MySQL",
			"PostgreSQL",
		],
	},
	{
		id: "tools",
		label: "Tools",
		title: "Tools for shipping and collaboration.",
		description: "Practical tools used for versioning, UI planning, deployment, analytics, and development workflow.",
		items: [
			"Git",
			"GitHub",
			"Docker",
			"Firebase",
			"Power BI",
			"Figma",
			"VS Code",
			"AWS",
			"Snowflake",
			"VPS Deployment",
			"PhpMyAdmin",
		],
	},
	{
		id: "soft",
		label: "Soft Skills",
		title: "Human skills that support engineering delivery.",
		description: "Built through internships, sponsorship leadership, volunteer work, public duty, and cross-functional projects.",
		items: [
			"Teamwork",
			"Leadership",
			"Public Speaking",
			"Event Planning",
			"Problem-Solving",
			"Adaptability",
			"Fast Learning",
			"External Communication",
		],
	},
];

const iconMap = {
	"ASP.NET": faCode,
	AWS: faAws,
	CSS: faCss3Alt,
	Django: faServer,
	Docker: faDocker,
	FastAPI: faBolt,
	Figma: faFigma,
	Firebase: faFire,
	"Gemini AI": faRobot,
	Git: faGitAlt,
	GitHub: faGithub,
	HTML: faHtml5,
	Java: faJava,
	JavaScript: faJs,
	"Kendo UI Telerik": faCode,
	LangChain: faLayerGroup,
	"Machine Learning": faBrain,
	MySQL: faDatabase,
	NLP: faBrain,
	NumPy: faChartLine,
	Ollama: faRobot,
	PHP: faPhp,
	Pandas: faChartLine,
	PhpMyAdmin: faDatabase,
	PostgreSQL: faDatabase,
	"Power BI": faChartLine,
	Python: faPython,
	"Random Forest": faBrain,
	"Scikit-learn": faBrain,
	Snowflake: faDatabase,
	Streamlit: faChartLine,
	Adaptability: faLightbulb,
	"Event Planning": faTimeline,
	"External Communication": faComments,
	"Fast Learning": faBolt,
	Leadership: faUserTie,
	"Problem-Solving": faPuzzlePiece,
	"Public Speaking": faMicrophone,
	Teamwork: faPeopleGroup,
	"VS Code": faTerminal,
	"VPS Deployment": faServer,
};

const toneMap = {
	Python: "from-[#3776ab] to-[#ffd43b]",
	JavaScript: "from-[#f7df1e] to-[#f59e0b]",
	Java: "from-[#f97316] to-[#2563eb]",
	PHP: "from-[#777bb4] to-[#4f46e5]",
	"ASP.NET": "from-[#7c3aed] to-[#06b6d4]",
	FastAPI: "from-[#009688] to-[#10b981]",
	Django: "from-[#0c4b33] to-[#44b78b]",
	Streamlit: "from-[#ff4b4b] to-[#f97316]",
	LangChain: "from-[#10b981] to-[#0f766e]",
	Ollama: "from-[#111827] to-[#64748b]",
	"Gemini AI": "from-[#4285f4] to-[#a855f7]",
	MySQL: "from-[#00758f] to-[#f29111]",
	PostgreSQL: "from-[#336791] to-[#60a5fa]",
	Firebase: "from-[#ffca28] to-[#f97316]",
	Git: "from-[#f05032] to-[#fb7185]",
	GitHub: "from-[#111827] to-[#6b7280]",
	Docker: "from-[#2496ed] to-[#06b6d4]",
	"Power BI": "from-[#f2c811] to-[#f59e0b]",
	Figma: "from-[#a259ff] to-[#0acf83]",
	Adaptability: "from-[#14b8a6] to-[#22c55e]",
	"Event Planning": "from-[#f97316] to-[#ec4899]",
	"External Communication": "from-[#06b6d4] to-[#3b82f6]",
	"Fast Learning": "from-[#84cc16] to-[#10b981]",
	Leadership: "from-[#8b5cf6] to-[#06b6d4]",
	"Problem-Solving": "from-[#f59e0b] to-[#ef4444]",
	"Public Speaking": "from-[#ec4899] to-[#8b5cf6]",
	Teamwork: "from-[#10b981] to-[#0ea5e9]",
};

function getIcon(name) {
	return iconMap[name] || faCode;
}

function getTone(name) {
	return toneMap[name] || "from-emerald-500 to-cyan-400";
}

function SkillBubble({ name, index, compact = false }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18, scale: 0.92 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ delay: Math.min(index * 0.035, 0.45), duration: 0.45, ease: "easeOut" }}
			whileHover={{ y: -8, scale: 1.04 }}
			className="group flex min-w-0 flex-col items-center gap-3">
			<div className="stack-orb outer-shadow relative flex h-16 w-16 items-center justify-center rounded-full border sm:h-20 sm:w-20 lg:h-24 lg:w-24">
				<div className={`absolute inset-3 rounded-2xl bg-gradient-to-br ${getTone(name)} opacity-[0.16] blur-md transition group-hover:opacity-35`} />
				<div className={`relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${getTone(name)} text-white shadow-lg sm:h-12 sm:w-12 lg:h-14 lg:w-14`}>
					<FontAwesomeIcon icon={getIcon(name)} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
				</div>
			</div>
			<p className={`${compact ? "text-xs sm:text-sm" : "text-xs sm:text-sm lg:text-base"} max-w-[7rem] text-center font-bold leading-snug theme-soft`}>
				{name}
			</p>
		</motion.div>
	);
}

function MovingDots() {
	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
			{Array.from({ length: 24 }).map((_, index) => (
				<span
					key={index}
					className="stack-star"
					style={{
						left: `${(index * 37) % 100}%`,
						top: `${(index * 23) % 88}%`,
						animationDelay: `${(index % 8) * 0.38}s`,
					}}
				/>
			))}
			<span className="stack-comet left-[8%] top-[18%]" />
			<span className="stack-comet stack-comet-delay right-[12%] top-[26%]" />
		</div>
	);
}

export default function StackShowcase({ compact = false }) {
	const [activeTab, setActiveTab] = useState("all");
	const active = skillTabs.find((tab) => tab.id === activeTab) || skillTabs[0];
	const marqueeItems = useMemo(() => [...skillTabs[0].items.slice(0, 12), ...skillTabs[0].items.slice(0, 12)], []);

	return (
		<div className={`stack-showcase relative overflow-hidden rounded-[1.5rem] border p-4 sm:rounded-[2rem] sm:p-8 ${compact ? "" : "lg:p-10"}`}>
			<MovingDots />

			<div className="relative z-10">
				<div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
					<div className="max-w-2xl">
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Skills & Stack
						</p>
						<h3 className="text-2xl font-bold leading-tight theme-text sm:text-3xl md:text-5xl">
							Tech stack and soft skills with more motion.
						</h3>
						<p className="mt-4 text-base leading-7 theme-muted">
							Filtered like the Sahil reference, but mapped to Ivan&apos;s actual AI, software, full-stack, and collaboration strengths.
						</p>
					</div>

					<div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
						{skillTabs.map((tab) => (
							<button
								key={tab.id}
								type="button"
								onClick={() => setActiveTab(tab.id)}
								className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition sm:px-5 sm:py-3 ${
									activeTab === tab.id
										? "bg-gradient-to-r from-emerald-500 to-cyan-400 text-white shadow-lg shadow-emerald-500/20"
										: "theme-chip hover:-translate-y-0.5"
								}`}
								aria-pressed={activeTab === tab.id}>
								{tab.label}
							</button>
						))}
					</div>
				</div>

				<div className="mt-8 overflow-hidden border-y py-4 theme-border sm:mt-10 sm:py-5">
					<motion.div
						className="flex w-max gap-8"
						animate={{ x: ["0%", "-50%"] }}
						transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
						{marqueeItems.map((name, index) => (
							<div key={`${name}-${index}`} className="flex items-center gap-3 text-sm font-bold theme-muted">
								<div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${getTone(name)} text-white`}>
									<FontAwesomeIcon icon={getIcon(name)} className="h-5 w-5" />
								</div>
								{name}
							</div>
						))}
					</motion.div>
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={active.id}
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -18 }}
						transition={{ duration: 0.28 }}
						className="mt-8 grid grid-cols-1 gap-7 sm:mt-10 xl:grid-cols-[0.78fr_1.22fr]">
						<div className="theme-card rounded-[1.5rem] p-5 sm:p-6">
							<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-white">
								<FontAwesomeIcon icon={active.id === "ai" ? faBrain : active.id === "tools" ? faTerminal : active.id === "soft" ? faHandshake : faLayerGroup} className="h-6 w-6" />
							</div>
							<h4 className="text-xl font-bold leading-snug theme-text sm:text-2xl">{active.title}</h4>
							<p className="mt-4 text-sm leading-7 theme-muted">{active.description}</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{active.items.slice(0, 6).map((item) => (
									<span key={item} className="rounded-full px-3 py-1.5 text-xs font-bold theme-chip">
										{item}
									</span>
								))}
							</div>
						</div>

						<div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 xl:grid-cols-5">
							{active.items.map((item, index) => (
								<SkillBubble key={item} name={item} index={index} compact={compact} />
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

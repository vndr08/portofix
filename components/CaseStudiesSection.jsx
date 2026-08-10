"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBullseye, faChartLine, faLightbulb, faWrench } from "@fortawesome/free-solid-svg-icons";
import data from "@/json/data.json";

const fadeUp = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: "easeOut" },
};

const caseStudies = [
	{
		slug: "ai-chatbot-jababeka",
		title: "AI-Powered Customer Service Chatbot",
		company: "PT Jababeka Tbk",
		role: "AI Engineer",
		year: "2024",
		category: "AI & Automation",
		challenge:
			"Handle high volume of repetitive customer inquiries about property listings, facility bookings, and maintenance requests with 24/7 availability.",
		solution:
			"Built an intelligent chatbot using LangChain and FastAPI that integrates with company knowledge base and provides instant, accurate responses.",
		result:
			"Reduced response time by 80% and handled 60% of inquiries without human intervention.",
		icon: faLightbulb,
		color: "from-emerald-500 to-cyan-500",
		featured: true,
	},
	{
		slug: "duplicate-detection-system",
		title: "Duplicate Lead Detection System",
		company: "PT Jababeka Tbk",
		role: "Software Engineer",
		year: "2024",
		category: "Machine Learning",
		challenge:
			"Sales team was wasting time following up on duplicate leads, causing inefficiency and customer frustration.",
		solution:
			"Implemented ML-based duplicate detection using fuzzy matching and NLP to identify potential duplicates with 94% accuracy.",
		result:
			"Saved 15+ hours per week in sales follow-ups and improved lead conversion by 25%.",
		icon: faBullseye,
		color: "from-violet-500 to-purple-500",
		featured: true,
	},
	{
		slug: "financial-dashboard",
		title: "Real-time Financial Dashboard",
		company: "PT Jababeka Tbk",
		role: "Full Stack Engineer",
		year: "2023",
		category: "Data Visualization",
		challenge:
			"Management needed real-time visibility into financial metrics across multiple business units.",
		solution:
			"Built interactive dashboards using Power BI and Streamlit with automated data pipelines and custom KPIs.",
		result:
			"Reduced report generation time from 2 days to real-time, enabling faster decision-making.",
		icon: faChartLine,
		color: "from-amber-500 to-orange-500",
		featured: false,
	},
];

function CaseStudyCard({ study, index }) {
	return (
		<motion.article
			{...fadeUp}
			transition={{ ...fadeUp.transition, delay: index * 0.1 }}
			whileHover={{ y: -8 }}
			className="group">
			<Link href={`/case-studies/${study.slug}`} className="block h-full">
				<div className="overflow-hidden rounded-2xl border theme-card transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
					{/* Header with icon */}
					<div className={`relative bg-gradient-to-br ${study.color} p-6 text-white`}>
						<div className="flex items-center justify-between">
							<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
								<FontAwesomeIcon icon={study.icon} className="h-7 w-7" />
							</div>
							{study.featured && (
								<span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
									Featured
								</span>
							)}
						</div>
					</div>

					{/* Content */}
					<div className="p-6">
						{/* Meta */}
						<div className="mb-3 flex flex-wrap items-center gap-2 text-xs theme-muted">
							<span className="font-semibold theme-text">{study.company}</span>
							<span>•</span>
							<span>{study.role}</span>
							<span>•</span>
							<span>{study.year}</span>
						</div>

						{/* Title */}
						<h3 className="text-xl font-bold leading-snug theme-text transition-colors duration-300 group-hover:text-emerald-500">
							{study.title}
						</h3>

						{/* Challenge */}
						<div className="mt-4">
							<p className="text-xs font-bold uppercase tracking-wider theme-accent">
								Challenge
							</p>
							<p className="mt-1 line-clamp-2 text-sm leading-relaxed theme-muted">
								{study.challenge}
							</p>
						</div>

						{/* Tags */}
						<div className="mt-5 flex flex-wrap gap-2">
							<span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
								{study.category}
							</span>
						</div>

						{/* Read more */}
						<div className="mt-5 flex items-center gap-2 text-sm font-bold theme-accent transition-all duration-300 group-hover:gap-3">
							Read case study
							<FontAwesomeIcon
								icon={faArrowRight}
								className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
							/>
						</div>
					</div>
				</div>
			</Link>
		</motion.article>
	);
}

export default function CaseStudiesSection() {
	const featuredStudies = caseStudies.filter((s) => s.featured);
	const otherStudies = caseStudies.filter((s) => !s.featured);

	return (
		<section id="case-studies" className="theme-section theme-band px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
					<motion.div {...fadeUp} className="max-w-3xl">
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Case Studies
						</p>
						<h2 className="text-3xl font-bold leading-tight md:text-5xl theme-text">
							Problems solved, lessons learned.
						</h2>
						<p className="mt-4 text-base leading-7 md:text-lg theme-muted">
							Deep dives into real projects: the challenges faced, solutions built, and impact delivered.
						</p>
					</motion.div>
					<motion.div {...fadeUp} className="mb-10">
						<Link
							href="/case-studies"
							className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 theme-chip hover:text-emerald-500 theme-border">
							View all case studies
							<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
						</Link>
					</motion.div>
				</div>

				{/* Featured case studies */}
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{featuredStudies.map((study, index) => (
						<CaseStudyCard key={study.slug} study={study} index={index} />
					))}
				</div>

				{/* Other case studies */}
				{otherStudies.length > 0 && (
					<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{otherStudies.map((study, index) => (
							<CaseStudyCard
								key={study.slug}
								study={study}
								index={index + featuredStudies.length}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

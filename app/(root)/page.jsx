"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import StackShowcase from "@/components/StackShowcase";
import ThemeToggle from "@/components/ThemeToggle";
import TypewriterText from "@/components/TypewriterText";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";
import data from "@/json/data.json";
import Me from "@/public/image/ivander.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowRight,
	faAward,
	faBriefcase,
	faCode,
	faDownload,
	faEnvelope,
	faPhone,
	faRobot,
	faServer,
} from "@fortawesome/free-solid-svg-icons";

const shownProjects = data.Projects.filter((project) => project.show);
const featuredProjects = shownProjects
	.filter((project) => project.featured)
	.slice(0, 5);
const projectsForHome =
	featuredProjects.length > 0 ? featuredProjects : shownProjects.slice(0, 5);

const roleCards = [
	{
		title: "AI Engineer",
		icon: faRobot,
		text: "AI agents, retrieval workflows, NLP, data automation, and model-driven tools.",
	},
	{
		title: "Software Engineer",
		icon: faCode,
		text: "Enterprise finance modules, bug fixing, UI migration, and reliable workflow delivery.",
	},
	{
		title: "Full Stack Engineer",
		icon: faServer,
		text: "Dashboards, backend integrations, database-backed apps, and responsive interfaces.",
	},
];

const timeline = resume.experience.map((item) => ({
	period: item.period,
	title: item.role,
	meta: item.company,
	text: `${item.summary} ${item.highlights[0]}`,
}));

const achievementCards = [
	...resume.recruiterHighlights,
	{
		value: "3rd",
		label: "SETSsail Biz Accel",
		detail: "Service Category, 2024",
	},
];

const fadeUp = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: "easeOut" },
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const child = {
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, description }) {
	return (
		<motion.div {...fadeUp} className="mb-10 max-w-3xl">
			<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
				{eyebrow}
			</p>
			<h2 className="text-3xl font-bold leading-tight md:text-5xl theme-text">{title}</h2>
			{description && (
				<p className="mt-4 text-base leading-7 md:text-lg theme-muted">
					{description}
				</p>
			)}
		</motion.div>
	);
}

function ActionRail() {
	return (
		<div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
			<ThemeToggle />
			<a
				href={`mailto:${profile.email}`}
				aria-label="Email Ivan"
				title="Email Ivan"
				className="inline-flex h-10 w-10 items-center justify-center rounded-full theme-card-solid theme-text transition hover:-translate-y-0.5 hover:text-emerald-600">
				<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
			</a>
			<a
				href={profile.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn"
				title="LinkedIn"
				className="inline-flex h-10 w-10 items-center justify-center rounded-full theme-card-solid theme-text transition hover:-translate-y-0.5 hover:text-emerald-600">
				<FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
			</a>
		</div>
	);
}

function HeroVisual() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 40 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
			className="relative mx-auto w-full max-w-lg pb-20 sm:pb-16 lg:max-w-none lg:pb-0">
			<div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-emerald-300/25 via-cyan-200/25 to-transparent blur-2xl" />
			<div className="theme-card relative overflow-hidden rounded-[2rem] p-4">
				<div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
					<Image
						src={Me}
						alt={profile.name}
						fill
						priority
						sizes="(max-width: 1024px) 90vw, 42vw"
						className="object-cover transition duration-700 hover:scale-[1.03]"
					/>
				</div>
			</div>
			<motion.div
				className="floating-orbit theme-card absolute -left-3 top-8 rounded-2xl px-4 py-3 sm:-left-8"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.45 }}>
				<p className="text-xs font-bold uppercase tracking-[0.18em] theme-muted">
					Current GPA
				</p>
				<p className="text-3xl font-bold theme-text">3.67</p>
			</motion.div>
			<motion.div
				className="floating-orbit-delay theme-card absolute -right-2 bottom-16 rounded-2xl px-4 py-3 sm:-right-8"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.6 }}>
				<p className="text-xs font-bold uppercase tracking-[0.18em] theme-muted">
					Focus
				</p>
				<p className="text-sm font-bold theme-text">
					AI + Software + Full Stack
				</p>
			</motion.div>
			<motion.div
				className="theme-card absolute bottom-0 left-3 right-3 translate-y-1/2 rounded-2xl p-4 sm:left-6 sm:right-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.75 }}>
				<div className="flex items-center gap-3">
					<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white">
						<FontAwesomeIcon icon={faBriefcase} className="h-5 w-5" />
					</div>
					<div>
						<p className="text-xs font-semibold theme-muted">Open for roles</p>
						<p className="text-sm font-bold theme-text">{profile.headline}</p>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

function ProjectMosaicCard({ project, index }) {
	return (
		<motion.article
			{...fadeUp}
			transition={{ ...fadeUp.transition, delay: index * 0.06 }}
			className="group hover-in-shadow outer-shadow theme-card overflow-hidden rounded-[1.5rem] transition duration-300 hover:-translate-y-2">
			<Link href={`/projects/${project.slug}`} className="block h-full">
				<div className="relative aspect-[16/10] overflow-hidden">
					<Image
						src={project.thumbnail}
						alt={project.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
						className="project-hover-image object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
					<div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
						{project.year}
					</div>
					<div className="view-project-pill absolute bottom-4 left-4 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white">
						View project
					</div>
				</div>
				<div className="p-5">
					<p className="text-xs font-bold uppercase tracking-[0.18em] theme-accent">
						{project.role || "Project"}
					</p>
					<h3 className="mt-2 text-lg font-bold leading-snug theme-text sm:text-xl">
						{project.title}
					</h3>
					<p className="mt-3 line-clamp-2 text-sm leading-6 theme-muted">
						{project.summary || project.desc[0]}
					</p>
					<div className="mt-5 flex items-center gap-2 text-sm font-bold theme-accent">
						Read case study
						<FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
					</div>
				</div>
			</Link>
		</motion.article>
	);
}

export default function MyPage() {
	return (
		<main className="theme-page relative">
			<ActionRail />
			<div className="hero-grid-bg pointer-events-none absolute inset-x-0 top-0 h-[760px] opacity-50" />
			<div className="shape shape-ring left-[7%] top-28" />
			<div className="shape shape-dots right-[12%] top-32" />
			<div className="shape shape-plus bottom-[18%] left-[12%]" />

			<section
				id="home"
				className="theme-section flex min-h-screen items-center px-4 pt-24 sm:px-6 md:px-10 lg:px-20">
				<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 py-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr]">
					<motion.div
						variants={stagger}
						initial="initial"
						animate="animate"
						className="relative z-10">
						<motion.div
							variants={child}
							className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold theme-chip">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
							</span>
							Available for Opportunities - {profile.location}
						</motion.div>
						<motion.h1
							variants={child}
							className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight theme-text sm:text-5xl md:text-7xl lg:text-8xl">
							Hi, I&apos;m {profile.shortName}
						</motion.h1>
						<motion.div
							variants={child}
							className="mt-5 flex flex-wrap items-center gap-2 text-xl font-semibold theme-soft sm:text-2xl md:text-3xl">
							<span>I build as an</span>
							<TypewriterText
								words={profile.roleFocus}
								className="min-w-0 font-bold theme-accent sm:min-w-[320px]"
							/>
						</motion.div>
						<motion.p
							variants={child}
							className="mt-6 max-w-2xl text-base leading-8 theme-muted md:text-lg">
							{profile.pitch}
						</motion.p>
						<motion.div variants={child} className="mt-7 flex flex-wrap gap-2">
							{profile.roleFocus.map((role) => (
								<span key={role} className="rounded-full px-4 py-2 text-sm font-bold theme-chip">
									{role}
								</span>
							))}
						</motion.div>
						<motion.div variants={child} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<Button href="/projects" variation="primary">
								View Projects
								<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
							</Button>
							<Button href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
								Download Resume
								<FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
							</Button>
							<Button href={`mailto:${profile.email}`}>
								Contact
								<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
							</Button>
						</motion.div>
						<motion.div variants={child} className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold theme-muted">
							<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-emerald-600">
								<FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 theme-accent" />
								LinkedIn
							</a>
							<a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-emerald-600">
								<FontAwesomeIcon icon={faGithub} className="h-5 w-5 theme-accent" />
								GitHub
							</a>
							<a href={profile.phoneHref} className="inline-flex items-center gap-2 transition hover:text-emerald-600">
								<FontAwesomeIcon icon={faPhone} className="h-4 w-4 theme-accent" />
								{profile.phone}
							</a>
						</motion.div>
					</motion.div>

					<HeroVisual />
				</div>
			</section>

			<section id="about" className="theme-section px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<SectionHeader
						eyebrow="What I Do"
						title="Balanced engineering with real production context."
						description="A recruiter-friendly view of Ivan's strongest lanes: AI automation, enterprise software delivery, and full-stack systems."
					/>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
						{roleCards.map((card, index) => (
							<motion.article
								key={card.title}
								{...fadeUp}
								transition={{ ...fadeUp.transition, delay: index * 0.08 }}
								className="theme-card rounded-[1.5rem] p-6 transition hover:-translate-y-2">
								<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
									<FontAwesomeIcon icon={card.icon} className="h-5 w-5" />
								</div>
								<h3 className="text-xl font-bold theme-text">{card.title}</h3>
								<p className="mt-3 text-sm leading-6 theme-muted">{card.text}</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section id="projects" className="theme-section theme-band px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<SectionHeader
							eyebrow="Selected Work"
							title="Featured projects with equal focus."
							description="Inspired by animated portfolio grids, but every project gets room to stand on its own."
						/>
						<motion.div {...fadeUp} className="mb-10">
							<Button href="/projects">
								All Projects
								<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
							</Button>
						</motion.div>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
						{projectsForHome.map((project, index) => (
							<ProjectMosaicCard project={project} index={index} key={project.slug} />
						))}
					</div>
				</div>
			</section>

			<section id="skills" className="theme-section px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<StackShowcase />
				</div>
			</section>

			<section id="experience" className="theme-section theme-band px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<SectionHeader
						eyebrow="Experience"
						title="A timeline shaped by support, data, and software delivery."
						description="Professional software and AI engineering history at PT Jababeka Tbk."
					/>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
						{timeline.map((item, index) => (
							<motion.article
								key={item.title}
								{...fadeUp}
								transition={{ ...fadeUp.transition, delay: index * 0.08 }}
								className="theme-card rounded-[1.5rem] p-6">
								<p className="text-sm font-bold theme-accent">{item.period}</p>
								<h3 className="mt-4 text-xl font-bold theme-text">{item.title}</h3>
								<p className="mt-1 text-sm font-semibold theme-muted">{item.meta}</p>
								<p className="mt-4 text-sm leading-6 theme-muted">{item.text}</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section className="theme-section px-4 py-14 sm:px-6 md:px-10 md:py-16 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
						{achievementCards.map((item, index) => (
							<motion.article
								key={`${item.value}-${item.label}`}
								{...fadeUp}
								transition={{ ...fadeUp.transition, delay: index * 0.05 }}
								className="theme-card rounded-[1.5rem] p-5">
								<p className="text-3xl font-bold theme-accent">{item.value}</p>
								<h3 className="mt-3 text-sm font-bold theme-text">{item.label}</h3>
								<p className="mt-2 text-xs leading-5 theme-muted">{item.detail}</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="theme-section px-4 pb-20 pt-8 sm:px-6 md:px-10 md:pb-24 lg:px-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 rounded-[2rem] p-5 sm:p-8 md:grid-cols-[1fr_0.8fr] md:p-10 theme-card">
					<motion.div {...fadeUp}>
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Contact
						</p>
						<h2 className="text-3xl font-bold md:text-5xl theme-text">
							Let&apos;s talk about the next role or project.
						</h2>
						<p className="mt-5 max-w-2xl leading-7 theme-muted">
							{profile.availability} Reach out for AI engineering, software
							engineering, full-stack, or application support opportunities.
						</p>
					</motion.div>
					<motion.div {...fadeUp} className="flex flex-col justify-center gap-3 text-sm font-semibold">
						<Button href={`mailto:${profile.email}`} variation="primary">
							Email Me
							<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
						</Button>
						<Button href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
							Resume
							<FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
						</Button>
					</motion.div>
				</div>
			</section>
		</main>
	);
}

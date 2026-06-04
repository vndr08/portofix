"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/Button";
import StackShowcase from "@/components/StackShowcase";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";
import Hero from "@/public/image/me2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faAward,
	faBriefcase,
	faCertificate,
	faDownload,
	faEnvelope,
	faGraduationCap,
	faLanguage,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
	{ id: "skills", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "education", label: "Education" },
	{ id: "certifications", label: "Certifications" },
];

const fadeUp = {
	initial: { opacity: 0, y: 24 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.5, ease: "easeOut" },
};

function SectionHeader({ eyebrow, title, description }) {
	return (
		<motion.div {...fadeUp} className="mb-10 max-w-3xl">
			<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
				{eyebrow}
			</p>
			<h2 className="text-3xl font-bold theme-text md:text-5xl">{title}</h2>
			{description && (
				<p className="mt-4 text-base leading-7 theme-muted md:text-lg">
					{description}
				</p>
			)}
		</motion.div>
	);
}

function ExperienceTab() {
	return (
		<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
			{resume.experience.map((item, index) => (
				<motion.article
					key={`${item.company}-${item.role}`}
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.06 }}
					className="theme-card rounded-[1.5rem] p-6">
					<p className="text-sm font-bold theme-accent">{item.period}</p>
					<h3 className="mt-3 text-xl font-bold theme-text">{item.role}</h3>
					<p className="mt-1 text-sm font-semibold theme-muted">{item.company}</p>
					<p className="mt-4 text-sm leading-6 theme-muted">{item.summary}</p>
					<ul className="mt-5 space-y-3">
						{item.highlights.map((highlight) => (
							<li key={highlight} className="flex gap-3 text-sm leading-6 theme-soft">
								<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
								<span>{highlight}</span>
							</li>
						))}
					</ul>
				</motion.article>
			))}
		</div>
	);
}

function EducationTab() {
	return (
		<div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
			<motion.article
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				className="theme-card rounded-[1.5rem] p-6">
				<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
					<FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
				</div>
				<p className="mt-5 text-sm font-bold theme-accent">{resume.education.period}</p>
				<h3 className="mt-3 text-2xl font-bold theme-text">{resume.education.school}</h3>
				<p className="mt-2 theme-muted">{resume.education.program}</p>
				<p className="mt-4 leading-7 theme-muted">{resume.education.description}</p>
			</motion.article>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{resume.recruiterHighlights.map((item, index) => (
					<motion.article
						key={item.label}
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.05 }}
						className="theme-card rounded-[1.5rem] p-5">
						<p className="text-3xl font-bold theme-accent">{item.value}</p>
						<h4 className="mt-3 text-sm font-bold theme-text">{item.label}</h4>
						<p className="mt-2 text-xs leading-5 theme-muted">{item.detail}</p>
					</motion.article>
				))}
			</div>
		</div>
	);
}

function CertificationsTab() {
	return (
		<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
			{resume.certifications.map((group, index) => (
				<motion.article
					key={group.group}
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.06 }}
					className="theme-card rounded-[1.5rem] p-5">
					<div className="flex items-center gap-3">
						<FontAwesomeIcon icon={faCertificate} className="h-4 w-4 theme-accent" />
						<h3 className="font-bold theme-text">{group.group}</h3>
					</div>
					<div className="mt-4 flex flex-wrap gap-2">
						{group.items.map((item) => (
							<span key={item} className="rounded-full px-3 py-1.5 text-xs font-bold theme-chip">
								{item}
							</span>
						))}
					</div>
				</motion.article>
			))}
		</div>
	);
}

function TabContent({ activeTab }) {
	const content = {
		skills: <StackShowcase compact />,
		experience: <ExperienceTab />,
		education: <EducationTab />,
		certifications: <CertificationsTab />,
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={activeTab}
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -18 }}
				transition={{ duration: 0.28 }}>
				{content[activeTab]}
			</motion.div>
		</AnimatePresence>
	);
}

export default function Page() {
	const [activeTab, setActiveTab] = useState("skills");

	return (
		<main className="theme-page relative">
			<div className="hero-grid-bg pointer-events-none absolute inset-x-0 top-0 h-[660px] opacity-45" />
			<div className="shape shape-ring left-[8%] top-32" />
			<div className="shape shape-plus right-[12%] top-40" />

			<section className="theme-section px-6 pb-16 pt-28 md:px-10 lg:px-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}>
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							About Ivan
						</p>
						<h1 className="text-4xl font-bold leading-tight theme-text md:text-6xl">
							A practical builder across AI, software, and full-stack delivery.
						</h1>
						<div className="mt-6 space-y-4">
							{resume.summary.map((paragraph) => (
								<p key={paragraph} className="max-w-2xl text-base leading-8 theme-muted md:text-lg">
									{paragraph}
								</p>
							))}
						</div>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button href={profile.cvUrl} target="_blank" rel="noopener noreferrer" variation="primary">
								Open Resume
								<FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
							</Button>
							<Button href={`mailto:${profile.email}`}>
								Email Me
								<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
							</Button>
						</div>
						<div className="mt-8 flex flex-wrap gap-4 text-sm font-bold theme-muted">
							<a href={profile.phoneHref} className="inline-flex items-center gap-2 transition hover:text-emerald-600">
								<FontAwesomeIcon icon={faPhone} className="h-4 w-4 theme-accent" />
								{profile.phone}
							</a>
							<span className="inline-flex items-center gap-2">
								<FontAwesomeIcon icon={faLanguage} className="h-4 w-4 theme-accent" />
								{resume.languages.map((item) => item.language).join(" / ")}
							</span>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 34 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
						className="relative mx-auto w-full max-w-lg lg:max-w-none">
						<div className="theme-card relative overflow-hidden rounded-[2rem] p-4">
							<div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
								<Image
									src={Hero}
									alt={profile.name}
									fill
									priority
									sizes="(max-width: 1024px) 90vw, 42vw"
									placeholder="blur"
									className="object-cover"
								/>
							</div>
						</div>
						<div className="floating-orbit theme-card absolute -bottom-6 left-4 right-4 rounded-2xl p-4">
							<p className="text-xs font-bold uppercase tracking-[0.18em] theme-accent">
								Education
							</p>
							<p className="mt-2 text-sm font-bold theme-text">
								{resume.education.program}
							</p>
							<p className="mt-1 text-xs theme-muted">
								GPA {resume.education.gpa} - {resume.education.school}
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			<section className="theme-section theme-band px-6 py-20 md:px-10 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<SectionHeader
						eyebrow="Interactive Profile"
						title="Recruiter details without the stiff resume wall."
						description="Tabs keep the page focused while still showing Ivan's strongest CV-backed evidence."
					/>
					<div className="mb-8 flex flex-wrap gap-3">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								type="button"
								onClick={() => setActiveTab(tab.id)}
								className={`rounded-full px-5 py-3 text-sm font-bold transition ${
									activeTab === tab.id
										? "bg-emerald-500 text-white theme-button-shadow"
										: "theme-chip hover:text-emerald-600"
								}`}>
								{tab.label}
							</button>
						))}
					</div>
					<TabContent activeTab={activeTab} />
				</div>
			</section>

			<section className="theme-section px-6 py-20 md:px-10 lg:px-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<SectionHeader
							eyebrow="Achievements"
							title="Concrete signals."
							description="Competition, scholarship, sponsorship, and public-duty highlights."
						/>
						<div className="grid grid-cols-1 gap-3">
							{resume.achievements.map((item, index) => (
								<motion.div
									key={item}
									{...fadeUp}
									transition={{ ...fadeUp.transition, delay: index * 0.04 }}
									className="theme-card flex gap-3 rounded-2xl p-4 text-sm leading-6 theme-soft">
									<FontAwesomeIcon icon={faAward} className="mt-1 h-4 w-4 theme-accent" />
									<span>{item}</span>
								</motion.div>
							))}
						</div>
					</div>
					<div>
						<SectionHeader
							eyebrow="Additional Experience"
							title="Adaptability outside engineering."
						/>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
							{resume.workExperience.map((item, index) => (
								<motion.article
									key={`${item.organization}-${item.role}`}
									{...fadeUp}
									transition={{ ...fadeUp.transition, delay: index * 0.05 }}
									className="theme-card rounded-[1.5rem] p-5">
									<FontAwesomeIcon icon={faBriefcase} className="h-4 w-4 theme-accent" />
									<p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] theme-accent">
										{item.period}
									</p>
									<h3 className="mt-3 text-lg font-bold theme-text">{item.role}</h3>
									<p className="mt-1 text-sm font-semibold theme-muted">{item.organization}</p>
									<p className="mt-3 text-sm leading-6 theme-muted">{item.summary}</p>
								</motion.article>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="theme-section px-6 pb-20 md:px-10 lg:px-20">
				<motion.div
					{...fadeUp}
					className="theme-card mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[2rem] p-8 md:flex-row md:items-center md:p-10">
					<div>
						<h2 className="text-3xl font-bold theme-text">Ready for recruiter review.</h2>
						<p className="mt-3 max-w-2xl theme-muted">
							For the full formal document, use the resume PDF. For a quick discussion, email is the fastest route.
						</p>
					</div>
					<div className="flex flex-col gap-3 sm:flex-row">
						<Button href={profile.cvUrl} target="_blank" rel="noopener noreferrer" variation="primary">
							Resume
							<FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
						</Button>
						<Button href={`mailto:${profile.email}`}>
							Contact
							<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
						</Button>
					</div>
				</motion.div>
			</section>
		</main>
	);
}

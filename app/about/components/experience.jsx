"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
	{
		id: 1,
		startDate: "Aug 2023",
		endDate: "Present",
		company: "PT Jababeka Tbk",
		position: "Software Engineering Partnership",
		type: "Partnership",
		location: "Cikarang, Bekasi",
		description:
			"Maintained and developed JIFAS (Jababeka Infrastructure Finance Accounting System) built on ASP.NET and Kendo UI Telerik. Performed bug fixing and feature development across accounting and finance modules (Balance Sheet, Cash Flow, Bulk Posting, PUM Realization). Led UI migration from legacy Bootstrap to updated Telerik framework. Developed and maintained AI chatbot integration within JIFAS ecosystem.",
		skills: ["ASP.NET", "Kendo UI Telerik", "C#", "SQL Server", "Bootstrap", "AI Chatbot", "Finance Modules"],
	},
	{
		id: 2,
		startDate: "Aug 2025",
		endDate: "Feb 2026",
		company: "PT Jababeka Tbk",
		position: "AI Engineer Intern",
		type: "Internship",
		location: "Cikarang, Bekasi",
		description:
			"Developed an internal AI Agent chatbot using LangChain, FastAPI, and Ollama to automate employee support, knowledge-base retrieval, and ticket creation. Built duplicate data detection tool using Python and Streamlit for financial CSV/Excel data analysis. Provided technical support for financial workflows including PUM, invoicing, and bank transactions.",
		skills: ["FastAPI", "LangChain", "Ollama", "Python", "Streamlit", "Data Quality", "NLP", "Financial Workflows"],
	},
	{
		id: 3,
		startDate: "May 2025",
		endDate: "May 2025",
		company: "Model & Talent - Vun Diego Perfume",
		position: "Talent / Model",
		type: "Freelance",
		location: "Jakarta, Indonesia",
		description:
			"Modeled and appeared in video campaigns for Vun Diego perfume commercials. Worked with creative teams to produce promotional content.",
		skills: ["Professionalism", "Collaboration", "Content Creation", "Adaptability"],
	},
	{
		id: 4,
		startDate: "Nov 2024",
		endDate: "Nov 2024",
		company: "Polling Station (PTPS) Management",
		position: "Polling Station Supervisor",
		type: "Seasonal",
		location: "Cikarang, Bekasi",
		description:
			"Supervised and ensured transparency of voting process during regional elections 2024. Coordinated with officials to resolve irregularities and filed official reports to Bawaslu.",
		skills: ["Leadership", "Data Management", "Organization", "Communication"],
	},
	{
		id: 5,
		startDate: "Jun 2023",
		endDate: "Jul 2023",
		company: "Shopee Xpress",
		position: "Warehouse Sorter",
		type: "Contract",
		location: "Bekasi, Indonesia",
		description:
			"Handled package scanning, sorting, and labeling based on delivery zones. Ensured timely and accurate processing under pressure in fast-paced logistics operations.",
		skills: ["Attention to Detail", "Teamwork", "Time Management", "Logistics"],
	},
];

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3 text-white"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,
						type: "spring",
					}}>
					Professional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${
				isEven
					? "md:justify-center md:translate-x-68"
					: "md:justify-center md:-translate-x-68"
			} justify-center mb-4`}>
			<div className="bg-slate-900 border border-slate-800 text-white px-12 py-3 rounded-xl shadow-lg min-w-max">
				<div className="flex items-center justify-center gap-6">
					<div className="text-center">
						<div className="text-sm font-bold text-emerald-400">{experience.startDate}</div>
						<div className="text-[10px] text-slate-500 uppercase tracking-wider">Start</div>
					</div>
					<div className="w-px h-8 bg-slate-800"></div>
					<div className="text-center">
						<div className="text-sm font-bold text-emerald-400">{experience.endDate}</div>
						<div className="text-[10px] text-slate-500 uppercase tracking-wider">End</div>
					</div>
					<div className="w-px h-8 bg-slate-800"></div>
					<div className="text-center">
						<div className="text-sm font-medium text-slate-300">
							{experience.location}
						</div>
						<div className="text-[10px] text-slate-500 uppercase tracking-wider">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${
				isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
			} md:w-1/2`}>
			{/* Card */}
			<div
				className="bg-slate-900/40 backdrop-blur-md border border-slate-900 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-slate-900/60 hover:border-emerald-500/20 transition-all duration-300 ml-12 md:ml-0">
				{/* Company & Position */}
				<div className="mb-4">
					<h3 className="font-bold text-xl text-white mb-1">
						{experience.company}
					</h3>
					<h4 className="font-medium text-lg text-slate-300">
						{experience.position}
						<span className="text-sm font-normal text-slate-500 ml-2">
							• {experience.type}
						</span>
					</h4>
				</div>

				{/* Description */}
				<p className="text-slate-400 text-justify leading-relaxed mb-4 text-sm">
					{experience.description}
				</p>

				{/* Skills */}
				<div className="flex flex-wrap gap-2">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-semibold hover:scale-105 transition-all duration-300">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-10">
			<div className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<>
			<Title />
			<Wrapper>
				<div className="relative w-full max-w-6xl mx-auto">
					{/* Timeline line - hidden on mobile, visible on md+ */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-emerald-500 via-slate-800 to-transparent h-full"></div>
					{/* Mobile timeline line */}
					<div className="md:hidden absolute left-0 w-[2px] bg-gradient-to-b from-emerald-500 via-slate-800 to-transparent h-full"></div>

					{/* Experience cards */}
					<div className="space-y-12 md:space-y-16 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									{/* Timeline period card - flows naturally above content */}
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>

									{/* Timeline dot - positioned at the start of the experience card */}
									<div
										className="absolute w-5 h-5 bg-emerald-500 rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.6)] z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5"
									/>

									{/* Experience content card */}
									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>

					{/* Expand/Collapse button */}
					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-12 animate-fade-in"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3 }}>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-3 rounded-full font-bold
									transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center gap-2">
								{showAll ? (
									<>
										Show Less
										<svg
											className="w-4 h-4 transform rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={3}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								) : (
									<>
										View More Experience
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={3}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								)}
							</button>
						</motion.div>
					)}

					{/* Gradient fade effect at bottom when collapsed */}
					{!showAll && (
						<div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
					)}
				</div>
			</Wrapper>
		</>
	);
}

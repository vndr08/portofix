"use client";
import Hr from "@/components/Hr";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHandshake, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const organizations = [
	{
		id: 1,
		role: "PIC Sponsorship",
		organization: "President University Fashion Week (PUFW) 2024",
		period: "Sep - Dec 2024",
		description: "Led sponsorship strategy and secured 10+ brand partners. Negotiated benefit delivery and maintained professional external communication with stakeholders.",
		icon: faHandshake,
	},
	{
		id: 2,
		role: "PIC Sponsorship",
		organization: "Student Awarding Night (SAN) 2024",
		period: "Sep - Nov 2024",
		description: "Assisted in fundraising operations and sponsor branding campaigns for the annual university awards event.",
		icon: faHandshake,
	},
	{
		id: 3,
		role: "PIC Sponsorship",
		organization: "Mr. & Ms. President University 2024",
		period: "Jan - Mar 2024",
		description: "Secured 20+ corporate sponsors, coordinated with event vendors, and oversaw sponsor benefit delivery protocols.",
		icon: faUsers,
	},
	{
		id: 4,
		role: "Volunteer",
		organization: "AIESEC ImpactED 1.0",
		period: "Dec 2023 - Jan 2024",
		description: "Delivered hygiene awareness lessons to elementary students in Cikarang. Actively enhanced public speaking and group facilitation skills.",
		icon: faHandHoldingHeart,
	},
];

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3 text-white"
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, type: "spring" }}>
					Leadership & Volunteering
				</motion.h1>
			</div>
		</div>
	);
}

export default function Organizations() {
	return (
		<div className="w-full">
			<Title />
			<div className="mx-auto container px-6 py-10 max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{organizations.map((org, index) => (
						<motion.div
							key={org.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							className="bg-slate-900/40 backdrop-blur-md border border-slate-900 rounded-2xl p-6 shadow-lg hover:bg-slate-900/60 hover:border-emerald-500/20 transition-all duration-300">
							<div className="flex items-center gap-4 mb-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950/80 border border-emerald-900/30 text-emerald-400">
									<FontAwesomeIcon icon={org.icon} className="h-5 w-5" />
								</div>
								<div>
									<span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{org.period}</span>
									<h3 className="font-bold text-white text-lg mt-0.5">{org.organization}</h3>
								</div>
							</div>
							<p className="text-slate-300 font-semibold text-sm mb-2">{org.role}</p>
							<p className="text-slate-400 text-justify text-sm leading-relaxed">{org.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

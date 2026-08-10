"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
	{
		id: 1,
		name: "Sarah Chen",
		role: "Senior Software Engineer",
		company: "TechCorp Indonesia",
		content:
			"Ivan demonstrated exceptional problem-solving skills during our AI chatbot project. His ability to translate complex business requirements into functional code was impressive. Great collaborator!",
		rating: 5,
		avatar: "SC",
	},
	{
		id: 2,
		name: "Ahmad Wijaya",
		role: "IT Manager",
		company: "PT Jababeka Tbk",
		content:
			"As an intern, Ivan exceeded expectations by delivering a production-ready duplicate detection system ahead of schedule. His LangChain and FastAPI expertise added real value to our team.",
		rating: 5,
		avatar: "AW",
	},
	{
		id: 3,
		name: "Dr. Lisa Tan",
		role: "University Lecturer",
		company: "President University",
		content:
			"Ivan was one of the most dedicated students I've mentored. His final year project on AI-powered document processing showed great technical depth and practical application skills.",
		rating: 5,
		avatar: "LT",
	},
	{
		id: 4,
		name: "David Kurniawan",
		role: "Product Manager",
		company: "StartupXYZ",
		content:
			"Working with Ivan on a Power BI dashboard project was a great experience. He understood the business requirements quickly and delivered an intuitive analytics solution that our stakeholders love.",
		rating: 5,
		avatar: "DK",
	},
];

const fadeUp = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: "easeOut" },
};

function TestimonialCard({ testimonial, index }) {
	return (
		<motion.article
			{...fadeUp}
			transition={{ ...fadeUp.transition, delay: index * 0.1 }}
			whileHover={{ y: -8, transition: { duration: 0.2 } }}
			className="group relative overflow-hidden rounded-2xl border p-6 theme-card transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
			{/* Quote icon */}
			<div className="absolute right-4 top-4 opacity-10 theme-accent">
				<FontAwesomeIcon icon={faQuoteLeft} className="h-12 w-12" />
			</div>

			{/* Rating stars */}
			<div className="mb-4 flex gap-1">
				{Array.from({ length: testimonial.rating }).map((_, i) => (
					<FontAwesomeIcon
						key={i}
						icon={faStar}
						className="h-4 w-4 text-amber-400"
					/>
				))}
			</div>

			{/* Content */}
			<blockquote className="relative mb-6 text-sm leading-relaxed theme-muted">
				&quot;{testimonial.content}&quot;
			</blockquote>

			{/* Author */}
			<div className="flex items-center gap-4">
				<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm font-bold text-white">
					{testimonial.avatar}
				</div>
				<div>
					<p className="font-bold theme-text">{testimonial.name}</p>
					<p className="text-xs theme-muted">
						{testimonial.role} at {testimonial.company}
					</p>
				</div>
			</div>

			{/* Hover gradient effect */}
			<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
		</motion.article>
	);
}

export default function Testimonials() {
	return (
		<section id="testimonials" className="theme-section px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
			<div className="mx-auto max-w-7xl">
				<motion.div {...fadeUp} className="mb-10 max-w-3xl">
					<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
						Testimonials
					</p>
					<h2 className="text-3xl font-bold leading-tight md:text-5xl theme-text">
						What people say about working with Ivan.
					</h2>
					<p className="mt-4 text-base leading-7 md:text-lg theme-muted">
						Feedback from colleagues, mentors, and collaborators who have experienced Ivan&apos;s technical skills and work ethic.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.id}
							testimonial={testimonial}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner, faCheck, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import profile from "@/json/profile.json";

// You'll need to create a Formspree form and get your form ID
// Replace FORMSPREE_FORM_ID with your actual form ID from https://formspree.io
const FORMSPREE_FORM_ID = "xwpkgvkb";

export default function ContactForm() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [status, setStatus] = useState("idle"); // idle, loading, success, error
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};
		if (!formState.name.trim()) newErrors.name = "Name is required";
		if (!formState.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
			newErrors.email = "Please enter a valid email";
		}
		if (!formState.message.trim()) newErrors.message = "Message is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setStatus("loading");
		try {
			const response = await fetch("https://formspree.io/f/" + FORMSPREE_FORM_ID, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					name: formState.name,
					email: formState.email,
					subject: formState.subject || "No Subject",
					message: formState.message,
				}),
			});

			if (response.ok) {
				setStatus("success");
				setFormState({ name: "", email: "", subject: "", message: "" });
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	const inputClass = (fieldName) =>
		`w-full rounded-xl border bg-transparent px-4 py-3 text-sm font-medium transition-all duration-200 theme-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
			errors[fieldName]
				? "border-red-500/50 theme-card"
				: "theme-border theme-card"
		}`;

	return (
		<motion.form
			onSubmit={handleSubmit}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			className="space-y-5">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label htmlFor="name" className="mb-2 block text-sm font-semibold theme-text">
						Name <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formState.name}
						onChange={handleChange}
						placeholder="Your name"
						className={inputClass("name")}
						disabled={status === "loading"}
					/>
					{errors.name && (
						<p className="mt-1 text-xs text-red-500">{errors.name}</p>
					)}
				</div>
				<div>
					<label htmlFor="email" className="mb-2 block text-sm font-semibold theme-text">
						Email <span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formState.email}
						onChange={handleChange}
						placeholder="your@email.com"
						className={inputClass("email")}
						disabled={status === "loading"}
					/>
					{errors.email && (
						<p className="mt-1 text-xs text-red-500">{errors.email}</p>
					)}
				</div>
			</div>
			<div>
				<label htmlFor="subject" className="mb-2 block text-sm font-semibold theme-text">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formState.subject}
					onChange={handleChange}
					placeholder="What's this about?"
					className={inputClass("subject")}
					disabled={status === "loading"}
				/>
			</div>
			<div>
				<label htmlFor="message" className="mb-2 block text-sm font-semibold theme-text">
					Message <span className="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					value={formState.message}
					onChange={handleChange}
					placeholder="Tell me about your project or opportunity..."
					rows={5}
					className={`${inputClass("message")} resize-none`}
					disabled={status === "loading"}
				/>
				{errors.message && (
					<p className="mt-1 text-xs text-red-500">{errors.message}</p>
				)}
			</div>

			<AnimatePresence mode="wait">
				{status === "success" ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="flex items-center justify-center gap-3 rounded-xl bg-emerald-500/20 p-4 text-emerald-600 dark:text-emerald-400">
						<FontAwesomeIcon icon={faCheck} className="h-5 w-5" />
						<span className="font-semibold">Message sent successfully!</span>
					</motion.div>
				) : status === "error" ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="flex items-center justify-center gap-3 rounded-xl bg-red-500/20 p-4 text-red-600 dark:text-red-400">
						<FontAwesomeIcon icon={faExclamationCircle} className="h-5 w-5" />
						<span className="font-semibold">Something went wrong. Please try again.</span>
					</motion.div>
				) : (
					<motion.button
						type="submit"
						disabled={status === "loading"}
						whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
						whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
						className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-70">
						{status === "loading" ? (
							<>
								<FontAwesomeIcon icon={faSpinner} className="h-5 w-5 animate-spin" />
								Sending...
							</>
						) : (
							<>
								Send Message
								<FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
							</>
						)}
					</motion.button>
				)}
			</AnimatePresence>

			<p className="text-center text-xs theme-muted">
				Or email directly at{" "}
				<a
					href={`mailto:${profile.email}`}
					className="font-semibold text-emerald-500 hover:underline">
					{profile.email}
				</a>
			</p>
		</motion.form>
	);
}

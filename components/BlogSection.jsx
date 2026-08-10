"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import blogData from "@/json/blog.json";

const fadeUp = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: "easeOut" },
};

function BlogCard({ post, index, featured = false }) {
	return (
		<motion.article
			{...fadeUp}
			transition={{ ...fadeUp.transition, delay: index * 0.08 }}
			whileHover={{ y: -6 }}
			className="group">
			<Link href={`/blog/${post.slug}`} className="block h-full">
				<div className="overflow-hidden rounded-2xl border theme-card transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
					{/* Image placeholder */}
					<div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
						<div className="absolute inset-0 flex items-center justify-center">
							<FontAwesomeIcon
								icon={faTag}
								className="h-12 w-12 opacity-30 theme-text"
							/>
						</div>
						{post.featured && (
							<div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
								Featured
							</div>
						)}
					</div>

					<div className="p-5">
						{/* Meta */}
						<div className="mb-3 flex items-center gap-4 text-xs theme-muted">
							<span>{post.date}</span>
							<span className="flex items-center gap-1">
								<FontAwesomeIcon icon={faClock} className="h-3 w-3" />
								{post.readTime}
							</span>
						</div>

						{/* Title */}
						<h3 className={`font-bold leading-snug theme-text transition-colors duration-300 group-hover:text-emerald-500 ${featured ? "text-xl sm:text-2xl" : "text-lg"}`}>
							{post.title}
						</h3>

						{/* Excerpt */}
						<p className="mt-3 line-clamp-2 text-sm leading-relaxed theme-muted">
							{post.excerpt}
						</p>

						{/* Tags */}
						<div className="mt-4 flex flex-wrap gap-2">
							{post.tags.slice(0, 3).map((tag) => (
								<span
									key={tag}
									className="rounded-full px-3 py-1 text-xs font-medium theme-chip">
									{tag}
								</span>
							))}
						</div>

						{/* Read more */}
						<div className="mt-5 flex items-center gap-2 text-sm font-bold theme-accent transition-all duration-300 group-hover:gap-3">
							Read article
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

export default function BlogSection() {
	const posts = blogData.posts.slice(0, 3);
	const featuredPost = posts.find((p) => p.featured) || posts[0];
	const otherPosts = posts.filter((p) => p.slug !== featuredPost.slug);

	return (
		<section id="blog" className="theme-section px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:px-20">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
					<motion.div {...fadeUp} className="max-w-3xl">
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Blog
						</p>
						<h2 className="text-3xl font-bold leading-tight md:text-5xl theme-text">
							Technical insights and learnings.
						</h2>
						<p className="mt-4 text-base leading-7 md:text-lg theme-muted">
							Thoughts on AI, software engineering, and the lessons learned building production systems.
						</p>
					</motion.div>
					<motion.div {...fadeUp} className="mb-10">
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 theme-chip hover:text-emerald-500 theme-border">
							View all posts
							<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
						</Link>
					</motion.div>
				</div>

				{/* Blog grid */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{/* Featured post spans 2 columns on large screens */}
					<div className="lg:col-span-2">
						<BlogCard post={featuredPost} index={0} featured={true} />
					</div>
					{otherPosts.map((post, index) => (
						<BlogCard key={post.slug} post={post} index={index + 1} />
					))}
				</div>
			</div>
		</section>
	);
}

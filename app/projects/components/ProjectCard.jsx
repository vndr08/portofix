import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project, activeCategory }) {
	if (
		activeCategory !== "all" &&
		!project.category.includes(parseInt(activeCategory, 10))
	) {
		return null;
	}

	return (
		<Link href={`/projects/${project.slug}`} className="group block">
			<motion.article
				className="hover-in-shadow outer-shadow theme-card relative overflow-hidden rounded-[1.5rem] transition duration-300 hover:-translate-y-2"
				initial={{ opacity: 0, y: 28 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.45, ease: "easeOut" }}>
				<div className="relative aspect-[16/10] overflow-hidden">
					<Image
						src={project.thumbnail}
						alt={project.title}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						placeholder="blur"
						className="project-hover-image object-cover"
						blurDataURL={BlurImage.src}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
					<div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
						{project.year}
					</div>
					<div className="view-project-pill absolute bottom-4 left-4 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white">
						View case study
					</div>
				</div>
				<div className="p-4 sm:p-5">
					<p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
						{project.role || "Project"}
					</p>
					<h2 className="mt-2 text-lg font-bold leading-snug theme-text transition group-hover:text-emerald-500 sm:text-xl">
						{project.title}
					</h2>
					<p className="mt-3 line-clamp-2 text-sm leading-6 theme-muted">
						{project.summary || project.desc[0]}
					</p>
					<div className="mt-5 flex flex-wrap gap-2">
						{project.tech.slice(0, 5).map((tech) => (
							<span
								key={tech}
								className="rounded-full px-2.5 py-1 text-xs font-bold theme-chip">
								{tech}
							</span>
						))}
					</div>
					<div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-400">
						View details
						<FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
					</div>
				</div>
			</motion.article>
		</Link>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};

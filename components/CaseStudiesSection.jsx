import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import data from "@/json/data.json";

// Curate the homepage without maintaining a second set of project claims.
const selectedSlugs = ["vanguard", "whatsapp-issue-reporting", "kalbe-dashboard"];
const projects = selectedSlugs
	.map((slug) => data.Projects.find((project) => project.slug === slug && project.show))
	.filter(Boolean);

export default function CaseStudiesSection() {
	return (
		<section id="projects" aria-labelledby="projects-title" className="theme-band">
			<div className="home-container home-section">
				<div className="home-section-heading">
					<div><h2 id="projects-title">Selected projects.</h2><p className="theme-muted">Fleet operations, support automation, and engineering insights.</p></div>
					<Link href="/projects" className="home-text-link">All projects<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
				</div>
				<div className="selected-projects">
					{projects.map((project) => (
						<article key={project.slug} className="selected-project">
							<Link href={`/projects/${project.slug}`} className="project-link">
								<div className="selected-project-image"><Image src={project.thumbnail} alt={`${project.title} interface`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px" className="object-cover" /></div>
								<div className="selected-project-copy">
									<h3>{project.title}</h3>
									<p className="project-meta theme-muted">{project.role} · {project.year}</p>
									<p className="theme-soft project-summary">{project.summary}</p>
									<p className="project-stack theme-muted">{project.tech.slice(0, 4).join(" · ")}</p>
									<span className="home-text-link">Explore project<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></span>
								</div>
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

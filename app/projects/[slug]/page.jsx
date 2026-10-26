import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import SpatialProjectFrame from "@/components/SpatialProjectFrame";
import data from "@/json/data.json";
import profile from "@/json/profile.json";

const projects = data.Projects.filter((project) => project.show);
const getProject = (slug) => projects.find((project) => project.slug === slug);

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) return { title: "Project Not Found | Ivan Portfolio" };
	const title = `${project.title} | Ivan Portfolio`;
	const description = project.summary || project.desc[0];
	return {
		title,
		description,
		alternates: { canonical: `/projects/${project.slug}` },
		openGraph: { title, description, type: "article", url: `${profile.canonicalUrl}/projects/${project.slug}`, images: [{ url: project.thumbnail, alt: project.title }] },
		twitter: { card: "summary_large_image", title, description, images: [project.thumbnail] },
	};
}

export default async function Page({ params }) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) notFound();
	const projectIndex = projects.findIndex((item) => item.slug === slug);
	const nextProject = projects[(projectIndex + 1) % projects.length];
	const gallery = project.images.length ? project.images : [project.thumbnail];
	const isConcept = project.thumbnail.includes("concept-covers");

	return (
		<main className="spatial-page case-world" style={{ "--case-hue": project.category.includes(2) ? "168 255 234" : "255 145 77" }}>
			<SpatialPageBackground variant="case" />
			<section className="case-hero">
				<Link href="/projects" className="case-back">← Project atlas</Link>
				<div className="case-title-block">
					<p>{project.year} · {project.role || "Project builder"}</p>
					<h1>{project.title}</h1>
					<span>{project.summary || project.desc[0]}</span>
				</div>
				<div className="case-artifact">
					<SpatialProjectFrame src={project.thumbnail} alt={`${project.title} ${isConcept ? "concept cover" : "interface"}`} priority portrait={project.slug === "bersuara"} />
					<p>{isConcept ? "Conceptual cover · original interface not supplied" : "Original project capture"}</p>
				</div>
				<div className="case-hero-spec" aria-label="Project facts">
					<span><b>{String(projectIndex + 1).padStart(2, "0")}</b>Archive position</span>
					<span><b>{project.tech.length}</b>Technologies</span>
					<span><b>{project.category.includes(2) ? "AI" : "SW"}</b>Primary field</span>
				</div>
			</section>

			<section className="case-body">
				<aside className="case-rail">
					<h2>BUILD RECORD</h2>
					<div>{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
					<nav>
						{project.preview && <a href={project.preview} target="_blank" rel="noopener noreferrer">Open live project ↗</a>}
						{project.code && <a href={project.code} target="_blank" rel="noopener noreferrer">Inspect source ↗</a>}
						<a href={`mailto:${profile.email}?subject=${encodeURIComponent(`About ${project.title}`)}`}>Ask about this work ↗</a>
					</nav>
				</aside>
				<div className="case-narrative">
					<h2>FROM CONTEXT<br />TO SYSTEM.</h2>
					{project.desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
					{project.impact && <blockquote><span>What changed</span>{project.impact}</blockquote>}
					{project.highlights?.length > 0 && (
						<div className="case-evidence">
							<h3>ENGINEERING EVIDENCE</h3>
							{project.highlights.map((highlight, index) => <article key={highlight}><b>{String(index + 1).padStart(2, "0")}</b><p>{highlight}</p></article>)}
						</div>
					)}
				</div>
			</section>

			<section className="case-gallery" aria-labelledby="case-gallery-title">
				<header><h2 id="case-gallery-title">ARTIFACTS<br />IN DEPTH.</h2><p>Real screenshots are shown as supplied. Conceptual covers are labeled instead of posing as product UI.</p></header>
				<div className="case-gallery-stack">
					{gallery.map((image, index) => (
						<figure key={`${image}-${index}`} className={project.slug === "bersuara" ? "portrait-capture" : ""}>
							<div><Image src={image} alt={`${project.title} artifact ${index + 1}`} width={1920} height={1080} sizes="(max-width: 900px) 92vw, 78vw" /></div>
							<figcaption>{isConcept ? "Concept cover" : "Project capture"} · {String(index + 1).padStart(2, "0")}</figcaption>
						</figure>
					))}
				</div>
			</section>

			<Link href={`/projects/${nextProject.slug}`} className="case-next">
				<span>NEXT SYSTEM</span><h2>{nextProject.title}</h2><b>↗</b>
			</Link>
		</main>
	);
}

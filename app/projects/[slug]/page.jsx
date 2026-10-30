import Link from "next/link";
import { notFound } from "next/navigation";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import SpatialProjectFrame from "@/components/SpatialProjectFrame";
import CaseArtifactFigure from "@/components/CaseArtifactFigure";
import CaseNarrativeMotion from "@/components/CaseNarrativeMotion";
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
					<span><b>{String(projectIndex + 1).padStart(2, "0")} / {projects.length}</b>Project collection</span>
					<span className="case-role-fact"><b>{project.role || "Project builder"}</b>Role &amp; delivery scope</span>
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
				<CaseNarrativeMotion description={project.desc} impact={project.impact} highlights={project.highlights} />
			</section>

			<section className="case-gallery" aria-labelledby="case-gallery-title">
				<header><h2 id="case-gallery-title">ARTIFACTS<br />IN DEPTH.</h2><p>Real screenshots are shown as supplied. Conceptual covers are labeled instead of posing as product UI.</p></header>
				<div className="case-gallery-stack">
					{gallery.map((image, index) => (
						<CaseArtifactFigure key={`${image}-${index}`} image={image} title={project.title} index={index} concept={isConcept} portrait={project.slug === "bersuara"} />
					))}
				</div>
			</section>

			<Link href={`/projects/${nextProject.slug}`} className="case-next">
				<span>NEXT SYSTEM</span><h2>{nextProject.title}</h2><b>↗</b>
			</Link>
		</main>
	);
}

"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/json/data.json";

export default function ProjectConstellation() {
	const projects = data.Projects.filter((project) => project.show);
	return (
		<section className="project-constellation" aria-labelledby="constellation-title">
			<header><h2 id="constellation-title">ALL PROJECTS.<br />ONE PRACTICE.</h2><p>The three featured builds are only the entrance. Explore all {projects.length} projects across AI, enterprise software, dashboards, web, mobile, and creative technology.</p></header>
			<div className="constellation-viewport" aria-label="Scrollable project collection">
				<div className="constellation-track">
					{projects.map((project, index) => (
						<Link href={`/projects/${project.slug}`} key={project.slug} className="constellation-item" style={{ "--constellation-shift": `${(index % 4) * 12}px` }}>
							<div><Image src={project.thumbnail} alt="" fill sizes="(max-width: 700px) 68vw, 25vw" className="object-cover" /></div>
							<span>{String(index + 1).padStart(2, "0")}</span><h3>{project.title}</h3><p>{project.year}</p>
						</Link>
					))}
				</div>
			</div>
			<div className="constellation-footer"><span>Drag or scroll horizontally</span><Link className="constellation-all" href="/projects">Open the complete project collection ↗</Link></div>
		</section>
	);
}

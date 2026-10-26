"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/json/data.json";

export default function ProjectConstellation() {
	const projects = data.Projects.filter((project) => project.show);
	return (
		<section className="project-constellation" aria-labelledby="constellation-title">
			<header><h2 id="constellation-title">THE WORK<br />CONTINUES.</h2><p>Featured scenes are only the entrance. The full archive holds {projects.length} systems across AI, enterprise software, dashboards, web, mobile, and creative technology.</p></header>
			<div className="constellation-track">
				{projects.map((project, index) => (
					<Link href={`/projects/${project.slug}`} key={project.slug} className="constellation-item" style={{ "--constellation-shift": `${(index % 4) * 12}px` }}>
						<div><Image src={project.thumbnail} alt="" fill sizes="(max-width: 700px) 68vw, 25vw" className="object-cover" /></div>
						<span>{String(index + 1).padStart(2, "0")}</span><h3>{project.title}</h3><p>{project.year}</p>
					</Link>
				))}
			</div>
			<Link className="constellation-all" href="/projects">Enter all {projects.length} project worlds ↗</Link>
		</section>
	);
}

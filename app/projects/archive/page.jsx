"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import data from "@/json/data.json";

export default function Page() {
	const projects = data.Projects.filter((project) => project.show);
	const [active, setActive] = useState(projects[0]);

	return (
		<main className="spatial-page technical-index">
			<SpatialPageBackground variant="signal" />
			<header className="technical-index-head"><Link href="/projects">← Spatial atlas</Link><h1>TECHNICAL<br />INDEX.</h1><p>A recruiter-fast scan of every system, role, year, and technology.</p></header>
			<section className="technical-index-body">
				<div className="technical-preview" aria-live="polite">
					<div><Image src={active.thumbnail} alt="" fill sizes="42vw" className="object-cover" /></div>
					<span>{active.title}</span>
				</div>
				<div className="technical-rows">
					{projects.map((project, index) => (
						<Link key={project.slug} href={`/projects/${project.slug}`} onPointerEnter={() => setActive(project)} onFocus={() => setActive(project)}>
							<span>{String(index + 1).padStart(2, "0")}</span><time>{project.year}</time><h2>{project.title}</h2><p>{project.tech.slice(0, 4).join(" · ")}</p><b>↗</b>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}

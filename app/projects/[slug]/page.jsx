import Image from "next/image";
import { notFound } from "next/navigation";
import jsonData from "@/json/data.json";
import profile from "@/json/profile.json";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import FixedButton from "@/components/FixedButton";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faChevronLeft,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const projects = jsonData.Projects.filter((project) => project.show);

function getProject(slug) {
	return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		return {
			title: "Project Not Found | Ivan Portfolio",
		};
	}

	const title = `${project.title} | Ivan Portfolio`;
	const description = project.summary || project.desc[0];

	return {
		title,
		description,
		alternates: {
			canonical: `/projects/${project.slug}`,
		},
		openGraph: {
			title,
			description,
			type: "article",
			url: `${profile.canonicalUrl}/projects/${project.slug}`,
			images: [
				{
					url: project.thumbnail,
					alt: project.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [project.thumbnail],
		},
	};
}

export default async function Page({ params }) {
	const { slug } = await params;
	const data = getProject(slug);

	if (!data) {
		notFound();
	}

	const gallery = data.images.length > 0 ? data.images : [data.thumbnail];

	return (
		<main className="theme-page relative">
			<div className="hero-grid-bg pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-45" />

			<FixedButton href="/projects">
				<FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
			</FixedButton>

			<section className="theme-section px-4 pb-16 pt-24 sm:px-6 sm:pt-28 md:px-10 lg:px-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]">
					<div>
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Project Case Study
						</p>
						<h1 className="text-3xl font-bold leading-tight theme-text sm:text-4xl md:text-6xl">
							{data.title}
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-8 theme-muted md:text-lg">
							{data.summary || data.desc[0]}
						</p>

						<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
							<div className="theme-card rounded-2xl p-4">
								<p className="text-xs font-bold uppercase tracking-[0.18em] theme-muted">
									Year
								</p>
								<p className="mt-2 font-bold theme-text">{data.year}</p>
							</div>
							<div className="theme-card rounded-2xl p-4">
								<p className="text-xs font-bold uppercase tracking-[0.18em] theme-muted">
									Role
								</p>
								<p className="mt-2 font-bold theme-text">
									{data.role || "Project Builder"}
								</p>
							</div>
							<div className="theme-card rounded-2xl p-4">
								<p className="text-xs font-bold uppercase tracking-[0.18em] theme-muted">
									Focus
								</p>
								<p className="mt-2 font-bold theme-text">
									{data.category.includes(2) ? "AI / Data" : "Software"}
								</p>
							</div>
						</div>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							{data.preview && (
								<Button href={data.preview} target="_blank" rel="noopener noreferrer" variation="primary">
									Preview
									<FontAwesomeIcon
										icon={faArrowUpRightFromSquare}
										className="h-4 w-4"
									/>
								</Button>
							)}
							{data.code && (
								<Button href={data.code} target="_blank" rel="noopener noreferrer">
									GitHub
									<FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
								</Button>
							)}
							<Button href={`mailto:${profile.email}`}>
								Ask About This Project
								<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
							</Button>
						</div>
					</div>

					<div className="theme-card relative overflow-hidden rounded-[2rem] p-3">
						<div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
							<Image
								src={data.thumbnail}
								alt={data.title}
								fill
								priority
								sizes="(max-width: 1024px) 90vw, 46vw"
								placeholder="blur"
								blurDataURL={BlurImage.src}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="theme-section theme-band px-4 py-16 sm:px-6 md:px-10 lg:px-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1fr]">
					<div>
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Technical stack
						</p>
						<div className="flex flex-wrap gap-2">
							{data.tech.map((tech) => (
								<span
									key={tech}
									className="rounded-full px-3 py-1.5 text-sm font-bold theme-chip">
									{tech}
								</span>
							))}
						</div>
						{data.impact && (
							<div className="theme-card mt-8 rounded-[1.5rem] p-5">
								<p className="text-xs font-bold uppercase tracking-[0.18em] theme-accent">
									Impact
								</p>
								<p className="mt-3 text-sm leading-7 theme-muted">{data.impact}</p>
							</div>
						)}
					</div>

					<div>
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Overview
						</p>
						<div className="space-y-5">
							{data.desc.map((desc) => (
								<p key={desc} className="text-base leading-8 theme-muted">
									{desc}
								</p>
							))}
						</div>
						{data.highlights?.length > 0 && (
							<div className="mt-10">
								<h2 className="text-2xl font-bold theme-text">
									What this shows
								</h2>
								<ul className="mt-5 grid grid-cols-1 gap-3">
									{data.highlights.map((highlight) => (
										<li
											key={highlight}
											className="theme-card rounded-2xl p-4 text-sm leading-6 theme-soft">
											{highlight}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</section>

			<section className="theme-section px-4 py-16 sm:px-6 md:px-10 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div className="mb-8">
						<p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] theme-accent">
							Gallery
						</p>
						<h2 className="text-3xl font-bold leading-tight theme-text md:text-5xl">
							Project visuals
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-6">
						{gallery.map((image, index) => (
							<div
								key={`${image}-${index}`}
								className="theme-card overflow-hidden rounded-[1.5rem] p-3">
								<Image
									src={image}
									alt={`${data.title} screenshot ${index + 1}`}
									className="h-auto w-full rounded-[1rem]"
									width={1920}
									height={1080}
									blurDataURL={BlurImage.src}
									placeholder="blur"
									sizes="100vw"
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

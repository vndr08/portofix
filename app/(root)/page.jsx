import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import profile from "@/json/profile.json";
import resume from "@/json/resume.json";
import Me from "@/public/image/ivander.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function MyPage() {
	return (
		<div className="theme-page portfolio-home">
			<section id="home" aria-labelledby="intro-title" className="home-hero home-container">
				<div className="hero-copy">
					<p className="availability"><span aria-hidden="true" />Open to opportunities · Cikarang, Indonesia</p>
					<h1 id="intro-title">Hi, I&apos;m {profile.shortName}.</h1>
					<p className="hero-statement">I build <span className="theme-accent">AI automation</span> and enterprise software.</p>
					<p className="hero-description theme-muted">From internal support chatbots to operational dashboards, I turn business workflows into working tools.</p>
					<div className="hero-actions">
						<Button href="#projects" variation="primary">View Projects<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" /></Button>
						<Button href={profile.cvUrl} target="_blank" rel="noopener noreferrer">View Resume<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" aria-hidden="true" /></Button>
					</div>
					<div className="hero-links">
						<a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />LinkedIn</a>
						<a href={profile.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} aria-hidden="true" />GitHub</a>
						<a href={`mailto:${profile.email}`}><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />Email</a>
					</div>
				</div>
				<div className="hero-portrait">
					<Image src={Me} alt={profile.name} fill priority sizes="(max-width: 639px) 88px, (max-width: 1023px) 30vw, 380px" className="object-cover" />
				</div>
			</section>

			<CaseStudiesSection />

			<section id="experience" aria-labelledby="experience-title" className="home-container home-section">
				<div className="home-section-heading">
					<div><h2 id="experience-title">Experience in enterprise systems.</h2><p className="theme-muted">Software delivery and AI automation at PT Jababeka Tbk.</p></div>
					<Link href="/about" className="home-text-link">More about me<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
				</div>
				<div className="experience-list">
					{resume.experience.map((item) => (
						<article key={item.role} className="experience-entry">
							<div><p className="theme-muted text-sm">{item.period}</p><h3>{item.role}</h3><p className="theme-accent text-sm font-semibold">{item.company}</p></div>
							<div><p className="theme-soft">{item.summary}</p><ul className="experience-highlights">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
						</article>
					))}
				</div>
				<div id="about" className="education-note">
					<div><h3>{resume.education.school}</h3><p className="theme-muted">{resume.education.program} · {resume.education.period}</p></div>
					<p className="theme-soft">GPA {resume.education.gpa} · Jababeka Scholarship Awardee</p>
				</div>
			</section>

			<section id="skills" aria-labelledby="skills-title" className="theme-band">
				<div className="home-container home-section">
					<div className="home-section-heading"><div><h2 id="skills-title">The tools behind the work.</h2><p className="theme-muted">AI, web development, databases, and collaboration.</p></div></div>
					<div className="home-skills">{resume.skills.map((group) => <div key={group.group}><h3>{group.group}</h3><p className="theme-muted">{group.items.join(" · ")}</p></div>)}</div>
				</div>
			</section>

			<section id="contact" aria-labelledby="contact-title" className="home-container home-section home-contact">
				<div><h2 id="contact-title">Let&apos;s build something useful.</h2><p className="theme-muted mt-5 leading-7">{profile.availability}</p><a className="home-contact-email home-text-link" href={`mailto:${profile.email}`}>{profile.email}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a><p className="theme-muted mt-4 text-sm">{profile.location}</p><a href={profile.phoneHref} className="home-text-link mt-3">{profile.phone}</a></div>
				<div><h3 className="mb-5">Send a message</h3><ContactForm /></div>
			</section>
		</div>
	);
}

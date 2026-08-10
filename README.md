# Ivander Portfolio

Recruiter-focused portfolio for Ivander Johana Pratama, built with Next.js,
Tailwind CSS, and Framer Motion. The site highlights AI automation, software
engineering, full-stack projects, experience, and a direct CV/contact flow.

## Features

### Core Features
- Hybrid-scroll homepage with a full-screen hero and readable recruiter sections.
- Project catalog, compact archive, and static project case-study pages.
- Shared profile data in `json/profile.json`.
- Recruiter resume highlights in `json/resume.json`.
- Project data in `json/data.json` with optional featured, summary, role, impact,
  and highlights fields.
- CV linked from `public/docs/CV_IVANDERJP_ATS.pdf`; generate it with `pnpm generate-resume`.

### SEO & Performance
- SEO metadata with comprehensive Open Graph and Twitter Card support.
- JSON-LD structured data (Person, WebSite, ProfessionalService, Breadcrumb).
- Enhanced Open Graph image with dynamic content.
- Gzipped sitemap with image metadata.
- Improved robots.txt with crawl directives.
- Scroll progress indicator.
- Back-to-top button.
- Loading skeleton components.
- Optimized image handling with blur placeholders.

### Accessibility
- Skip-to-content link for keyboard users.
- ARIA labels and roles throughout.
- Focus-visible states on all interactive elements.
- Keyboard navigation support.
- Screen reader friendly.

### Visual & UX
- Dark/Light theme with system preference detection.
- Scroll progress indicator.
- Smooth animations with Framer Motion.
- Enhanced hover states on project cards.
- Featured badge on highlighted projects.
- Responsive design for all screen sizes.

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- Framer Motion 12
- Font Awesome icons
- Vercel Analytics

## Getting Started

Install dependencies:

```shell
pnpm install
```

Run the development server:

```shell
pnpm dev
```

Open `http://localhost:9000`.

Build for production:

```shell
pnpm build
```

Generate the sitemap:

```shell
pnpm generate-sitemap
```

## Content Notes

- Update public profile/contact links in `json/profile.json`.
- Keep the canonical public URL aligned with `json/profile.json`.
- Update recruiter highlights in `json/resume.json`.
- Update projects in `json/data.json`.
- Keep `public/docs/CV_IVANDERJP.pdf` as the original source CV file unless intentionally replacing the CV.
- Regenerate the polished ATS resume with `pnpm generate-resume` after profile, resume, or project data changes.

## Project Structure

```
ivan-porto/
├── app/                    # Next.js App Router pages
│   ├── (root)/            # Homepage
│   ├── about/             # About page
│   ├── projects/          # Projects pages
│   │   ├── [slug]/        # Dynamic project detail pages
│   │   ├── archive/       # Compact project archive
│   │   └── components/    # Project-specific components
│   ├── layout.jsx         # Root layout with metadata
│   └── opengraph-image.jsx # Dynamic OG image generation
├── components/
│   ├── structured-data/   # JSON-LD components
│   ├── Button.jsx         # Reusable button
│   ├── Navbar.jsx         # Navigation with scroll detection
│   ├── ScrollProgress.jsx # Page scroll progress
│   ├── BackToTop.jsx      # Back to top button
│   ├── Skeleton.jsx       # Loading skeletons
│   ├── Footer.jsx         # Site footer
│   └── ...
├── json/                   # Content data
│   ├── profile.json       # Personal profile
│   ├── resume.json        # Resume & experience
│   └── data.json          # Projects data
├── lib/                    # Utility functions
│   └── image-utils.js     # Image optimization utilities
└── public/                 # Static assets
    ├── image/             # Images and placeholders
    └── docs/              # Documents (CV)
```

## License

MIT License. See [LICENSE](LICENSE).

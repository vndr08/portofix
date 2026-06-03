# Ivander Portfolio

Recruiter-focused portfolio for Ivander Johana Pratama, built with Next.js,
Tailwind CSS, and Framer Motion. The site highlights AI automation, software
engineering, full-stack projects, experience, and a direct CV/contact flow.

## Features

- Hybrid-scroll homepage with a full-screen hero and readable recruiter sections.
- Project catalog, compact archive, and static project case-study pages.
- Shared profile data in `json/profile.json`.
- Recruiter resume highlights in `json/resume.json`.
- Project data in `json/data.json` with optional featured, summary, role, impact,
  and highlights fields.
- SEO metadata, generated Open Graph image route, robots file, and gzipped sitemap.
- CV linked from `public/docs/cv.pdf`; the PDF is not generated or modified by the app.

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
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
- Keep `public/docs/cv.pdf` as the source CV file unless intentionally replacing the CV.

## License

MIT License. See [LICENSE](LICENSE).

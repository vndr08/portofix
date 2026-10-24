# Immersive Portfolio Redesign — Execution Plan

## North Star

Membuat portfolio yang dalam lima detik menjawab siapa Ivan, bidang utamanya, dan proyek terbaiknya, sambil membuat pengalaman website itu sendiri menjadi bukti kemampuan creative engineering tingkat senior.

Website akan mengambil prinsip Active Theory—spatial composition, cinematic motion, strong art direction, dan artifact-first storytelling—tanpa menyalin identitas, aset, atau pola navigasinya. Kejelasan recruiter tetap menjadi batas utama.

## Definition of Success

Redesign dianggap berhasil ketika:

1. Recruiter memahami posisi Ivan dan menemukan proyek unggulan tanpa perlu menebak gestur.
2. Pengalaman pertama memiliki satu signature moment yang mudah diingat satu jam kemudian.
3. Setiap proyek menunjukkan masalah, kontribusi Ivan, keputusan teknis, dan hasil yang dapat dipertanggungjawabkan.
4. Website tetap dapat digunakan dengan keyboard, browser zoom, reduced motion, perangkat mobile, dan tanpa WebGL.
5. Tidak ada broken route, missing image, layout overflow, hydration error, console error aplikasi, atau dead interaction.
6. Motion tidak menghalangi resume, kontak, project detail, atau browser navigation.
7. Production build, semantic audit, responsive review, dan performance budget seluruhnya lolos.

## Non-Negotiable Product Rules

- Target utama: recruiter dan hiring manager untuk peran AI Engineer, Software Engineer, dan Full Stack Engineer.
- Project truth hanya berasal dari `json/data.json`, `json/resume.json`, CV, screenshot, GitHub, dan informasi yang dikonfirmasi Ivan.
- Tidak membuat metrik, testimoni, client outcome, atau klaim production yang tidak memiliki bukti.
- Resume, email, LinkedIn, GitHub, dan navigasi proyek selalu tersedia melalui HTML biasa.
- Visual experience memperkuat bukti teknis; tidak boleh menjadi dekorasi yang terpisah dari isi.
- Active Theory digunakan sebagai interaction reference, bukan template atau clone.

## Protected Baseline and Git Strategy

- Stable commit: `0ad7fe1` (`feat: sharpen recruiter portfolio experience`).
- Local rollback tag: `portfolio-baseline-2026-10-24`.
- Redesign branch: `feat/immersive-portfolio-redesign`.
- Implementasi tidak dimulai sebelum stable commit berhasil dipush ke `origin/master`.
- Redesign hanya masuk `master` setelah review visual, technical gates, dan persetujuan Ivan.
- Jika konsep tidak memenuhi standar, branch dapat dibuang dan baseline tetap utuh.

Rollback lokal:

```bash
git switch master
git reset --hard portfolio-baseline-2026-10-24
```

Perintah reset hanya digunakan setelah memastikan tidak ada pekerjaan baru yang belum diamankan.

## Target Experience

### First viewport

- Nama dan positioning terbaca segera.
- Satu objek atau scene interaktif merepresentasikan tiga kemampuan utama: AI automation, enterprise software, dan full-stack product delivery.
- CTA `Explore Work` dan `Resume` terlihat tanpa menunggu animasi.
- Visual tetap bermakna saat motion dinonaktifkan.
- Satu signature interaction memberi rasa ruang atau kedalaman, tetapi tidak mengambil alih pointer atau scroll browser secara membingungkan.

### Work exploration

- Tiga proyek utama menjadi jalur utama: VANGUARD, WhatsApp Issue Reporting, dan Kalbe Engineering Dashboard.
- Setiap proyek memiliki visual identity sendiri dalam satu sistem global.
- Project title, role, year, stack ringkas, dan one-line value selalu terlihat.
- Spatial transition dapat memperkaya perpindahan, tetapi URL dan browser history selalu sinkron.
- Semua project tetap tersedia melalui index HTML yang jelas.

### Project detail

- Above the fold menampilkan title, role, year, contribution, dan visual utama.
- Narasi mengikuti urutan: context → problem → responsibility → system/technical decisions → evidence → outcome → lessons.
- Diagram arsitektur atau annotated screenshot digunakan jika source code/client data tidak dapat dipublikasikan.
- Next project dan contact handoff tersedia di akhir.

### Recruiter conversion

- Resume maksimal satu aksi dari semua route.
- Email, LinkedIn, dan GitHub mudah ditemukan.
- Experience dan education dapat dipindai cepat tanpa membuka overlay tersembunyi.
- Contact form memiliki validation, loading, success, error, dan direct-email fallback.

## Technical Architecture

### Existing foundation

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Static project data and image assets

### Proposed immersive layer

- `three`, `@react-three/fiber`, dan `@react-three/drei` hanya jika concept direction benar-benar membutuhkan WebGL.
- Canvas dimuat secara dinamis setelah critical HTML content tersedia.
- WebGL menjadi enhancement, bukan sumber konten atau navigasi utama.
- Device capability policy memilih full, reduced, atau static experience.
- Scene lifecycle harus melepas renderer, textures, listeners, RAF loops, dan observers saat route berubah.
- Route transitions tetap memakai Next.js navigation dan URL nyata.

### Progressive enhancement levels

1. **Static:** semantic HTML, project imagery, no custom animation.
2. **Reduced motion:** opacity/crossfade pendek, tanpa continuous parallax atau autoplay scene.
3. **Standard:** Framer Motion transitions dan lightweight depth effects.
4. **Enhanced:** bounded WebGL scene pada perangkat yang memenuhi capability check.

## Performance Budgets

- LCP desktop dan mobile target ≤2.5 detik pada production profile.
- CLS target ≤0.1.
- INP target ≤200 ms.
- Initial JavaScript route homepage dijaga sekecil mungkin; 3D bundle tidak berada pada blocking path.
- WebGL texture memakai ukuran dan format sesuai viewport; gunakan WebP/AVIF/KTX2 bila masuk akal.
- Tidak ada video autoplay bersuara.
- Hero fallback tersedia sebelum scene siap.
- DPR canvas dibatasi pada perangkat high-density.
- Animation loop berhenti saat tab hidden, scene di luar viewport, atau reduced motion aktif.
- Seluruh image memiliki ukuran intrinsik dan responsive source.

## Accessibility Gates

- Satu `h1`, heading hierarchy logis, dan landmark lengkap.
- Skip link, visible focus, dan urutan tab sama dengan urutan visual.
- Canvas memiliki accessible name dan fallback description bila digunakan.
- Seluruh fungsi canvas memiliki alternatif DOM yang setara.
- Browser zoom tidak dibatasi.
- Touch targets minimal 44×44 CSS pixels.
- Body text memenuhi WCAG AA 4.5:1; large text minimal 3:1.
- Motion mengikuti `prefers-reduced-motion` dan menyediakan toggle bila scene intens.
- Tidak ada informasi penting yang hanya muncul pada hover, warna, audio, atau pointer movement.
- Form field memiliki label, autocomplete, error association, dan live status.

## Execution Phases

### Phase 0 — Secure and inventory

Deliverables:

- Push stable commit and rollback tag.
- Verify branch protection strategy.
- Inventory all routes, project data, assets, external links, CV, metadata, and current functional states.
- Identify missing proof, duplicated copy, confidential content, and unsupported claims.

Exit gate:

- Remote baseline confirmed.
- Working tree clean.
- Asset and route inventory complete.

### Phase 1 — Direction and composition

Process:

- Use comp-first exploration.
- Run Impeccable direction concept seed before writing redesign UI code.
- Develop materially different directions, not three color variations.
- Each direction must show the full first viewport, recruiter orientation, signature interaction, and project entry.
- Evaluate candidates on audience identification and product clarity.
- Lock one direction and write a direction contract.

Artifacts:

- Approved desktop first-viewport comp.
- Mobile adaptation concept.
- Motion storyboard.
- Surface brief for homepage.
- Direction contract defining visual system, first viewport, signature interaction, and forbidden drift.

Exit gate:

- Ivan approves one concept.
- Comp clearly shows name, positioning, project entry, and resume path.

### Phase 2 — Design system foundation

- Establish color tokens, typography, spacing, elevation, depth, motion timing, z-index, and layout grid.
- Source and self-host intentional typefaces with appropriate licenses.
- Build semantic primitives for text links, buttons, project metadata, media frames, section transitions, and focus states.
- Document responsive behavior and theme strategy.
- Generate `DESIGN.md` and `.impeccable/design.json` after final system approval.

Exit gate:

- Tokens work across light/dark or the approved single theme.
- Contrast and focus pass before page assembly.

### Phase 3 — Homepage vertical slice

- Build semantic HTML version first.
- Implement first viewport and signature interaction.
- Add progressive WebGL layer only after the static thesis works.
- Build selected-work transition and one complete project preview.
- Add experience, capability proof, resume, and contact handoff.
- Implement loading, static, reduced-motion, unsupported-WebGL, and error states.

Exit gate:

- First viewport matches approved comp at 1440 px.
- Mobile 390 px preserves hierarchy and CTA visibility.
- Content remains complete with JavaScript motion disabled.

### Phase 4 — Work index and project detail system

- Build a recruiter-readable index with optional spatial enhancement.
- Create reusable project-detail narrative components.
- Complete the three flagship projects first.
- Add annotated screenshots, architecture diagrams, contribution boundaries, and verified links.
- Normalize remaining project records and hide weak entries until adequately documented rather than presenting filler.

Exit gate:

- Three flagship cases meet the full narrative standard.
- All visible projects have valid images, routes, and truthful content.

### Phase 5 — Motion and interaction orchestration

- Define one authored page-load sequence.
- Define route transition behavior and interruption rules.
- Add hover, focus, pointer, scroll, and touch behavior only where each improves understanding.
- Ensure every animation is interruptible and has reduced-motion behavior.
- Verify scroll restoration, deep links, browser Back/Forward, and URL synchronization.

Exit gate:

- No content waits unnecessarily for animation.
- Navigation remains predictable under rapid input.

### Phase 6 — Content, trust, and conversion pass

- Tighten headline, project summaries, experience, skill framing, and CTAs.
- Verify every date, role, client name, link, metric, and technology.
- Make contribution boundaries explicit for team or company work.
- Confirm privacy-safe screenshots and remove confidential identifiers.
- Validate resume parity with portfolio facts.

Exit gate:

- No unsupported claims or mismatched dates.
- Recruiter can explain Ivan's strongest value proposition after a short scan.

### Phase 7 — Hardening and quality assurance

Functional matrix:

- Homepage, projects, every project slug, archive, about, resume, contact, offline, 404, feed, metadata, redirects.
- Navigation by mouse, keyboard, touch, deep link, refresh, Back, and Forward.
- Contact form idle, invalid, loading, success, server rejection, offline, and retry.
- Empty/missing images and malformed content handled safely.

Viewport matrix:

- 390×844 mobile.
- 768×1024 tablet.
- 1024×768 small laptop.
- 1440×900 desktop.
- 1920×1080 wide desktop.
- 200% browser zoom.

Environment matrix:

- Chromium desktop and mobile emulation.
- Firefox.
- WebKit/Safari-equivalent where available.
- Light/dark if both remain supported.
- Reduced motion.
- Keyboard only.
- Slow network and CPU throttling.
- WebGL disabled or unsupported.

Automated and mechanical checks:

- Production build.
- ESLint/type validation.
- Broken route and asset scan.
- Console and page-error capture.
- Impeccable detector once after UI completion.
- Accessibility audit.
- Bundle inspection and Lighthouse/Web Vitals profile.

Exit gate:

- No P0/P1 issue.
- No application console error.
- No missing asset or 404 from visible navigation.
- Performance budgets met or explicitly approved with measured tradeoff.

### Phase 8 — Independent finish review

- Capture valid desktop and mobile review screenshots.
- Compare the desktop first viewport against the approved comp.
- Run an isolated Impeccable finish reviewer with the original request, direction contract, screenshots, detector findings, and quality bar.
- Apply one batched correction round, recapture, and request a final verdict.
- Document the final system only after the reviewer returns `ship`.

Exit gate:

- Reviewer disposition: `ship`.
- Ivan accepts the experience against the baseline version.

### Phase 9 — Release and rollback readiness

- Commit by coherent phase rather than one unreviewable commit.
- Push feature branch and open a draft PR with screenshots, performance results, accessibility results, and known tradeoffs.
- Deploy preview environment before touching production.
- Compare baseline and redesign side-by-side.
- Merge only after approval.
- Preserve the baseline tag after release.

## Suggested Commit Sequence

1. `docs: define immersive portfolio direction`
2. `chore: add immersive rendering dependencies`
3. `feat: establish portfolio visual system`
4. `feat: build cinematic recruiter-first homepage`
5. `feat: add progressive spatial project gallery`
6. `feat: redesign flagship project stories`
7. `feat: add reduced-motion and static fallbacks`
8. `fix: harden navigation accessibility and edge states`
9. `perf: optimize immersive assets and runtime`
10. `docs: record final design system and validation`

## Risk Register

| Risk | Prevention |
|---|---|
| Visual effect eclipses professional value | Recruiter message and project evidence remain visible in first viewport |
| WebGL harms mobile performance | Capability tiers, lazy loading, DPR cap, static fallback |
| Motion causes discomfort | Reduced-motion path, pause behavior, no forced continuous movement |
| Browser history becomes inconsistent | Route state always driven by Next.js URLs |
| Project claims become inflated | Content truth audit against data, CV, and available proof |
| Confidential company material leaks | Screenshot redaction and explicit content review |
| Design looks like an Active Theory clone | Original metaphor derived from Ivan's projects and engineering identity |
| Scope grows uncontrollably | Three flagship projects first; phase exit gates before expansion |
| New version is worse than baseline | Separate branch, preview deployment, baseline tag, side-by-side acceptance |

## Final Acceptance Checklist

- [ ] Recruiter understands Ivan's role and value within five seconds.
- [ ] Signature interaction is memorable and belongs to Ivan's work.
- [ ] Resume and contact require no hidden gesture.
- [ ] Three flagship projects contain strong evidence and contribution detail.
- [ ] URLs, Back/Forward, refresh, and deep links remain correct.
- [ ] Keyboard, focus, zoom, contrast, alt text, labels, and reduced motion pass.
- [ ] Mobile and fallback versions feel intentionally designed.
- [ ] No broken links, missing assets, overflow, console errors, or hydration errors.
- [ ] Performance budgets are measured on production output.
- [ ] Desktop implementation matches the approved comp.
- [ ] Independent reviewer returns `ship`.
- [ ] Preview is approved before merge.
- [ ] Rollback path is verified.

---
name: "Spatial Portfolio World"
description: "An identity-first portfolio where every route becomes a distinct spatial instrument for inspecting engineering work."
colors:
  corridor-black: "#05070b"
  section-black: "#0a0e14"
  depth-black: "#060a0f"
  experience-ink: "#080b10"
  paper-white: "#f1f5f2"
  warm-paper: "#f1ede9"
  optic-mint: "#a8ffea"
  prism-violet: "#c8a7ff"
  signal-orange: "#ff914d"
typography:
  display:
    fontFamily: "Bahianita, sans-serif"
    fontSize: "clamp(4.5rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "0.015em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.3125rem, 2vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  square: "0"
  signal: "50%"
spacing:
  micro: "8px"
  xs: "14px"
  sm: "20px"
  md: "28px"
  lg: "34px"
  section-inline: "7vw"
components:
  action-primary:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.corridor-black}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 20px"
    height: "50px"
  action-text:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 0 7px"
  system-tag:
    backgroundColor: "transparent"
    textColor: "{colors.optic-mint}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "7px 10px"
  project-copy-panel:
    backgroundColor: "{colors.corridor-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.square}"
    padding: "30px 42px"
---

# Design System: Spatial Portfolio World

## Overview

**Creative North Star: "The Spatial Portfolio World"**

The portfolio opens on Ivan’s identity inside a live GPU-rendered system. A fixed transparent WebGL canvas places a rotating wireframe topology core and 120 orbiting data packets inside a long tunnel of receding frames and sparse signal particles. The first viewport contains no project imagery: the name, role, thesis, work route, and résumé route lead while the generative system establishes technical authorship.

The story is deliberately scoped around one promise: **Ivan turns operational friction into production-ready AI and software systems.** After the hero, a warm-paper operating model makes that promise concrete through Understand → Architect → Build → Operationalize. Scroll then becomes camera travel through three proof systems while the semantic DOM supplies the project name, role, explanation, stack, and case-study link. The complete project collection, career progression, and contact follow as supporting evidence rather than competing introductions.

The corridor is progressive enhancement, not a dependency. The CSS/DOM Spatial Systems Chamber is always present: the cube-and-orbit hero and pointer-responsive depth-stacked project images remain visible whether or not WebGL succeeds. WebGL adds atmosphere, scale, and spatial signals behind that authoritative layer; it never gates project evidence.

The corridor is only the entrance. The project index becomes a **System Atlas** exposing all fourteen projects; individual projects become **Evidence Rooms** with real interface artifacts and build decisions; About becomes a **Career Constellation**; Archive becomes a compact **Technical Index**; loading, offline, and not-found states become coherent signal states. Shared route geometry, atmospheric particles, pointer-responsive project frames, and restrained spectral accents make these pages feel like chambers of the same world rather than leftover templates.

Ten projects use screenshots supplied in the repository. Four projects without original interface captures use bespoke conceptual covers and are explicitly marked **Concept Cover** wherever they appear. Concept art may establish subject and mood, but must never masquerade as shipped interface evidence.

**Key Characteristics:**

- Identity-first, project-free hero built around a live topology core and moving data packets.
- Fixed Three.js canvas with scroll-smoothed camera travel through sixteen wireframe tunnel frames.
- Three real DOM project films move through perspective while WebGL supplies spectral wireframe fields behind them.
- Semantic DOM copy remains above the canvas and owns navigation, reading order, alt text, and actions.
- Mint, violet, and orange identify systems against a near-black fogged corridor.
- One warm-paper operating model and one warm-paper career section reset the dark spatial journey.
- Six clear homepage chapters: Identity → Operating Model → Three Proofs → Complete Collection → Career Progression → Contact.
- CSS 3D hero and DOM project films remain the visible, interactive evidence layer in every rendering mode.
- Every major route has a specific visual job instead of reusing a generic card page.
- Fourteen projects remain discoverable, while real screenshots are prioritized as evidence.
- Generated concept imagery is visibly labeled and separated from implementation proof.

## Colors

The corridor is almost black so its emitted system colors, project films, and wireframe fields can carry depth; warm paper is reserved for decisive editorial interludes.

### Primary

- **Optic Mint:** The primary signal for the topology core, data packets, particles, focus states, progress, navigation underlines, and the first project plane.

### Secondary

- **Prism Violet:** The alternate tunnel frame hue, the second project plane, and one fallback orbit.

### Tertiary

- **Signal Orange:** The third project plane, a fallback satellite, and the contact core.

### Neutral

- **Corridor Black:** Scene fog, page ground, DOM copy backing, and the visual void around project films.
- **Section Black:** A barely lifted dark field for collection and supporting evidence sections.
- **Depth Black:** Backing and fallback depth planes.
- **Experience Ink:** Text and rules on warm-paper sections.
- **Paper White:** Primary text on dark surfaces, reduced with alpha for explanations and structure.
- **Warm Paper:** Display type, the filled hero action, operating-model ground, and career ground.

### Named Rules

**The Emitted-Signal Rule.** Mint, violet, and orange belong to light, linework, indices, particles, tags, and per-project identity; never spread them across large opaque backgrounds.

**The Interlude Rule.** Warm paper may fill a section only when the camera journey needs a deliberate editorial reset.

## Typography

**Display Font:** Bahianita (with sans-serif fallback)

**Body Font:** Manrope (with sans-serif fallback)
**Label Font:** Manrope (with sans-serif fallback)

**Character:** Bahianita gives identity and project names a tall, unmistakable silhouette that holds against the moving corridor. Manrope keeps facts, controls, and technical evidence calm and readable above both WebGL and static fallback scenes.

### Hierarchy

- **Display** (400, typically 72–96px, 0.75–0.82 line-height): Identity, operating-model statements, project names, section declarations, and contact language.
- **Headline** (500, typically 21–32px, 1.1–1.15 line-height): Capability and experience titles.
- **Body** (400, typically 12–17px, 1.65–1.75 line-height): Thesis, project context, practice explanation, and experience evidence.
- **Label** (500–600, typically 8–11px, 0.04–0.22em letter-spacing): Roles, coordinates, navigation, tags, dates, case indices, and controls.

### Named Rules

**The Identity-Scale Rule.** Ivan’s full name is the first display statement; WebGL motion supports it and never replaces it.

**The Two-Voice Rule.** Bahianita owns names and declarations. Manrope owns explanations, evidence, controls, and operational detail.

## Layout

The WebGL canvas is fixed to the viewport at z-index 0 and never receives pointer events. Every direct child of the immersive page other than the canvas sits above it at z-index 2. The readiness class is added only after the first successful rendered frame; it reveals the atmospheric canvas, makes hero and work backgrounds transparent, and fades out the CSS cube so it cannot duplicate the live topology. DOM project films are never hidden. Text, actions, and real interface evidence remain visible DOM content throughout.

The first viewport holds a full-depth tunnel with Ivan’s copy near 6.3vw on the left, one shared navigation rail, and coordinates on the far right. The operating model is an asymmetric light section containing a scroll-responsive four-plane object and a four-stage delivery path. Work begins with a 74svh proof statement, followed by three scenes of at least 112svh. In WebGL mode, odd-scene copy occupies the left in an 88%-opaque black backing with a rightward shadow; the middle scene moves copy to the right with the shadow reversed. Suspended project planes alternate right, left, right in world space.

After the work section, the fixed canvas fades to zero and rendering is skipped. A native horizontal collection exposes all projects without autonomous movement, the career section uses a warm-paper two-column progression, and contact returns to a centered dark orbital composition.

The renderer is disabled below 821px. The broader CSS layout switches at 900px: navigation becomes a full-screen menu with the same destinations, the static cube moves behind the lower-right hero, headings stack, the operating path becomes vertical, project scenes become single-column with the DOM image first, and contact actions stack. Between 821px and 900px, the compact DOM layout can coexist with WebGL on capable devices.

**The Camera-Path Rule.** Primary projects occupy distinct world coordinates and scroll anchors; never collapse the desktop corridor into a conventional card grid.

**The DOM-Authority Rule.** WebGL supplies atmosphere and project imagery, while the DOM remains the source of truth for text, links, image alternatives, focus order, and fallback presentation.

## Elevation & Depth

Desktop depth is a real camera system. A 46-degree perspective camera begins at z=11 and smooths toward z positions -16.5, -35.5, and -54.5 at the measured center of each project scene. Sixteen rectangular wireframe frames begin at z=3 and recede in 4.2-unit steps. Exponential fog at density 0.036 absorbs the corridor, while 280 sparse points preserve scale.

The atmospheric project fields sit at z=-23, -42, and -61 with alternating x offsets of 2.4, -2.2, and 2.2. Each is an untextured dark field with three low-opacity wireframe echoes and one brighter spectral edge. The actual screenshot exists only once, in the DOM film above it. Only WebGL groups within 25 world units of the camera remain visible.

### Shadow Vocabulary

- **WebGL copy isolation** (`46px 0 72px #05070b`, reversed for the middle scene): Keeps DOM text legible over a passing project plane.
- **Fallback core depth** (`18px 28px 60px rgba(0, 0, 0, 0.28), inset 0 0 54px rgba(168, 255, 234, 0.09)`): Gives the static CSS cube form without pretending it is the desktop renderer.
- **Fallback project projection** (`0 36px 80px rgba(0, 0, 0, 0.48)`): Lifts the DOM project image above its CSS echo planes.
- **Status signal** (`0 0 15px rgba(168, 255, 234, 0.55)`): Availability point only.
- **Progress beam** (`0 0 16px rgba(168, 255, 234, 0.5)`): Narrow light around the two-pixel progress line.

### Named Rules

**The Real-Depth Rule.** Desktop depth comes from camera position, world coordinates, fog, occlusion, and project planes—not from a stack of shadowed DOM cards.

**The One-Artifact Rule.** Each stop elevates one real DOM project film; WebGL echoes and frames support it without duplicating the screenshot.

## Shapes

The dominant form is a long rectangular tunnel made from sixteen subtly rotated wireframe frames. Project artifacts are large rectangular films with square spectral edges. The topology core is a detailed wireframe icosahedron surrounded by small instanced rectangular packets; particles remain point-like. Ordinary DOM controls, tags, copy backings, images, timelines, and dividers stay square. Circles and ellipses are reserved for status, atmospheres, and the static fallback’s orbital instruments.

**The Topology Rule.** Complex geometry expresses systems behavior in the hero; routine controls remain plain, rectilinear, and immediately recognizable.

## Components

### Buttons

- **Primary:** A 50px-high square warm-paper block with corridor-black text, 20px horizontal padding, and a signal arrow. It appears once in the hero.
- **Text Action:** Transparent Manrope label with a 14px icon gap; project and contact variants add a low-alpha bottom rule.
- **Hover / Focus:** Arrow icons travel 4px right and 2px up over 350ms. Keyboard focus uses a 2px optic-mint outline offset by 5px.

### Chips

- **Style:** Square transparent project tags with a 1px scene-colored border, 7px by 10px padding, and 9px Manrope text.
- **Color:** All tags within one project inherit that plane’s mint, violet, or orange signal.

### Cards / Containers

There is no conventional card. The project copy is an edge-faded black panel placed over the live corridor. The matching DOM film stays visible in every mode and combines resting perspective, scroll travel, pointer tilt, a projected light pool, and two Z-offset echo planes.

### Navigation

One fixed navigation is shared by every route: wordmark, Home, Projects, About, Contact, and Résumé. Navigation labels are 10–11px Manrope; hover and current-route states draw a mint underline from left to right. Below 1100px, the same information architecture moves into a full-screen menu rather than changing labels or introducing a separate homepage header.

### Corridor Canvas

The signature component is a fixed, transparent, `aria-hidden` Three.js canvas. It caps device pixel ratio at 1.05 to control GPU cost. It uses a 46-degree perspective camera, exponential black fog, sixteen line frames, 120 instanced packets, a detail-2 wireframe icosahedron, 220 particles, and three untextured project fields. On context loss, remove readiness immediately so the CSS hero topology reappears; project evidence is unaffected.

### Project Stop

Each stop binds one DOM scene to one world-space plane through a measured scroll anchor. Copy includes a Bahianita name, factual role and detail, compact tags, and a case-study link. The first and third planes sit right of center; the second sits left. All three DOM films use resized derivatives of supplied project screenshots—not generated substitute imagery—and remain visible with meaningful alt text. A resting perspective, Z-offset echoes, projected light, scroll tilt, and pointer tilt make their depth legible even without WebGL.

### Static Topology Fallback

The fallback hero uses two depth planes, a six-faced CSS cube, three orbital rings, three signal satellites, pointer-linked tilt, and a mint aurora. It is the primary experience below 821px, for reduced-motion users, and whenever WebGL is unavailable. Do not show it simultaneously with a ready corridor on desktop.

### Operating Model

Four numbered stages—Understand, Architect, Build, and Operationalize—make the portfolio's working method explicit. A scroll-responsive stack of ASK, MODEL, BUILD, and SHIP planes supplies depth without becoming a second hero. Desktop uses a horizontal progress rail; mobile preserves the same source order as a vertical rail.

### Career Trajectory

The homepage career section tells a progression rather than repeating a résumé timeline: applied-AI delivery becomes enterprise product ownership across two consecutive PT Jababeka roles. A sticky statement and scroll-responsive ASK → BUILD → OWN orbit lead on desktop while two long-form delivery records expose summaries, verified contributions, and technology trails. Mobile restores a single linear reading order. The closing proof band names four concrete work surfaces—AI Agent, JIFAS, Telerik migration, and Python finance automation—without inventing outcome metrics.

### Motion

The camera target follows measured project anchors with smoothstep interpolation; each frame applies exponential damping at 6.2 per second so the camera catches up without feeling loose. Scroll drives camera z through 11, -16.5, -35.5, and -54.5 while alternating x through 0, -0.9, 0.9, and -0.8. Pointer input adds up to 0.48 world units horizontally and 0.34 vertically. UI transitions stay short, use ease-out, and prefer transform and opacity; continuous motion is reserved for spatial atmosphere.

Reduced motion prevents renderer construction entirely and disables the fallback’s CSS orbit animations and decorative progress. Narrow layouts retain a static, readable fallback. Rendering stops after the featured-work corridor leaves view and skips drawing while the document is hidden. The project collection is user-driven through native drag/scroll and scroll snapping, never an automatic marquee.

## Do's and Don'ts

### Do:

- **Do** keep the first WebGL viewport free of project imagery so identity and topology establish the experience.
- **Do** add the readiness class only after a renderer exists, and remove it on cleanup or context loss.
- **Do** keep DOM project images visible in every rendering mode; WebGL is enhancement, never evidence gating.
- **Do** preserve the complete CSS fallback below 821px, under reduced motion, and after WebGL failure.
- **Do** dispose geometries, materials, maps, listeners, animation frames, and the renderer on unmount.
- **Do** retain semantic headings, articles, lists, links, meaningful alt text, keyboard focus, and direct résumé/contact routes.
- **Do** cap render cost and stop visible corridor rendering after the work journey.

### Don't:

- **Don't** describe or extend the CSS cube as the primary desktop hero; it is the resilience layer.
- **Don't** place project imagery in the WebGL hero or reveal a project plane before its scroll stop.
- **Don't** remove DOM content because the same project appears in WebGL.
- **Don't** initialize WebGL for reduced-motion users or viewports narrower than 821px.
- **Don't** use rounded cards, pill controls, opaque spectral backgrounds, or generic glass panels.
- **Don't** let camera travel obscure actions, alter DOM reading order, or become required to understand the work.

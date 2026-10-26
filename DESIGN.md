---
name: "Spatial Film Corridor"
description: "An identity-first portfolio whose desktop scroll becomes camera travel through a live corridor of engineering artifacts."
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

# Design System: Spatial Film Corridor

## Overview

**Creative North Star: "The Spatial Film Corridor"**

The portfolio opens on Ivan’s identity inside a live GPU-rendered system. A fixed transparent WebGL canvas places a rotating wireframe topology core and 120 orbiting data packets inside a long tunnel of receding frames and sparse signal particles. The first viewport contains no project imagery: the name, role, thesis, work route, and résumé route lead while the generative system establishes technical authorship.

Scroll becomes camera travel. After one warm-paper manifesto interlude, the camera advances through three suspended project films at measured depths while the semantic DOM supplies the project name, role, explanation, stack, and case-study link. The second scene reverses the copy position to vary the passage through the corridor. Practice, experience, evidence, and contact become progressively quieter after the WebGL journey.

The corridor is progressive enhancement, not a dependency. At widths below 821px, under reduced motion, after WebGL construction failure, or after context loss, the fixed canvas remains invisible and the complete CSS/DOM Spatial Systems Chamber fallback stays visible. The fallback includes the cube-and-orbit hero and depth-stacked project images; it is not the primary desktop visual world.

**Key Characteristics:**

- Identity-first, project-free hero built around a live topology core and moving data packets.
- Fixed Three.js canvas with scroll-smoothed camera travel through sixteen wireframe tunnel frames.
- Three real project textures suspended as large planes with spectral wireframe echoes.
- Semantic DOM copy remains above the canvas and owns navigation, reading order, alt text, and actions.
- Mint, violet, and orange identify systems against a near-black fogged corridor.
- One warm-paper manifesto and one warm-paper experience section reset the dark spatial journey.
- CSS 3D hero and DOM project films form the complete static fallback.

## Colors

The corridor is almost black so its emitted system colors and project textures can carry depth; warm paper is reserved for decisive editorial interludes.

### Primary

- **Optic Mint:** The primary signal for the topology core, data packets, particles, focus states, progress, navigation underlines, and the first project plane.

### Secondary

- **Prism Violet:** The alternate tunnel frame hue, the second project plane, and one fallback orbit.

### Tertiary

- **Signal Orange:** The third project plane, a fallback satellite, and the contact core.

### Neutral

- **Corridor Black:** Scene fog, page ground, DOM copy backing, and the visual void around project films.
- **Section Black:** A barely lifted dark field for the post-corridor practice section.
- **Depth Black:** Backing and fallback depth planes.
- **Experience Ink:** Text and rules on warm-paper sections.
- **Paper White:** Primary text on dark surfaces, reduced with alpha for explanations and structure.
- **Warm Paper:** Display type, the filled hero action, manifesto ground, and experience ground.

### Named Rules

**The Emitted-Signal Rule.** Mint, violet, and orange belong to light, linework, indices, particles, tags, and per-project identity; never spread them across large opaque backgrounds.

**The Interlude Rule.** Warm paper may fill a section only when the camera journey needs a deliberate editorial reset.

## Typography

**Display Font:** Bahianita (with sans-serif fallback)

**Body Font:** Manrope (with sans-serif fallback)
**Label Font:** Manrope (with sans-serif fallback)

**Character:** Bahianita gives identity and project names a tall, unmistakable silhouette that holds against the moving corridor. Manrope keeps facts, controls, and technical evidence calm and readable above both WebGL and static fallback scenes.

### Hierarchy

- **Display** (400, typically 72–96px, 0.75–0.82 line-height): Identity, manifesto, project names, section declarations, and contact language.
- **Headline** (500, typically 21–32px, 1.1–1.15 line-height): Capability and experience titles.
- **Body** (400, typically 12–17px, 1.65–1.75 line-height): Thesis, project context, practice explanation, and experience evidence.
- **Label** (500–600, typically 8–11px, 0.04–0.22em letter-spacing): Roles, coordinates, navigation, tags, dates, case indices, and controls.

### Named Rules

**The Identity-Scale Rule.** Ivan’s full name is the first display statement; WebGL motion supports it and never replaces it.

**The Two-Voice Rule.** Bahianita owns names and declarations. Manrope owns explanations, evidence, controls, and operational detail.

## Layout

The WebGL canvas is fixed to the viewport at z-index 0 and never receives pointer events. Every direct child of the immersive page other than the canvas sits above it at z-index 2. Once the renderer is successfully created, a readiness class makes the canvas visible, makes hero and work backgrounds transparent, reduces the hero texture, hides the CSS cube, and visually hides DOM project images. Text and actions remain DOM content throughout.

The first viewport holds a full-depth tunnel with Ivan’s copy near 6.3vw on the left, navigation along a quiet top rule, and coordinates on the far right. The manifesto remains a full-height asymmetric light section. Work begins with a 74svh introduction, followed by three scenes of at least 112svh. In WebGL mode, odd-scene copy occupies the left in an 88%-opaque black backing with a rightward shadow; the middle scene moves copy to the right with the shadow reversed. Suspended project planes alternate right, left, right in world space.

After the work section, the fixed canvas fades to zero and rendering is skipped, leaving practice, experience, and contact as ordinary DOM sections. Practice uses three border-led rows, experience uses a warm-paper two-column timeline, and contact returns to a centered dark orbital composition.

The renderer is disabled below 821px. The broader CSS layout switches at 900px: navigation simplifies, the static cube moves behind the lower-right hero, headings stack, project scenes become single-column with the DOM image first, capabilities collapse to index-plus-content rows, and contact actions stack. Between 821px and 900px, the compact DOM layout can coexist with WebGL on capable devices.

**The Camera-Path Rule.** Primary projects occupy distinct world coordinates and scroll anchors; never collapse the desktop corridor into a conventional card grid.

**The DOM-Authority Rule.** WebGL supplies atmosphere and project imagery, while the DOM remains the source of truth for text, links, image alternatives, focus order, and fallback presentation.

## Elevation & Depth

Desktop depth is a real camera system. A 46-degree perspective camera begins at z=11 and smooths toward z positions -16.5, -35.5, and -54.5 at the measured center of each project scene. Sixteen rectangular wireframe frames begin at z=3 and recede in 4.2-unit steps. Exponential fog at density 0.036 absorbs the corridor, while 280 sparse points preserve scale.

The project planes sit at z=-23, -42, and -61 with alternating x offsets of 2.4, -2.2, and 2.2. Each textured plane receives three lower-opacity wireframe echoes and one brighter spectral edge. Only groups within 25 world units of the camera remain visible. The fallback replaces this with CSS perspective, two translated backing planes, and a deep black projection shadow.

### Shadow Vocabulary

- **WebGL copy isolation** (`46px 0 72px #05070b`, reversed for the middle scene): Keeps DOM text legible over a passing project plane.
- **Fallback core depth** (`18px 28px 60px rgba(0, 0, 0, 0.28), inset 0 0 54px rgba(168, 255, 234, 0.09)`): Gives the static CSS cube form without pretending it is the desktop renderer.
- **Fallback project projection** (`0 36px 80px rgba(0, 0, 0, 0.48)`): Lifts the DOM project image above its CSS echo planes.
- **Status signal** (`0 0 15px rgba(168, 255, 234, 0.55)`): Availability point only.
- **Progress beam** (`0 0 16px rgba(168, 255, 234, 0.5)`): Narrow light around the two-pixel progress line.

### Named Rules

**The Real-Depth Rule.** Desktop depth comes from camera position, world coordinates, fog, occlusion, and project planes—not from a stack of shadowed DOM cards.

**The One-Artifact Rule.** Each stop elevates one real project texture; echoes and frames support it rather than introducing competing imagery.

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

There is no conventional card. In WebGL mode, project copy is an edge-faded black panel placed over the live corridor while the matching image exists as a world-space texture. In fallback mode, the DOM image, border, and two Z-offset echo planes form the complete artifact.

### Navigation

The desktop header is a three-column rule: wordmark, centered destinations, and status. Navigation labels are 11px Manrope; hover draws a mint underline from left to right over 420ms. Mobile hides status and About while retaining Work, Résumé, and Contact.

### Corridor Canvas

The signature component is a fixed, transparent, `aria-hidden` Three.js canvas. It caps device pixel ratio at 1.15 and texture anisotropy at 8 to control GPU cost. It uses a 46-degree perspective camera, exponential black fog, sixteen line frames, 120 instanced packets, a detail-2 wireframe icosahedron, 280 particles, and three textured project groups. On context loss, remove readiness immediately so the DOM fallback reappears.

### Project Stop

Each stop binds one DOM scene to one world-space plane through a measured scroll anchor. Copy includes a Bahianita name, factual role and detail, compact tags, and a case-study link. The first and third planes sit right of center; the second sits left. DOM images remain mounted with meaningful alt text and become visually transparent only while the readiness class is present.

### Static Topology Fallback

The fallback hero uses two depth planes, a six-faced CSS cube, three orbital rings, three signal satellites, pointer-linked tilt, and a mint aurora. It is the primary experience below 821px, for reduced-motion users, and whenever WebGL is unavailable. Do not show it simultaneously with a ready corridor on desktop.

### Capability Row

Three full-width rows pair a tiny index, medium Manrope title, and concise technical scope. Hover adds 18px inline padding and optic mint over 450ms. Mobile moves the description beneath the title without changing the source order.

### Motion

The camera target follows measured project anchors with smoothstep interpolation; each frame applies exponential damping at 3.6 per second. Scroll drives camera z through 11, -16.5, -35.5, and -54.5 while alternating x through 0, -0.9, 0.9, and -0.8. Pointer input adds up to 0.48 world units horizontally and 0.34 vertically. The topology core, packet field, particles, and project planes drift at deliberately slow independent rates.

Reduced motion prevents renderer construction entirely and disables the fallback’s CSS orbit animations and decorative progress. Narrow layouts retain a static, readable fallback. Rendering pauses visually after the work section and skips drawing while the document is hidden.

## Do's and Don'ts

### Do:

- **Do** keep the first WebGL viewport free of project imagery so identity and topology establish the experience.
- **Do** add the readiness class only after a renderer exists, and remove it on cleanup or context loss.
- **Do** keep DOM project images mounted and hide them only while WebGL is ready.
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

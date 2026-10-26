---
name: "Spatial Systems Chamber"
description: "An identity-first portfolio where a precise orbital chamber opens into full-viewport engineering case studies."
colors:
  chamber-black: "#05070b"
  chamber-raised: "#0a0e14"
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
    textColor: "{colors.chamber-black}"
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
  project-viewport:
    backgroundColor: "{colors.depth-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.square}"
---

# Design System: Spatial Systems Chamber

## Overview

**Creative North Star: "The Spatial Systems Chamber"**

The portfolio opens as an identity chamber, not a project index. Ivan’s name, engineering role, thesis, and direct actions occupy the first plane; an interactive wireframe cube, orbital rings, satellites, coordinates, moving light, and subtle texture make the interface itself evidence of technical craft. The object is abstract enough to represent AI, systems, and product together without competing with the identity.

After the portal, a warm-paper manifesto resets the eye before work unfolds one system per viewport. Each project scene pairs concise engineering context with one large, depth-stacked interface image. Practice, experience, evidence, and contact then become progressively simpler. The overall experience is cinematic but legible: spectacle establishes character, while a clear reading order and explicit routes support fast recruiter evaluation.

**Key Characteristics:**

- Identity-first opening with a responsive CSS 3D cube, orbital rings, and pointer-linked light.
- Near-black spatial chamber punctuated by one warm-paper manifesto and experience interlude.
- Bahianita display statements paired with compact Manrope evidence and controls.
- Mint as the primary signal, with violet and orange as restrained orbital and scene accents.
- One-project-per-viewport storytelling with layered interface depth rather than a card grid.
- Square controls, hairline dividers, tiny coordinates, and circular geometry reserved for spatial instruments.
- Motion is atmospheric and relational; content and routes remain complete without it.

## Colors

The palette alternates a deep black chamber with rare warm-paper interludes; spectral color behaves like emitted signal light rather than surface decoration.

### Primary

- **Optic Mint:** The primary system signal for roles, active progress, navigation underlines, focus outlines, cube edges, tags, and the first project scene.

### Secondary

- **Prism Violet:** A secondary spatial wavelength for one orbital path and the second project scene.

### Tertiary

- **Signal Orange:** A warm counter-signal for satellites, the contact core, and the third project scene.

### Neutral

- **Chamber Black:** Dominant hero, work, and contact ground.
- **Chamber Raised:** A barely lifted dark field that distinguishes the practice section without introducing a card surface.
- **Depth Black:** The translucent-looking backing plane behind project images.
- **Experience Ink:** Text and structural lines on warm-paper interludes.
- **Paper White:** Primary copy and interface text on dark surfaces, reduced with alpha for secondary hierarchy.
- **Warm Paper:** Display text on dark surfaces and the full-field manifesto/experience contrast color.

### Named Rules

**The Signal-Light Rule.** Mint, violet, and orange belong to active lines, indices, tags, glows, and scene identity; never use them as broad page fills.

**The Interlude Rule.** Warm paper may take over an entire section only to reset pacing and sharpen a manifesto or experience statement; ordinary dark sections remain black.

## Typography

**Display Font:** Bahianita (with sans-serif fallback)

**Body Font:** Manrope (with sans-serif fallback)
**Label Font:** Manrope (with sans-serif fallback)

**Character:** Bahianita provides the tall, compressed identity voice that makes names and statements feel architectural. Manrope carries every factual layer with controlled spacing and low visual noise.

### Hierarchy

- **Display** (400, typically 72–96px, 0.75–0.82 line-height): Multi-line identity, manifesto, project names, section statements, and contact language.
- **Headline** (500, typically 21–32px, 1.1–1.15 line-height): Capability and experience titles.
- **Body** (400, typically 12–17px, 1.65–1.75 line-height): Thesis, project context, practice explanation, and experience evidence; constrain lines to roughly 38–56 characters where practical.
- **Label** (500–600, typically 8–11px, 0.04–0.22em letter-spacing): Roles, counts, coordinates, navigation, tags, dates, and controls. Uppercase communicates instrumentation, not emphasis everywhere.

### Named Rules

**The Identity-Scale Rule.** Bahianita establishes the person before it names the projects; the first display statement is Ivan’s full name.

**The Two-Voice Rule.** Bahianita owns names and declarations. Manrope owns explanations, evidence, controls, and all operational detail.

## Layout

The first viewport is a three-plane chamber. A centered header spans the top between 4.5vw insets; the identity block sits near 6.3vw on the left; the cube-and-orbit object occupies the middle-right; and vertical coordinates close the far edge. The composition uses a 1500px perspective stage, substantial negative space, and no centered hero container.

The manifesto is a full-height asymmetric two-column light interlude. Work begins with a 74svh chapter introduction, then each project receives at least 112svh in a two-column scene: compact copy on the left and a dominant interface viewport on the right. Practice uses a heading split followed by three full-width rows. Experience switches to warm paper in a two-column editorial timeline. Contact returns to a centered dark chamber with an oversized orbital sphere behind its actions.

At 900px and below, the header drops status and the redundant About link, while preserving Work, Résumé, and Contact. The identity block moves upward, the cube shrinks and moves behind the lower-right of the hero, and coordinates disappear. Manifesto and headings stack. Project scenes become single-column at 120svh, explicitly placing imagery before copy; depth offsets shrink but remain perceptible. Capability rows collapse to an index-plus-content layout, experience becomes one column, evidence becomes a vertical list, and contact actions stack.

**The Viewport Scene Rule.** A selected project gets a full spatial scene; never compress the three primary projects into an equal card grid.

**The Mobile Reading-Order Rule.** On narrow screens, show the project image first, then its count, name, role, detail, tags, and case-study action.

## Elevation & Depth

Depth comes from real CSS 3D geometry in the hero and layered planes in project scenes. The cube uses six translucent faces with inset mint illumination; three differently oriented rings and colored satellites establish orbit. Project screenshots sit above two translated Z-depth echoes and cast one strong black shadow. Blurred scene atmospheres carry the current project accent without tinting the entire viewport.

### Shadow Vocabulary

- **Status signal** (`0 0 15px rgba(168, 255, 234, 0.55)`): The small availability point.
- **Cube interior** (`inset 0 0 44px rgba(168, 255, 234, 0.06)`): Barely visible inner light on every cube face.
- **Satellite emission** (`0 0 20px rgba(168, 255, 234, 0.72)`): A tight glow around orbital points; violet and orange satellites keep their solid hues.
- **Project projection** (`0 36px 80px rgba(0, 0, 0, 0.48)`): The only substantial surface shadow, reserved for the large interface viewport.
- **Progress beam** (`0 0 16px rgba(168, 255, 234, 0.5)`): A narrow glow around the two-pixel page-progress line.

### Named Rules

**The Constructed-Depth Rule.** Prefer perspective, overlap, Z translation, and line geometry to generic blurred card shadows.

**The One-Artifact Rule.** Each project scene elevates one real interface image; its backing planes support that artifact rather than introducing extra decorative panels.

## Shapes

Ordinary interface geometry stays square: actions, tags, project screenshots, depth planes, timeline structures, and evidence dividers use hard corners and one-pixel strokes. Circles and ellipses are reserved for the chamber’s spatial instruments—orbital rings, satellites, status points, atmospheres, and the contact sphere. The hero cube and contact diamond provide the only strong polygonal forms.

**The Orbital Geometry Rule.** Curves signal atmosphere, position, or motion; they do not soften routine controls into pills.

## Components

### Buttons

- **Primary:** A 50px-high square warm-paper block with chamber-black text, 20px horizontal padding, and a signal arrow. It is used once in the hero for entry into selected work.
- **Text Action:** Transparent Manrope label with a 14px icon gap. Project and contact variants add a low-alpha bottom rule instead of a container.
- **Hover / Focus:** Arrow icons travel 4px right and 2px up over 350ms with an expressive ease. Keyboard focus uses a 2px optic-mint outline offset by 5px.

### Chips

- **Style:** Square transparent project tags with a 1px scene-colored border, 7px by 10px padding, and 9px Manrope text.
- **Color:** All tags within one project inherit that scene’s mint, violet, or orange accent.

### Cards / Containers

There is no conventional card component. Project viewports are full scene artifacts: the screenshot has a low-alpha paper border, a deep projection shadow, and two same-size backing planes translated in X, Y, and Z. Practice and experience use lines, columns, and timelines rather than isolated boxes.

### Navigation

The desktop header is a three-column line: wordmark, centered destination row, and right-aligned status. Navigation labels are 11px Manrope; hover draws a mint underline from left to right over 420ms. Mobile hides the status and About link but retains the three decision-critical destinations.

### Spatial Core

The hero signature is a six-faced CSS cube with “AI / INTELLIGENCE” and “01 / SYSTEM” face content. Its resting pose is rotated on both axes; a slow 12-second drift runs inside three independently rotating orbital rings. Desktop pointer movement adds no more than 8 degrees of X tilt and 12 degrees of Y tilt to the containing object and moves the mint aurora across a 34–66% by 38–62% field.

### Project Scene

Each scene owns a single accent, a numbered count, Bahianita project name, factual role and detail, compact tags, case-study action, and one image with meaningful alt text. Scroll progress spring-smooths the copy and viewport independently: the image passes from +110px to -110px, rotates from 8 to -7 degrees, and scales from 0.82 through 1 to 0.88.

### Capability Row

Three full-width rows pair a tiny index, a medium Manrope title, and a concise technical scope. On hover, the row gains 18px inline padding and the title inherits optic mint over 450ms. On mobile, the description moves beneath the title without changing semantic order.

### Experience Timeline

The light experience section uses a thin vertical ink line, 7px circular nodes, compact dates, and restrained body copy. Evidence figures close the section on a single top rule and become a vertical list on mobile.

### Motion

Hero pointer response uses a spring of stiffness 52, damping 18, and mass 0.85. Project scroll scenes use stiffness 72, damping 24, and mass 0.65; global progress uses stiffness 70, damping 25, and mass 0.6. CSS orbits run at 12, 18, 23, and 29 seconds. `useReducedMotion()` removes pointer tilt, project parallax, and contact rotation; `prefers-reduced-motion` disables core, ring, and scroll-signal animation and collapses interaction transitions.

## Do's and Don'ts

### Do:

- **Do** establish Ivan’s identity, engineering role, thesis, work route, and résumé route within the first viewport.
- **Do** keep the cube and orbit system abstract, precise, and subordinate to the name and thesis.
- **Do** alternate dark chambers with rare full-field warm-paper interludes to control pacing.
- **Do** give each primary project one full scene, one real interface artifact, and a direct case-study route.
- **Do** retain semantic headings, articles, lists, navigation, links, useful image alt text, and logical reading order beneath the spatial composition.
- **Do** preserve mint `:focus-visible` outlines and reduced-motion paths for every moving system.
- **Do** keep the mobile project image before its explanatory copy and keep decision-critical header links visible.

### Don't:

- **Don't** return to a project-first contact sheet, registration rail, or equal-card portfolio grid.
- **Don't** let the 3D object obscure the identity, thesis, actions, or mobile reading path.
- **Don't** replace the cube with a raster illustration; its responsive interaction and geometry are part of the system.
- **Don't** use rounded cards, pill buttons, broad spectral fills, or generic glass panels.
- **Don't** add autonomous motion that survives reduced-motion settings or content that requires motion to understand.
- **Don't** invent metrics, projects, outcomes, or technical claims to increase visual density.

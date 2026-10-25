---
name: "Registered Lightfield Folio"
description: "A near-black editorial portfolio that registers engineering evidence across luminous optical film planes."
colors:
  gallery-black: "#070a10"
  film-black: "#0b1119"
  paper-white: "#f1f5f2"
  warm-paper: "#f1ede9"
  optic-mint: "#a8ffea"
  prism-violet: "#c8a7ff"
  signal-orange: "#ff914d"
typography:
  display:
    fontFamily: "Bahianita, sans-serif"
    fontSize: "clamp(4.625rem, 8vw, 8.375rem)"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "0.015em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.5625rem, 2.4vw, 2.4375rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  square: "0"
  tag: "6px"
  circular: "999px"
spacing:
  micro: "8px"
  xs: "11px"
  sm: "14px"
  md: "18px"
  control: "22px"
  panel: "42px"
components:
  action-primary:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.gallery-black}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "19px 22px"
    height: "52px"
  action-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "19px 22px"
    height: "52px"
  technology-tag:
    backgroundColor: "transparent"
    textColor: "{colors.optic-mint}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0 10px"
    height: "24px"
  film-record:
    backgroundColor: "{colors.film-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.square}"
    padding: "42px"
---

# Design System: Registered Lightfield Folio

## Overview

**Creative North Star: "The Registered Lightfield Folio"**

The portfolio behaves like an editorial contact sheet laid on a dark inspection table. Engineering evidence is the artwork: project interfaces sit inside translucent optical film, while hairline rules, registration marks, indices, and compact metadata make the composition feel measured rather than ornamental. The visual world is cinematic and spatial, but its purpose is fast evaluation by recruiters.

Density is intentional. Large, narrow display type establishes chapters; compact Manrope text carries facts; and broad areas of near-black preserve focus around the project planes. Mint, violet, and warm orange appear as controlled refractions, never as broad decorative fills. Active Theory informs the spatial confidence and motion, while ambiguous navigation is explicitly excluded: work, résumé, project details, and contact remain visible, semantic actions.

**Key Characteristics:**

- Near-black editorial gallery with off-white type and hairline registration structure.
- Project screenshots presented as luminous, translucent film planes rather than generic cards.
- Bahianita display typography paired with compact, highly legible Manrope UI and body text.
- Mint, violet, and orange accents used as optical signals, indices, and edge light.
- Square actions, clipped planes, and precise coordinate-like alignment.
- CSS perspective and restrained Framer Motion create depth without gating content.

## Colors

The palette is dark and material: paper whites establish editorial hierarchy while three spectral accents distinguish interaction, technology, and optical depth.

### Primary

- **Optic Mint:** The principal interactive signal for hover states, focus outlines, progress, active points, and first-position technology tags.

### Secondary

- **Prism Violet:** A secondary refraction for alternate tags, film borders, and selected depth contours.

### Tertiary

- **Signal Orange:** A warm indexing color for record labels, project numbers, and the third tag in a sequence.

### Neutral

- **Gallery Black:** The uninterrupted page ground. Keep it dominant across every immersive surface.
- **Film Black:** The slightly lifted, translucent-looking base of records and archive cells.
- **Paper White:** Primary body and interface text, often reduced with alpha for supporting copy and rules.
- **Warm Paper:** Large display headlines and filled primary actions; its slight warmth prevents the gallery from feeling clinical.

### Named Rules

**The Refraction Rule.** Mint, violet, and orange identify signals and depth; they do not become large background fields.

**The Alpha Hierarchy Rule.** Use paper white at full strength for key facts, around 60–78% for explanations, and around 14–34% for registration rules and structural borders.

## Typography

**Display Font:** Bahianita (with sans-serif fallback)

**Body Font:** Manrope (with sans-serif fallback)
**Label Font:** Manrope (with sans-serif fallback)

**Character:** Bahianita gives the folio its tall, compressed editorial voice; Manrope supplies calm technical precision. Their contrast is the identity: expressive chapter statements surrounded by controlled, readable evidence.

### Hierarchy

- **Display** (400, responsive clamp, 0.78 line-height): Uppercase identity and section statements. It may run very large and tightly stacked, but must remain readable at the shipped viewport.
- **Headline** (500–600, responsive 25–39px range, 1.05 line-height): Project, experience, and system names in Manrope when a quieter voice is needed.
- **Body** (400, typically 12–16px, 1.45–1.75 line-height): Explanations and evidence. Wider introductions stay near 470–590px; dense records stay shorter.
- **Label** (500, typically 8–12px, 0.07–0.16em letter-spacing): Indices, dates, roles, rails, and technical metadata. Uppercase is reserved for this coordinate-like layer.

### Named Rules

**The Two-Voice Rule.** Bahianita owns identity and chapter-scale statements; Manrope owns facts, controls, project names, and operational detail.

**The Tall-Type Rule.** Never replace Bahianita with a generic bold grotesk or stretch Manrope to imitate it; the narrow, irregular display silhouette is foundational.

## Layout

Desktop composition uses a 1536:1024 first-frame reference and percentage-positioned project planes inside a perspective stage. Identity and direct actions occupy the left third, while the dominant VANGUARD plane fills the right. WhatsApp and Kalbe continue the visual ribbon through the lower frame. Subsequent sections use approximately 6.3% outer insets, fine vertical rails near 2.7%, and intentionally asymmetric stages rather than a centered container.

The spacing rhythm alternates between tight evidence clusters and large areas of black. Small gaps of 8–22px organize labels and controls; 28–42px padding defines records; 64–112px separates chapters on compact screens. Hairline rules and aligned indices provide continuity when content changes scale.

At 900px and below, the fixed-aspect hero becomes a roughly 1900px stacked sequence. Navigation simplifies, the secondary About link and nonessential microcopy disappear, the three project films become wide horizontal bands, and dense desktop metadata is removed. Later sections leave absolute positioning, discard decorative prisms, flatten records and archive items into one column, and make contact actions full width. Content order and every core destination remain intact.

**The Registered Edge Rule.** Major content aligns to the recurring left rails and section insets; do not center ordinary sections merely to fill space.

## Elevation & Depth

Depth is optical, not conventionally card-like. The system combines CSS perspective, restrained Y-axis rotation, translucent dark planes, thin spectral edges, glow, blur, and overlapping film artwork. Broad drop shadows are absent; light appears as a narrow response along edges, progress beams, status points, and orbital lines.

### Shadow Vocabulary

- **Mint status glow** (`0 0 14px rgba(100, 255, 180, 0.48)`): Availability only.
- **Film atmosphere** (`0 0 38px rgba(42, 240, 218, 0.08), inset 0 0 42px rgba(174, 139, 255, 0.04)`): Experience records and translucent prisms.
- **Registered edge** (`0 0 22px rgba(100, 233, 209, 0.55)`): One narrow illuminated edge on a selected record.
- **Scroll beam** (`0 0 16px rgba(168, 255, 234, 0.7), 0 0 32px rgba(200, 167, 255, 0.36)`): The page-progress signal at the top edge.

### Named Rules

**The Edge-Light Rule.** Depth comes from overlapping planes and illuminated edges; never lift every surface with a soft generic shadow.

**The Motion-Is-Registration Rule.** Pointer and scroll motion should reveal how layers relate. It must remain subtle, spring-smoothed, and removable without losing information.

## Shapes

Rectangles are square by default. Primary and secondary controls, records, archive cells, and navigation surfaces use hard corners and one-pixel rules. Technology tags are the deliberate exception with a restrained 6px radius. Circles belong to optical instrumentation—registration crosshairs, status dots, axis points, and the contact orbit—not to ordinary buttons or cards. Arrow icons use square caps and miter joins to match the drafting language.

**The Instrument Geometry Rule.** Reserve circles for signals and measurement; keep actionable surfaces rectilinear.

## Components

### Buttons

- **Shape:** Square, horizontal controls with 1px structure and a compact label.
- **Primary:** Warm-paper fill with gallery-black text and a right-aligned signal arrow; hover refracts to optic mint.
- **Secondary:** Transparent with a semi-opaque paper border; hover shifts border and text to prism violet in the hero, or optic mint in contact contexts.
- **Hover / Focus:** Color changes complete in about 220ms. Keyboard focus uses a 2px optic-mint outline offset by 4–5px. Keep the label and arrow visible in every state.

### Chips

- **Style:** Transparent 24px-high technology tags with a 1px spectral border, 6px corners, and compact Manrope text.
- **Sequence:** The first tag is mint, the second violet, and the third orange. On mobile they grow to 28px high for touch readability.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Near-opaque film black over gallery black; use translucency or backdrop blur only where overlapping planes justify it.
- **Shadow Strategy:** Optical glow is concentrated on a single edge or shallow atmospheric halo.
- **Border:** 1px paper-white rules at low alpha, with occasional mint, violet, or orange emphasis.
- **Internal Padding:** 42px on full desktop records, 28px on compact records, and 24–32px on archive cells.

### Navigation

Navigation rests on the quiet top registration rule with 11px Manrope labels. Links inherit off-white, underline on hover with a 5px offset, and shift to optic mint. Mobile keeps the primary destinations visible in a compact right-aligned row; only the redundant in-page About link is omitted.

### Film Planes

Project screenshots are authored optical plates with glow and edge treatment embedded in the imagery. They may overlap, bleed, crop, and rotate slightly in 3D, but must use meaningful alternative text. Pointer tilt is disabled for touch and reduced-motion users.

### Registration Rails

Hairline vertical rails, circular crosshairs, tiny indices, and chapter labels establish a measured coordinate system. They are decorative and hidden from assistive technology; they must never replace semantic headings or navigation.

### Motion

Framer Motion drives spring-smoothed pointer tilt, scroll parallax, a horizontal progress beam, archive drift, and a rotating contact orbit. The standard spring is stiffness 120, damping 24, mass 0.7; scroll progress uses stiffness 90, damping 28, mass 0.5. Motion stops under `prefers-reduced-motion`, touch pointers do not tilt the films, and CSS transitions collapse to effectively zero duration.

## Do's and Don'ts

### Do:

- **Do** lead with real project evidence and keep the work, résumé, and contact routes obvious.
- **Do** maintain the near-black ground, warm editorial display type, and restrained three-color refraction system.
- **Do** use semantic sections, headings, navigation, links, lists, and descriptions underneath the spatial composition.
- **Do** preserve 2px optic-mint `:focus-visible` outlines with clear offset on every immersive link.
- **Do** give meaningful project imagery useful alt text while marking registration marks and purely optical layers decorative.
- **Do** provide the stacked 900px fallback and test that it remains usable at browser zoom and narrow phone widths.
- **Do** honor both `useReducedMotion()` and `prefers-reduced-motion`; core content must not depend on tilt, parallax, or the progress beam.

### Don't:

- **Don't** turn the experience into a centered developer headline followed by equal rounded cards.
- **Don't** use large accent-color fills, rainbow gradients, pill-shaped actions, or generic glassmorphism as the primary visual language.
- **Don't** add motion that delays access, creates a hidden navigation model, or changes the reading order.
- **Don't** use circles for routine controls or soften the square film geometry with broad corner radii.
- **Don't** invent project metrics, outcomes, or imagery to make a plane look busier.
- **Don't** preserve desktop absolute positioning on mobile; flatten the structure and keep evidence readable.

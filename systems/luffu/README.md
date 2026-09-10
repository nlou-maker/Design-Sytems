# Luffu Design System

Warm, intimate design system for Healthy with Naudia health coaching. A cream-and-ink aesthetic with editorial typography and family-centered imagery.

## Overview

**Theme:** Light  
**Palette:** Warm cream, near-black text, single accent (deep teal)  
**Typography:** Two weights of custom ABC Arizona typefaces  
**Approach:** Editorial restraint, full-bleed photography, zero drop shadows  

See [DESIGN.md](./DESIGN.md) for complete brand guidelines, components, and do's/don'ts.

## Assets

### Tokens
- `tokens/tokens.json` — Design tokens in JSON format (Design Tokens Community Group standard)

### Styles
- `styles/variables.css` — CSS custom properties
- `styles/theme.css` — Tailwind v4 theme configuration

### Documentation
- `DESIGN.md` — Complete design system documentation including colors, typography, components, surfaces, layout, imagery, and brand guidelines

## Colors

| Name | Value | Role |
|------|-------|------|
| Deep Ink | `#192830` | Primary CTA button, nav border, interactive controls |
| Parchment | `#f5f5ee` | Page background, section fills |
| Linen | `#e4e7da` | Subtle section dividers, secondary surfaces |
| Pressed Cotton | `#d7d7cb` | Tertiary surfaces, card backgrounds |
| Graphite | `#2f3136` | Body text, headings |
| Slate | `#535557` | Secondary body text, captions |
| Dusk | `#424e52` | Tertiary text, footer links |
| White | `#ffffff` | Button text on dark fills, overlay text |
| Ink | `#000000` | Maximum contrast text, SVG fills |

## Typography

### ABC Arizona Sans
Navigation links, body copy, buttons, captions. Single weight (400) with tight letter-spacing.
- **Sizes:** 14px, 16px, 20px
- **Letter spacing:** -0.35px to -0.32px
- **Fallback:** Freight Sans Pro or Cormorant SC

### ABC Arizona Flare
Display headings and brand wordmark. Flare-serif at very tight letter-spacing.
- **Sizes:** 40px, 48px, 64px
- **Letter spacing:** -1.24px to -3.2px
- **Fallback:** Playfair Display or Cormorant Garamond

## Component Examples

- **Primary CTA Button** — Dark fill (#192830), white text, 4px radius
- **Ghost Navigation Button** — Outlined, 1px border, 6px radius
- **Hero Section** — Full-bleed photography with overlay heading
- **Feature Cards** — 3-column grid with image + text
- **Footer** — Dark olive background (#393e28), white text links

## Quick Start

### CSS Custom Properties
```css
@import 'styles/variables.css';

body {
  background: var(--color-parchment);
  color: var(--color-graphite);
  font-family: var(--font-abc-arizona-sans);
  font-size: var(--text-body);
}

.button {
  background: var(--color-deep-ink);
  color: var(--color-white);
  border-radius: var(--radius-buttons);
  padding: 0 var(--spacing-20);
}
```

### Tailwind v4
```css
@import 'styles/theme.css';
```

## Key Principles

✓ Do
- Use ABC Arizona Flare at -0.05em letter-spacing for display headings
- Restrict palette to Parchment + Graphite + White
- Use circular (9999px radius) crops for person photography
- Apply tight letter-spacing across all type sizes
- Full-bleed photography for hero sections
- Single-weight (400) discipline

✗ Don't
- Introduce chromatic accent colors
- Use bold or semibold weights
- Add drop shadows or card elevation
- Increase button border-radius above 6px
- Use pill buttons
- Place heading text on pure white backgrounds

## Status

**Current:** Tokens, styles, and design specs established  
**Next:** Component library implementation (React/web components), Storybook setup, sync to Claude Design

---

Last updated: 2026-09-10

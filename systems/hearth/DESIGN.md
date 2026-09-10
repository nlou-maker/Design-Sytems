# Hearth — Style Reference

> Original design system for Healthy with Naudia. Warm terracotta and oat-cream, a soft serif for editorial warmth, a humanist sans for everything functional. Built as an original system — see `../references/luffu/` for the mood it was inspired by, and `NOT_MY_BRAND.md` there for why nothing here is copied from it.

**Theme:** light

Hearth is built around one idea: coaching that feels like a conversation, not a clinical program. The palette stays warm and earthy — oat, sand, and clay neutrals with a single terracotta accent (Ember) carrying every call to action. Fraunces gives headlines a soft, human warmth without tipping into precious; Work Sans keeps everything functional legible and calm. No cold blues, no clinical whites, no more than one accent color anywhere.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ember | `#9A4B32` | `--color-ember` | Primary CTA fill, links, interactive accents — the one warm departure from the neutral palette |
| Oat | `#F7F2E7` | `--color-oat` | Page background, default section fill |
| Sand | `#EDE4D3` | `--color-sand` | Section alternation, subtle dividers |
| Clay | `#DCC9AE` | `--color-clay` | Card and tertiary surface fill |
| Bark | `#2E2A24` | `--color-bark` | Primary text, headings |
| Stone | `#6B6259` | `--color-stone` | Secondary text, captions |
| Moss | `#4A4038` | `--color-moss` | Tertiary text, footer links |
| White | `#FFFFFF` | `--color-white` | Text on dark fills, icon fills |
| Ink | `#000000` | `--color-ink` | Maximum-contrast text, SVG fills |

## Tokens — Typography

### Fraunces — Display headings and the wordmark
A warm soft-serif with gentle curves rather than the sharp high-contrast strokes of a Didone. Set at semibold (600) for headings — Hearth uses two weights, not one, so hierarchy comes from both size and weight.
- **License:** SIL Open Font License (free, via Google Fonts)
- **Weights used:** 400, 600
- **Sizes:** 32px, 44px, 60px
- **Role:** Section headings, the wordmark, anything that should feel editorial rather than functional.

### Work Sans — Navigation, body copy, buttons, captions
A humanist sans with an open, friendly x-height. Regular weight for body copy, medium (500) for buttons and emphasis.
- **License:** SIL Open Font License (free, via Google Fonts)
- **Weights used:** 400, 500
- **Sizes:** 13px, 16px, 19px
- **Role:** Everything functional — nav, body, buttons, captions, footer.

### Type Scale

| Role | Size | Line Height | Token |
|------|------|-------------|-------|
| caption | 13px | 1.3 | `--text-caption` |
| body | 16px | 1.5 | `--text-body` |
| body-lg | 19px | 1.5 | `--text-body-lg` |
| heading-sm | 32px | 1.1 | `--text-heading-sm` |
| heading | 44px | 1.05 | `--text-heading` |
| display | 60px | 1.0 | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale
A conventional 4px-based scale: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128px.

### Border Radius
| Element | Value |
|---------|-------|
| buttons | 6px |
| cards | 10px |
| avatar circles | 9999px |

### Layout
- **Page max-width:** 1160px
- **Card padding:** 28px
- **Element gap:** 20px

## Components

### Primary Button
Background Ember, white text, 6px radius, medium-weight Work Sans, min-height 36px.

### Ghost Button
Transparent background, Ember text and 1px Ember border, 6px radius.

### Hero Section
Full-bleed photography, content block bottom-left (not top-left, not a wordmark-over-image treatment), headline in Fraunces 44px, CTA button below subheadline.

### Feature Card
Clay-tinted surface, 10px radius, image on top, category label + Fraunces heading + Work Sans description below.

### Navigation Bar
Solid Oat background with a Sand bottom border (not a transparent overlay on photography) — dark text, filled primary button for the main CTA.

### Footer
Bark (dark) background, Oat text links, copyright line.

## Do's and Don'ts

### Do
- Keep Ember as the only accent color — everything else stays neutral
- Use Fraunces at 600 weight for all headings; reserve 400 weight for occasional editorial body moments only
- Use warm, natural photography — real settings, not stock-clinical
- Alternate Oat and Sand backgrounds between sections for rhythm without needing borders

### Don't
- Never introduce a second accent color (no blues, no greens)
- Don't use drop shadows — depth comes from background layering only
- Don't set Work Sans below 13px — it's legible, not decorative, and needs room to breathe
- Don't overlay the wordmark on photography — Hearth's hero keeps text and image as separate, readable blocks

## Quick Start

### CSS Custom Properties
```css
:root {
  --color-ember: #9A4B32;
  --color-oat: #F7F2E7;
  --color-sand: #EDE4D3;
  --color-clay: #DCC9AE;
  --color-bark: #2E2A24;
  --color-stone: #6B6259;
  --color-moss: #4A4038;

  --font-fraunces: 'Fraunces', ui-serif, Georgia, serif;
  --font-work-sans: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
}
```

---

Last updated: 2026-09-10

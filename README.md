# Design Systems

Multi-brand design systems for Healthy with Naudia and AI consulting projects.

## Systems

### Luffu
Warm, intimate design system for Healthy with Naudia health coaching.

- **Theme:** Light, cream-and-ink aesthetic
- **Palette:** Parchment (#f5f5ee), Graphite (#2f3136), Deep Ink (#192830)
- **Typography:** ABC Arizona Sans (navigation/body), ABC Arizona Flare (display)
- **Status:** Establishing (tokens, styles, component specs)

See [systems/luffu](./systems/luffu) for full documentation.

## Structure

```
systems/
├── luffu/              # Luffu design system
│   ├── tokens/         # Design tokens (JSON, CSS)
│   ├── styles/         # Base stylesheets
│   ├── components/     # Component implementations
│   ├── src/            # Source files
│   ├── DESIGN.md       # Brand & design guidelines
│   └── package.json
└── [future systems]
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Build
```bash
npm run build
```

### Develop
```bash
npm run dev
```

## Usage

Import tokens and styles into your projects:

```css
@import '@luffu/design-system/styles/variables.css';
```

```js
import tokens from '@luffu/design-system/tokens/tokens.json';
```

## Claude Design

These design systems are synced to [Claude Design](https://claude.ai/design) so the design agent builds UIs with actual brand components.

---

Last updated: 2026-09-10

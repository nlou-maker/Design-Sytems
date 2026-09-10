# Design Systems

Multi-brand design systems for Healthy with Naudia and AI consulting projects.

## Two kinds of folder here — read this before adding anything

**`systems/<name>/`** — real, usable design systems for brands the user actually owns. These get built out with components, get synced to Claude Design, and are safe to build products from.

**`references/<name>/`** — brand material that was studied or extracted for structure/inspiration, but does **not** belong to the user. Never synced to Claude Design, never used as-is for real work. See `NOT_MY_BRAND.md` inside each reference folder for specifics.

If you're a Claude Code session adding a new brand, see `CLAUDE.md` for the full workflow — including the provenance check that decides which folder a new brand goes in.

## Systems

*(none yet — see References below)*

## References

### Luffu
Studied for its component/token/Storybook structure. **Not the user's brand** — extracted from a real live site (`luffu.com`), with a licensed typeface (ABC Arizona) that isn't hers to use. See [references/luffu/NOT_MY_BRAND.md](./references/luffu/NOT_MY_BRAND.md).

- 8 example components (Button, Card, Heading, Text, Hero, Navigation, Footer, Container), verified in Storybook, built on free stand-in fonts
- Useful as a working example of the folder pattern — not as source material for real work

## Structure

```
design-sytems/
├── systems/             # real, usable brands — synced to Claude Design
│   └── <name>/
│       ├── tokens/
│       ├── styles/
│       ├── src/
│       ├── DESIGN.md
│       └── package.json
└── references/          # studied material that isn't the user's brand
    └── <name>/
        ├── NOT_MY_BRAND.md   # why it's here, what not to do with it
        └── (same shape as systems/<name>/)
```

## Getting Started

Once a real system exists under `systems/`:
```bash
npm install
npm run dev    # runs Storybook for that system
```

## Claude Design

Systems under `systems/` get synced to [Claude Design](https://claude.ai/design) via `/design-sync` (user-invoked only) so the design agent builds UIs with actual brand components. Anything under `references/` is deliberately excluded from that.

---

Last updated: 2026-09-10

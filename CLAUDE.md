# design-sytems

Multi-brand design systems monorepo (npm workspaces). Each brand lives in `systems/<name>/`. Built to feed [Claude Design](https://claude.ai/design) via `/design-sync`, and to be built out by Claude Code sessions working in this repo.

Repo note: the org-level repo name is spelled `Design-Sytems` (typo, kept as-is — renaming it breaks the remote).

## Two kinds of folder: `systems/` vs `references/`

**`systems/<name>/`** — real, usable design systems for brands the user actually owns. Built out fully, synced to Claude Design, safe to build products from.

**`references/<name>/`** — brand material that was studied or extracted but does **not** belong to the user (e.g. Luffu — pulled from a live site, `luffu.com`, with a licensed typeface that isn't hers). Never synced to Claude Design. Never used as-is for real work. Every folder here carries a `NOT_MY_BRAND.md` explaining why.

Which one a new brand goes into is decided by the provenance check below — **before** creating either folder, not after.

## Adding a new design system

The user drops in raw spec files for a brand — typically some subset of: a `DESIGN.md`-style brand doc, `tokens.json`, `variables.css`, a Tailwind `theme.css`. Sometimes that's all that exists yet; that's expected, not a blocker.

1. **Provenance check first, before creating any folder:** if `tokens.json` carries an extraction/scrape marker (e.g. an `$extensions` block naming a source URL and an `extractedAt` timestamp), or a named typeface looks like a commercial/licensed family (ABC-prefixed, Whyte, GT-, Söhne, Canela, etc.), stop and ask the user directly: is this their brand, or reference material they were studying?
   - **Their brand** → `systems/<name>/`, full workflow below.
   - **Not their brand / unsure** → `references/<name>/`, plus a `NOT_MY_BRAND.md` in that folder stating what it is and why it's not to be used as-is. Do not build it out further than what's needed to study the pattern — no full component set, no font sourcing, no Storybook polish. Do not add it to root `package.json` workspaces (`systems/*` already excludes it structurally — keep it that way).
   - This happened on Luffu: it was built out fully as if it were the user's brand before the provenance check ran. Don't repeat that — check first, build second.
2. For a confirmed `systems/<name>/` entry: create the folder and commit the raw spec files first, verbatim, before writing any component code.
3. **Read the whole spec before building anything.** Pull out: the real color tokens, the type scale with actual font names, spacing scale, the **Components** section (this defines what's actually asked for — don't invent beyond it), and any Do's/Don'ts.

## Which components to build — "necessary for everyday use," not the whole spec

Don't mechanically build every component the spec's prose mentions. Build the small set that lets someone assemble a real page, scoped to what the spec actually documents:

- **Button** — primary + a secondary/ghost variant
- **Heading** — using the system's real size scale, not arbitrary sizes
- **Text** — body copy, with the system's real size/color variants
- **Card** — only if the spec documents a card pattern
- **Container** — layout wrapper: page max-width, section padding/background
- **Navigation** — only if the spec documents a header pattern
- **Footer** — only if the spec documents one
- **Hero** — only if a hero/banner pattern is central to the brand (e.g. Luffu's full-bleed photography hero was a signature element, not a guess)

Skip anything not evidenced in the spec. Ask before inventing a UI pattern the spec doesn't describe.

## Build standard — non-negotiable

This was learned the hard way on the first pass at Luffu: a component library was committed without ever being run, and it silently didn't work (broken Storybook build, dead Tailwind classes with no Tailwind wired up, missing fonts falling back to system sans). Every component must be **proven**, not assumed:

1. Style from the system's real CSS custom properties / tokens. Never write Tailwind utility classes unless a Tailwind build is actually configured in that system's package — dead classes look like they work and silently don't.
2. `npx tsc --noEmit` must be clean.
3. Storybook must actually build: `npx storybook build`. If the webpack5 builder rejects `.tsx` files, switch to `@storybook/react-vite` — this repo's Luffu system needed that swap; Vite handles TSX natively.
4. **A clean build is not proof it renders correctly.** Actually load each story in a headless browser and screenshot it — Playwright is available, Chromium is prebuilt at `/opt/pw-browsers/chromium` (pass `executablePath` explicitly; don't run `playwright install`). Check computed styles (`getComputedStyle`, `document.fonts.check(...)`) for at least the typography-critical components, and look at the actual screenshot before calling anything done.
5. **Fonts:** if the spec names a licensed/commercial typeface and no font files were provided, do not leave typography on a silent system-font fallback. Self-host free, structurally-similar substitutes — download real `.woff2` files (e.g. from Google Fonts) into `systems/<name>/fonts/`, wire real `@font-face` rules in a `fonts.css`, and comment clearly what to swap in once the licensed files are available. Verify the substitute font actually loads (`document.fonts.check`) — don't just trust the CSS.
6. Commit only after steps 2–5 pass, with your own verification (typecheck output, build output, a real screenshot) — not "the build succeeded" alone.

Clean up any scratch/verification scripts before committing (e.g. a `.verify.mjs` or `.shoot.mjs` used to screenshot stories) — they're not part of the deliverable.

## Syncing to Claude Design

`/design-sync` is **user-invoked only** — it cannot be triggered by Claude automatically (`Skill` tool calls to it are blocked by design). It also requires design-system authorization that a headless claude.ai/code session doesn't have by default. If `DesignSync` calls fail with an authorization error, tell the user:
- On claude.ai/code: use Claude Design's **"Send to Claude Code Web"** action from an existing or new project at claude.ai/design — that seeds the authorization into the workspace.
- From an interactive terminal session: run `/design-login` once; that authorization carries over to future headless sessions.

## Repo structure

```
design-sytems/
├── README.md
├── package.json          # npm workspaces: systems/*
└── systems/
    └── <name>/
        ├── package.json  # @<name>/design-system
        ├── README.md
        ├── DESIGN.md              # or whatever spec doc the user provided
        ├── tokens/tokens.json
        ├── styles/
        │   ├── variables.css
        │   ├── theme.css          # Tailwind v4 theme, if applicable
        │   ├── fonts.css          # @font-face rules
        │   └── index.css          # imports fonts.css + variables.css, base styles
        ├── fonts/*.woff2
        ├── .storybook/
        │   ├── main.ts            # framework: '@storybook/react-vite'
        │   └── preview.ts         # imports styles/index.css
        └── src/
            ├── <Component>.tsx
            ├── <Component>.stories.tsx
            └── index.tsx           # exports every component + prop types
```

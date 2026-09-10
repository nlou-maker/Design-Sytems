# AI Assets Design Library

Purpose
-------
A reusable design/content system for producing polished AI consulting guides,
client resources, checklists, workflows, reference sheets, and lead magnets.

What is included
----------------
01 Design Systems/
- Penline Light
- Penline Dark
- Penline Blue
- design-tokens.json

02 Templates/
- Cover Page
- Tutorial Guide
- Checklist
- AI Workflow
- Reference Sheet
- Lead Magnet PDF

How to use
----------
1. Choose a template based on the type of document.
2. Choose a theme: Penline Light, Penline Dark, or Penline Blue.
3. Replace bracketed placeholder content only.
4. Keep the existing component structure and token-based styling.
5. When asking an AI to create a new document, explicitly name the template
   and theme, e.g.:
   "Create an AI Workflow using the AI Assets Design Library,
   04 AI Workflow Template, rendered in Penline Blue."
6. For PDF output, render the finished HTML through a browser/HTML-to-PDF
   workflow rather than redesigning it from scratch.

System philosophy
-----------------
The three themes are skins over a shared visual language. Templates are
content structures, not separate designs for each theme. This avoids
maintaining 18 separate template/theme combinations.

Source basis
------------
The three design-system files in this library are the supplied Penline
Dark, Penline Light, and Penline Blue HTML documents. Their shared system
includes color tokens, typography, spacing, strokes, radii, buttons,
sticky-note callouts, code boxes, numbered steps, tier chips, texture,
responsive behavior, and reduced-motion handling.

Important
---------
The templates are a new reusable layer built on top of the supplied systems.
They are intentionally generic so the same six templates can be rendered
with any of the three themes.

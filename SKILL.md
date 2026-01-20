---
name: color-palettes
description: Generate professional website color palettes based on the user's prompt (mood, theme, style, or a base color). Use for web UI palette tokens and JSON exports; prioritize prompt cues in the output and run contrast checks only when explicitly requested.
---

# Website Color Palette

## Collect inputs

- Use the user's prompt as the only required input; do not require industry or product direction.
- If the prompt includes mood keywords or a base color, use them; otherwise infer a mood from the prompt.
- Generate concise JSON tokens in memory; do not write a file and do not print the JSON in the response. Then show a console preview by running the bundled script (no user confirmation).
- Run contrast checks only if the user explicitly asks; if asked, collect theme intent (soft, professional, high-contrast).
- Default to 3 palette options unless the user asks for one.
- If the prompt is vague, generate three distinct moods: fresh tropical, creamy minimal, and playful modern.
- Avoid follow-up questions; ask at most one only if the prompt is empty or contradictory.

## Build palette (prompt-first)

1. Derive 2-3 anchor colors from the prompt's theme, mood, or imagery. If an industry is explicitly mentioned, you may consult references/industry-palettes.md.
2. If a base color is provided, align the anchors to that hue family.
3. Choose a harmony scheme that fits the mood (default: analogous plus one accent).
4. Build a neutral ramp for background, surface, text, muted, and border.
5. Assign roles: primary, secondary, accent, background, surface, text, muted, border.
6. Name colors with prompt-relevant naming; avoid generic labels.

## Contrast checks (only if asked)

- Use references/contrast-themes.md to map theme intent to AA or AAA.
- Adjust lightness first, then chroma; avoid hue drift unless required.
- Report any remaining failures in notes.

## Output JSON tokens (concise)

Create a JSON array with 1-3 options and keep it in memory only. Do not include the JSON in the response unless the user explicitly asks for it.

```json
[
  {
    "name": "string (1-24 chars)",
    "desc": "string, single line, <= 140 chars",
    "meta": {
      "prompt": "string",
      "mood": ["string"],
      "contrast": "none|AA|AAA"
    },
    "roles": {
      "primary": { "name": "string", "hex": "#RRGGBB" },
      "secondary": { "name": "string", "hex": "#RRGGBB" },
      "accent": { "name": "string", "hex": "#RRGGBB" },
      "background": { "name": "string", "hex": "#RRGGBB" },
      "surface": { "name": "string", "hex": "#RRGGBB" },
      "text": { "name": "string", "hex": "#RRGGBB" },
      "muted": { "name": "string", "hex": "#RRGGBB" },
      "border": { "name": "string", "hex": "#RRGGBB" }
    }
  }
]
```

- Use hex format ^#[0-9A-Fa-f]{6}$.
- Include oklch values only if the user asks.
- Include "notes" only when needed (warnings or adjustments).

## Console preview (default)

Always render a console preview after generating the JSON using the bundled script. Do not ask the user for confirmation.

The script accepts a file path or stdin. Example with a file:

```bash
node skill/scripts/preview-ansi.js palette.json
```

When executing in the agent, pipe the in-memory JSON into the script and include only the preview stdout in the response.

## Optional formats

If the user asks for CSS variables or Tailwind config, see references/output-formats.md.

## Non-goals

- Do not implement UI or CSS frameworks.
- Do not call external APIs unless explicitly asked.

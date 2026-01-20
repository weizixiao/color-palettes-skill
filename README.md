# Website Color Palette Skill

## Introduction

This skill generates professional website color palettes from a short prompt. It is designed for UI palette tokens and provides a quick, visual console preview of the resulting colors. Visit https://duckcolor.com/ for the product context.

## Description

- Input: a mood/theme prompt (optionally with a base color).
- Output: JSON tokens kept in memory and an ANSI color preview in the console by default.
- Default: three palette options unless the prompt asks for one.
- Contrast checks only when explicitly requested.

## Example

Prompt:

```
Fresh tropical for Duckcolor UI.
```

## Output Preview

```
#1 Tropical Pop - Fresh tropical for Duckcolor UI; using color-palette per request.
primary    Lagoon Teal #1CB6A4
secondary  Sunrise Sand #F2C56B
accent     Coral Punch #FF6A5E
background Cloud Foam #F9FBFA
surface    Mist Glass #EEF5F2
text       Ink Tide #1E2A2B
muted      Sea Fog #8FA8A3
border     Drift Line #D5E0DC

#2 Cream Studio - Creamy minimal with warm neutrals and gentle accents.
primary    Espresso Slate #3E3A35
secondary  Oat Linen #D9C9B7
accent     Cinnamon Clay #C56A4A
background Porcelain #FAF7F2
surface    Soft Paper #F1ECE5
text       Deep Roast #2B2520
muted      Mellow Taupe #9A8F84
border     Parchment Edge #E0D8CF

#3 Playful Signal - Playful modern with bold primaries and clean neutrals.
primary    Pixel Blue #3B6CFF
secondary  Lime Kick #8BE04A
accent     Magenta Pop #FF4FA3
background Ice Violet #F7F8FF
surface    Soft Pixel #EEF1FF
text       Night Ink #1C1E2A
muted      Clouded Steel #A0A6C0
border     Light Frame #D5DBF2
```

Notes:

- The preview is rendered using `skill/scripts/preview-ansi.js` with ANSI color blocks.
- JSON output is kept in memory and not printed unless explicitly requested.

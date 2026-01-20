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

![Output Preview](./output.png)

Notes:

- The preview is rendered using `skill/scripts/preview-ansi.js` with ANSI color blocks.
- JSON output is kept in memory and not printed unless explicitly requested.

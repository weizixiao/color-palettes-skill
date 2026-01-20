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

Palette 1: Tropical Pop

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Name</th>
      <th>Hex</th>
      <th>Swatch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>primary</td>
      <td>Lagoon Teal</td>
      <td>#1CB6A4</td>
      <td bgcolor="#1CB6A4">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>secondary</td>
      <td>Sunrise Sand</td>
      <td>#F2C56B</td>
      <td bgcolor="#F2C56B">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>accent</td>
      <td>Coral Punch</td>
      <td>#FF6A5E</td>
      <td bgcolor="#FF6A5E">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>background</td>
      <td>Cloud Foam</td>
      <td>#F9FBFA</td>
      <td bgcolor="#F9FBFA">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>surface</td>
      <td>Mist Glass</td>
      <td>#EEF5F2</td>
      <td bgcolor="#EEF5F2">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>text</td>
      <td>Ink Tide</td>
      <td>#1E2A2B</td>
      <td bgcolor="#1E2A2B">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>muted</td>
      <td>Sea Fog</td>
      <td>#8FA8A3</td>
      <td bgcolor="#8FA8A3">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>border</td>
      <td>Drift Line</td>
      <td>#D5E0DC</td>
      <td bgcolor="#D5E0DC">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
  </tbody>
</table>

Palette 2: Cream Studio

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Name</th>
      <th>Hex</th>
      <th>Swatch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>primary</td>
      <td>Espresso Slate</td>
      <td>#3E3A35</td>
      <td bgcolor="#3E3A35">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>secondary</td>
      <td>Oat Linen</td>
      <td>#D9C9B7</td>
      <td bgcolor="#D9C9B7">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>accent</td>
      <td>Cinnamon Clay</td>
      <td>#C56A4A</td>
      <td bgcolor="#C56A4A">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>background</td>
      <td>Porcelain</td>
      <td>#FAF7F2</td>
      <td bgcolor="#FAF7F2">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>surface</td>
      <td>Soft Paper</td>
      <td>#F1ECE5</td>
      <td bgcolor="#F1ECE5">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>text</td>
      <td>Deep Roast</td>
      <td>#2B2520</td>
      <td bgcolor="#2B2520">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>muted</td>
      <td>Mellow Taupe</td>
      <td>#9A8F84</td>
      <td bgcolor="#9A8F84">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>border</td>
      <td>Parchment Edge</td>
      <td>#E0D8CF</td>
      <td bgcolor="#E0D8CF">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
  </tbody>
</table>

Palette 3: Playful Signal

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Name</th>
      <th>Hex</th>
      <th>Swatch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>primary</td>
      <td>Pixel Blue</td>
      <td>#3B6CFF</td>
      <td bgcolor="#3B6CFF">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>secondary</td>
      <td>Lime Kick</td>
      <td>#8BE04A</td>
      <td bgcolor="#8BE04A">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>accent</td>
      <td>Magenta Pop</td>
      <td>#FF4FA3</td>
      <td bgcolor="#FF4FA3">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>background</td>
      <td>Ice Violet</td>
      <td>#F7F8FF</td>
      <td bgcolor="#F7F8FF">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>surface</td>
      <td>Soft Pixel</td>
      <td>#EEF1FF</td>
      <td bgcolor="#EEF1FF">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>text</td>
      <td>Night Ink</td>
      <td>#1C1E2A</td>
      <td bgcolor="#1C1E2A">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>muted</td>
      <td>Clouded Steel</td>
      <td>#A0A6C0</td>
      <td bgcolor="#A0A6C0">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
      <td>border</td>
      <td>Light Frame</td>
      <td>#D5DBF2</td>
      <td bgcolor="#D5DBF2">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
  </tbody>
</table>

Notes:

- The preview is rendered using `skill/scripts/preview-ansi.js` with ANSI color blocks.
- JSON output is kept in memory and not printed unless explicitly requested.

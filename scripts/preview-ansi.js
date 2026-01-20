#!/usr/bin/env node
const fs = require("fs");

const args = process.argv.slice(2);
const input = args[0] ? fs.readFileSync(args[0], "utf8") : fs.readFileSync(0, "utf8");

if (!input.trim()) {
  console.error("No JSON input");
  process.exit(1);
}

let data;
try {
  data = JSON.parse(input);
} catch (error) {
  console.error("Invalid JSON input");
  process.exit(1);
}

const palettes = Array.isArray(data) ? data : [data];
const isHexColor = (hex) => typeof hex === "string" && /^#[0-9A-Fa-f]{6}$/.test(hex);
const hexToRgb = (hex) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16)
});

const swatch = (hex) => {
  if (!isHexColor(hex)) return "  ";
  const { r, g, b } = hexToRgb(hex);
  return `\x1b[48;2;${r};${g};${b}m  \x1b[0m`;
};

palettes.forEach((palette, index) => {
  const name = palette && typeof palette.name === "string" ? palette.name : `Palette ${index + 1}`;
  const desc = palette && typeof palette.desc === "string" ? ` - ${palette.desc}` : "";
  console.log(`\n#${index + 1} ${name}${desc}`);

  const roles = palette && palette.roles ? palette.roles : {};
  Object.entries(roles).forEach(([role, value]) => {
    const hex = value && typeof value.hex === "string" ? value.hex : "";
    const label = value && typeof value.name === "string" ? value.name : "";
    console.log(`${swatch(hex)} ${role.padEnd(10)} ${label} ${hex}`);
  });
});

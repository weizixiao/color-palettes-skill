# Output formats

Use only when the user asks for formats beyond JSON tokens.

## CSS variables

```css
:root {
  --color-primary: #RRGGBB;
  --color-secondary: #RRGGBB;
  --color-accent: #RRGGBB;
  --color-background: #RRGGBB;
  --color-surface: #RRGGBB;
  --color-text: #RRGGBB;
  --color-muted: #RRGGBB;
  --color-border: #RRGGBB;
}
```

## Tailwind config

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: "#RRGGBB",
        secondary: "#RRGGBB",
        accent: "#RRGGBB",
        background: "#RRGGBB",
        surface: "#RRGGBB",
        text: "#RRGGBB",
        muted: "#RRGGBB",
        border: "#RRGGBB"
      }
    }
  }
};
```

## SCSS map

```scss
$colors: (
  primary: #RRGGBB,
  secondary: #RRGGBB,
  accent: #RRGGBB,
  background: #RRGGBB,
  surface: #RRGGBB,
  text: #RRGGBB,
  muted: #RRGGBB,
  border: #RRGGBB
);
```

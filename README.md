# Aimara Bolger — Clínica de Estética

Single-page marketing website for a cosmetic clinic in Montevideo, Uruguay.

## Stack

- **Next.js 16.2.5** — App Router, Turbopack
- **React 19.2.4**
- **Tailwind CSS v4** — CSS-first config via `app/globals.css`
- **TypeScript 5**
- **Fonts:** Cormorant Garamond (headings) + Lato (body) via `next/font/google`

## Getting Started

```bash
pnpm install
pnpm dev        # runs on http://localhost:3002
```

## Project Structure

```
app/
  globals.css       — Tailwind import + @theme color/font tokens
  layout.tsx        — Root layout, fonts, metadata
  page.tsx          — Single-page content (server component)
  icon.svg          — Favicon (AB monogram)
  components/
    Nav.tsx         — Fixed header with mobile menu (client component)
```

## Color Palette

| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| `cream`        | `#f5f0e8` | Hero backgrounds             |
| `cream-light`  | `#faf8f4` | Main page background         |
| `cream-dark`   | `#e8e2d8` | Borders, dividers, card grid |
| `brown`        | `#3a3028` | Primary text, footer bg      |
| `brown-mid`    | `#6b5c50` | Secondary text               |
| `brown-light`  | `#9a8a7e` | Muted text, captions         |
| `sage`         | `#7d9070` | Accent, buttons, icons       |
| `sage-dark`    | `#5d7052` | Button hover state           |
| `sage-light`   | `#d8e4d0` | Icon circle backgrounds      |

## Contact / Business Data

- **WhatsApp:** +598 99 067 539
- **Instagram:** [@aimara.bolger](https://www.instagram.com/aimara.bolger)
- **Address:** Roque Graseras 828/302 esq. Scoseria, Montevideo, Uruguay

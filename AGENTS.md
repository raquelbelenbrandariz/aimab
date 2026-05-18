<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project: Aimara Bolger — Clínica de Estética

Single-page marketing website for a cosmetic clinic in Montevideo, Uruguay.

## Stack
- Next.js 16.2.5 (Turbopack by default, App Router)
- React 19.2.4
- Tailwind CSS v4 (CSS-first config — no `tailwind.config.js`)
- TypeScript 5

## Key conventions
- Dev server runs on **port 3002** (`pnpm dev`)
- All custom Tailwind tokens live in `app/globals.css` inside `@theme {}`
- Font variables are set in `app/layout.tsx` and consumed via CSS variables `--font-cormorant` / `--font-lato`
- Use `font-serif` for Cormorant Garamond (headings), `font-sans` for Lato (body)
- No `src/` directory — pages and components live directly under `app/`

## Color palette (defined in `app/globals.css`)
| Token            | Hex       | Usage                        |
|------------------|-----------|------------------------------|
| `cream`          | `#f5f0e8` | Hero backgrounds             |
| `cream-light`    | `#faf8f4` | Main page background         |
| `cream-dark`     | `#e8e2d8` | Borders, dividers, card grid |
| `brown`          | `#3a3028` | Primary text, footer bg      |
| `brown-mid`      | `#6b5c50` | Secondary text               |
| `brown-light`    | `#9a8a7e` | Muted text, captions         |
| `sage`           | `#7d9070` | Accent, buttons, icons       |
| `sage-dark`      | `#5d7052` | Button hover state           |
| `sage-light`     | `#d8e4d0` | Icon circle backgrounds      |

## File structure
```
app/
  globals.css          — Tailwind import + @theme tokens
  layout.tsx           — Root layout, Google Fonts, metadata
  page.tsx             — Full single-page content (server component)
  components/
    Nav.tsx            — Fixed header with mobile menu (client component)
```

## Contact / business data
- WhatsApp: `https://wa.me/59899067539` (+598 99 067 539)
- Instagram: `https://www.instagram.com/aimara.bolger`
- Address: Roque Graseras 828/302 esq. Scoseria, Montevideo, Uruguay

## Next.js 16 gotchas to remember
- `params` and `searchParams` in pages/layouts are now **async** — always `await` them
- `scroll-behavior: smooth` in CSS works as-is (Next.js no longer overrides it during navigation)
- `middleware.ts` is renamed to `proxy.ts` in v16
- Turbopack does not support Webpack's `resolve.fallback` — use `turbopack.resolveAlias` instead
- `revalidateTag` now requires a second `cacheLife` argument

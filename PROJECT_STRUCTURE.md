# Laikfvea Project Structure

This project is organized so page copy, product data, links and visual sections can be edited without digging through one large file.

## Pages

- Homepage: `app/page.tsx`
- Hydrogen Water: `app/hydrogen-water/page.tsx`
- Future product pages: `app/products/go/page.tsx` and `app/products/pro/page.tsx`
- Future brand pages: `app/technology/page.tsx`, `app/about/page.tsx`, `app/support/page.tsx`

Route files should stay short. They import page sections and place them in order.

## Homepage Sections

Homepage section components live in `components/home/`.

To add a new homepage section:

1. Create a new PascalCase component in `components/home/`.
2. Add any editable copy to `content/homepage.ts`.
3. Import the component in `app/page.tsx`.
4. Place it in the page order.

## Content

Editable text and repeated lists live in `content/`.

- Homepage copy: `content/homepage.ts`
- Hydrogen Water page copy and FAQ: `content/hydrogen-water.ts`
- Navigation/footer links: `content/navigation.ts`
- Starter page copy: `content/products.ts`, `content/technology.ts`, `content/about.ts`, `content/support.ts`

## Product Data

Product names, images and specifications live in `config/products.ts`.

Use this file to update GO or PRO product images, specs or descriptions used across the site.

## Links

External and internal URLs live in `config/links.ts`.

To update the Amazon GO product link, change `AMAZON_GO_URL` in `config/links.ts`.

## Images

Product and logo assets live in `public/`.

- GO bottle: `public/go/go-transparent.png`
- PRO bottle: `public/pro/pro-transparent.png`
- Logo: `public/logos/logo black.svg`

## Shared UI

Reusable UI components live in `components/ui/`.

Shared header, footer, logo and layout helpers live in `components/layout/`.

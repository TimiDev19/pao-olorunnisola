# P.A.O. Olorunnisola SAN & Co. website

Next.js App Router site built with React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

The Next configuration uses `next.config.mjs` for compatibility with Next.js installations that do not support TypeScript config files.

The source logo `public/logo.jpg` remains unchanged and is used in the footer and sharing metadata. A full-canvas transparent navbar version is provided as `public/logo-transparent.png`.

## Local development

```sh
npm install
npm run dev
```

Production checks:

```sh
npm run typecheck
npm run build
```

## Before launch

1. Set `NEXT_PUBLIC_SITE_URL` in the deployment environment to the firm's confirmed canonical domain. The local fallback is `https://example.com`; change it before launch so canonical links, Open Graph URLs, JSON-LD and the sitemap point to the real site.
2. Confirm all contact details, the exact map pin, preferred firm styling and profile details with the firm. Phone, email and address currently match the NBA Ilorin lawyer directory listing.
3. Obtain approval for the draft editorial articles, privacy notice and terms of use. Article publish dates are omitted until confirmed.
4. Add the firm's real GA4 measurement ID as `NEXT_PUBLIC_GA_ID` and its genuine Google Search Console verification value as `GOOGLE_SITE_VERIFICATION` when available. Connect Bing Webmaster Tools with its real verification value. No analytics or fake verification code is included by default.
5. Add an email service or backend if submissions should be delivered without the visitor's mail application. The current form validates fields and composes an email locally; it does not transmit or store enquiries.

The Afebabalola reference could not be retrieved during initial review (403 response). The visual direction therefore uses an original restrained editorial layout rather than reproducing that site.

# AIBIGeni Website — Working Notes

**Date:** 2025-09-28
**Context:** Static one-page site deployed to Vercel with custom dark theme, product name **SkinTelGeni**, Services, Packages, mailto contact, and security headers.

## What’s already done
- **Design/Theme:** Tailwind CDN with custom color `slatebg` (deep slate background).
- **Security:** `vercel.json` adds HSTS, CSP (allows Tailwind CDN only), X-Frame-Options=DENY, etc.
- **Contact:** Button triggers `mailto:` to `reachme@aibigeni.com` (CC `sales@aibigeni.com`) via `main.js`.
- **Content:** 
  - Product renamed to **SkinTelGeni**
  - **Services:** AI for Personal Wellness, Custom AI Agents, Full-Stack App Builds, **Game Development**, **Enterprise Integrations (LangChain)**
  - **Packages:** Prototype, Enterprise Integration, Launch
- **Icons/Manifest:** Favicon set, PWA manifest present.
- **Sitemap/Robots:** Basic SEO files included.

## How we got here (quick timeline)
- Converted initial Next.js-style design to static HTML for simpler hosting.
- Added brand assets and contact emails.
- Wired `mailto:` for Send button (no backend required).
- Added Game Dev + Enterprise Integrations service cards.
- Introduced Packages section with time/cost ranges.
- Fixed Tailwind config ordering so dark theme persists in production.

## How to continue next time
1. **Edits:** Change text in `index.html`, small JS in `main.js`.
2. **Deploy:**  
   ```bash
   vercel link --project aibigeni
   vercel --prod --archive=tgz
   ```
3. **If Tailwind CDN is removed (recommended later):**
   - Compile a `styles.css` (we can generate it) and replace the CDN script with a `<link rel="stylesheet" href="/styles.css">`.
   - Tighten CSP in `vercel.json` to `script-src 'self'` and `style-src 'self'`.
4. **Optional upgrades:**
   - Add `/privacy` and `/terms` pages.
   - Serverless email (Resend/SendGrid) instead of `mailto:`.
   - Add Open Graph/Twitter meta tags for rich previews.
   - Analytics (Plausible or GA4).
   - Migrate to Next.js if you want server-rendered pages or a blog.

## Known constraints
- `mailto:` requires a local email app; it doesn’t send from the browser.
- Tailwind CSS via CDN requires the config script to load **before** the CDN import.

## Contacts on page
- reachme@aibigeni.com
- sales@aibigeni.com

*When you upload this folder to me later, I’ll read this file first and continue from here.*

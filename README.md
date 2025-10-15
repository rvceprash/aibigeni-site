# AIBIGeni Website

Static landing page for **AIBIGeni** (SkinTelGeni product). Deployed on Vercel.

## Contents
- `index.html` — landing page
- `main.js` — footer year + mailto wiring
- `vercel.json` — security headers (HSTS, CSP, etc.)
- Icons: `favicon-32.png`, `favicon-512.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`
- Metadata: `site.webmanifest`, `robots.txt`, `sitemap.xml`
- Branding: `aibigeni-logo-1024.png`
- `NOTES.md` — working notes for future changes
- `CHANGELOG.md` — dated change history

## Local preview
Double-click `index.html` or:
```bash
python3 -m http.server
# open http://localhost:8000
```

## Deploy to Vercel
```bash
vercel link --project aibigeni
vercel --prod --archive=tgz
```

## Push to GitHub (dated commit)
```bash
git init
git add .
git commit -m "Site backup 2025-09-28: SkinTelGeni + Packages + Integrations + dark theme fix"
git branch -M main
# Create a new repo on GitHub called aibigeni-site (or use gh CLI):
# gh repo create aibigeni-site --public --source=. --remote=origin --push
git remote add origin https://github.com/<youruser>/aibigeni-site.git
git push -u origin main

# Optional: create a tag with the date
git tag -a v-2025-09-28 -m "Backup 2025-09-28"
git push origin v-2025-09-28
```

## Domain
- Add `aibigeni.com` in Vercel Project → Settings → Domains.
- GoDaddy DNS:
  - `@` (A) → `76.76.21.21`
  - `www` (CNAME) → `cname.vercel-dns.com`
- Make `aibigeni.com` **Primary** in Vercel.

## License
All site code/graphics © AIBIGeni, 2025-09-28. Rights reserved unless you choose to add a license.

# Lena D. Swamikannan — academic website (updated)

Ready to publish to **https://lenadsk.github.io/**. This is a modified version of your existing GitHub Pages website, preserving the navigation, research projects, responsive design, and theme toggle.

## Upload the update

1. Download and extract the ZIP.
2. Open https://github.com/LenaDSK/lenadsk.github.io
3. Click **Add file → Upload files** (or use GitHub Desktop). Upload the **contents** of this ZIP into the repository **root**, not inside a nested folder. Files in nested folders such as `assets/lena-headshot.webp` and `documents/Lena_D_Swamikannan_Academic_CV.pdf` must keep their relative paths.
4. Choose to replace **index.html**, **styles.css**, and **README.md** with the newer versions. Keep `script.js` and favicon assets.
5. Click **Commit changes**. Your existing **Settings → Pages** branch (`main`, `/(root)`) is already set up; no need to change it. Once GitHub has finished deploying, hard-refresh the site (Ctrl+F5).

**If GitHub refuses folder uploads:** Open `assets` in the repository, click Add file → Upload files, then upload `lena-headshot.webp` there. Create a `documents` folder by uploading `documents/Lena_D_Swamikannan_Academic_CV.pdf` (drag the entire folder into GitHub's upload area), or create the folder first and upload the PDF within it.

## Included

- Professional headshot from your saved files (`assets/lena-headshot.webp`), replacing the `LS.` initials graphic.
- Published research references: 2024 IEEE BHI DOI, 2025 arXiv co-authored preprint, and 2026 arXiv preprint.
- Federated edge-learning accepted manuscript title, without inventing a public DOI or URL.
- LinkedIn and GitHub profile links; your supplied direct **Google Scholar profile** and a clearly labeled **ORCID placeholder** (no invented iD).
- Updated 2026 academic CV PDF assembled from your saved 2026 academic CV details and research records. **Please review publication statuses and your preferred contact details** before sharing publicly. Replace the PDF in `documents/` using the same filename whenever your CV changes.
- `robots.txt`, `sitemap.xml`, canonical URL, Open Graph tags, and `schema.org/Person` metadata with verified social links.

## Google Scholar & ORCID

Your verified Google Scholar profile URL is already linked in the website: `https://scholar.google.com/citations?user=9zsQAH0AAAAJ&hl=en`.

ORCID is shown as **pending**, without an invented URL. If you have an ORCID, provide its exact `https://orcid.org/0000-...` address to link it later.

## Google Search Console — owner action needed

Google Search Console cannot be completed or verified by this ZIP alone: you need to sign in as the verified owner. After uploading the ZIP:

1. Open https://search.google.com/search-console/ and sign in.
2. Add a **URL-prefix** property: `https://lenadsk.github.io/` (include the trailing slash).
3. Verify via an **HTML file**: Google will offer a unique file like `google123456789.html`. Download that exact file, upload it into the root of your GitHub repo, and click **Verify** in Search Console. Alternatively, use the provided meta-tag method by copying your unique verification token into `index.html`'s head and committing the update.
4. Submit `https://lenadsk.github.io/sitemap.xml` in the **Sitemaps** report.
5. Use **URL Inspection** for `https://lenadsk.github.io/` → **Request indexing**.

Google decides whether/when to index the site; it may take days/weeks and is not guaranteed.

## Structure

- `index.html` — website content + profile links + structured data
- `styles.css` — responsive light/dark styles
- `script.js` — theme, navigation, research filter interactions
- `assets/lena-headshot.webp` — professional portrait
- `documents/Lena_D_Swamikannan_Academic_CV.pdf` — updated academic CV PDF
- `robots.txt` and `sitemap.xml` — search-engine discovery

No build step or coding environment required. For local preview, open `index.html` or run `python -m http.server 8000` from this folder.

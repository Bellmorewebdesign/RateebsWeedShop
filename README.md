# Rateeb's Weed Shop — Website

A modern, single-page marketing site for Rateeb's Weed Shop
(2043 Wellwood Ave, Farmingdale, NY 11735 · (631) 460-3441 · open 24/7).

Plain HTML, CSS and JavaScript. No build step, no npm, no framework —
open `index.html` in a browser and it just works.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All the page content (hero, menu, reviews, map, footer) |
| `styles.css` | All the styling and the colour variables |
| `script.js` | Age gate, mobile menu, scroll effects |
| `assets/` | Photos and the favicon |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Colours

The palette was sampled straight out of the photo of the sign on the building:

| Token | Hex | Where it came from |
| --- | --- | --- |
| `--green` | `#6ADF30` | The green letters on the sign in daylight |
| `--neon` | `#BBFF00` | The same sign glowing at night |
| `--white` | `#F2F5FA` | The white letters on the sign |
| `--ink` | `#0A0C0A` | The dark trim on the building |

They all live at the top of `styles.css` in the `:root` block. Change one
value there and it updates everywhere on the site.

## Editing common things

- **Phone number** — search `index.html` for `6314603441` and `(631) 460-3441`.
- **Address** — search for `Wellwood`.
- **Hours** — search for `24/7` and `Open 24 hours`.
- **Reviews** — the `<section id="reviews">` block; copy a `<figure class="review">` to add another.
- **Product categories** — the `<section id="shop">` block; copy an `<article class="card">`.

## Deploying to GitHub Pages

The site is built to be served from the repository root, so no build step is needed.

1. Merge this branch into `main`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` and folder `/ (root)`
4. Click **Save**. The site goes live in a minute or two at
   `https://<your-username>.github.io/<repo-name>/`.

## Testing locally

Double-click `index.html`, or run a tiny local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- The age gate remembers your answer for the browser session only
  (`sessionStorage`), so it reappears in a fresh tab. That's intentional.
- The map is a plain Google Maps embed — no API key required.

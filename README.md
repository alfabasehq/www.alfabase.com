# www.alfabase.com

The Alfabase marketing website, served at <https://www.alfabase.com>. Static
site built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## Commands

```
npm install      # once
npm start        # local preview at http://localhost:8080, rebuilds on change
npm run build    # writes the site to _site/
```

Pushing to `main` builds and deploys the site (`.github/workflows/pages.yml`).

## Where things are

| Path | What it holds |
|---|---|
| `src/*.html` | One file per page: front matter (`title`, `description`) followed by the page content. `src/product.html` is served at `/product/` |
| `src/404.html` | The page GitHub Pages shows for unknown URLs |
| `src/_includes/layout.njk` | The shared chrome: `<head>`, top bar, navigation and footer |
| `src/_data/site.json` | Site URL (used for canonical links) and the navigation list |
| `public/` | Files copied to the site as they are (`styles.css`, the logo) |
| `eleventy.config.js` | Build configuration |

Page content is plain HTML and is not run through a template engine; only the
layout is a template. Links are root-relative (`/product/`, `/styles.css`).

To add a page, create `src/<name>.html` with `title` and `description` front
matter, and add it to `nav` in `src/_data/site.json` if it belongs in the menu.

## Deployment

One-time setup in the GitHub repository:

1. **Settings → Pages → Source**: choose *GitHub Actions*.
2. **Settings → Pages → Custom domain**: enter `www.alfabase.com`.
3. Point the `www.alfabase.com` DNS record (CNAME) at `alfabasehq.github.io`.

Until the custom domain is set, the site is served from
`alfabasehq.github.io/www.alfabase.com/`; the workflow passes that path prefix
to Eleventy so links still work there.

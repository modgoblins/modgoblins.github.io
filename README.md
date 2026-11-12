# Mod Goblins Wiki

Source of https://modgoblins.github.io/ (GitHub Pages, `main` branch, root). Plain HTML and one shared stylesheet; no build step, no external files.

## Layout

```
index.html                 home: one card per mod
assets/site.css            shared styles (light and dark, Mod Goblins colours)
assets/mg-icon.png, mg-logo.webp, favicon.png   brand images
<mod-folder>/index.html    mod page: links to its guides
<mod-folder>/player/       player guide (index.html + img/)
<mod-folder>/admin/        admin guide (index.html + img/)
```

Mod folders: `NL-cluster-market` (Cluster Market).

## Adding a mod

1. Copy `NL-cluster-market/` to a new folder named after the mod and edit the three pages.
2. Add a `<li>` card for the mod to the `.mods` list in `index.html`.
3. Put screenshots in `<mod-folder>/<guide>/img/` and reference them with relative paths.
4. Keep links relative so the site keeps working on a custom domain.
5. When `assets/site.css` changes, raise the `?v=` number on the stylesheet link in every page (browsers keep the old file otherwise).

## Page building blocks (see `assets/site.css`)

- `.panels` + `.panel`: guide links on a mod page
- `.guide` + `.toc`: contents list beside the article
- `.steps`: numbered steps
- `<figure><img><figcaption>`: screenshot with caption
- `.note`: highlighted note
- `.table-wrap > table`: settings tables

Never put mod code, passwords, webhook addresses or tokens in this repository; it is public.

## Script

`assets/site.js` highlights the current section in the "On this page" list of guide pages. Guide pages load it at the end of `<body>`: `<script src="../../assets/site.js?v=2"></script>`.

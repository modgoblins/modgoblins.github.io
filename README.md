# Mod Goblins Wiki

Source of https://modgoblins.github.io/ (GitHub Pages, `main` branch, root). Plain HTML and one shared stylesheet; no build step, no external files.

## Layout

```
index.html                 home: one card per mod
assets/site.css            shared styles (light and dark)
<mod-folder>/index.html    mod page: links to its guides
<mod-folder>/player/       player guide (index.html + img/)
<mod-folder>/admin/        admin guide (index.html + img/)
```

Mod folders: `NL-cluster-market` (Cluster Market).

## Adding a mod

1. Copy `NL-cluster-market/` to a new folder named after the mod and edit the three pages.
2. Add a `<li class="card">` for the mod in `index.html`.
3. Put screenshots in `<mod-folder>/<guide>/img/` and reference them with relative paths.
4. Keep links relative so the site keeps working on a custom domain.

## Page building blocks (see `assets/site.css`)

- `.guide` + `.toc`: contents list beside the article
- `.steps`: numbered steps
- `<figure><img><figcaption>`: screenshot with caption
- `.note`: highlighted note
- `.table-wrap > table`: settings tables

Never put mod code, passwords, webhook addresses or tokens in this repository; it is public.

# sidmody.tech

personal site. astro + hand-rolled css. markdown for blog and project content.

## local dev

```bash
npm install
npm run dev
```

opens at `http://localhost:4321`.

## writing a blog post

1. create a file: `src/content/blog/your-post-slug.md`
2. add frontmatter at the top:
   ```yaml
   ---
   title: "your post title"
   description: "one-line summary for the index"
   date: 2026-06-01
   draft: false
   ---
   ```
3. write markdown. that's it.
4. set `draft: true` while you're working on it — it won't show on the index.
5. URL will be `/blog/your-post-slug/`.

## adding a project

same idea, but in `src/content/projects/`:

```yaml
---
title: "project title"
description: "one-liner for the index"
year: "2025"
role: "your role"        # optional
org: "where you did it"  # optional
order: 1                 # lower numbers show first
draft: false
---
```

## adding images

drop files in `/public/`, reference them as `/filename.jpg`. example:

```markdown
![locking mecanum wheel cad render](/locking-mecanum-cad.jpg)
```

## deployment (github pages)

1. push the repo to github
2. settings → pages → source → "github actions"
3. push to `main`, the workflow in `.github/workflows/deploy.yml` builds and deploys

### custom domain

once you have `sidmody.tech` (or whatever):
1. add a `CNAME` file to `/public/` containing just your domain: `sidmody.tech`
2. update `site` in `astro.config.mjs` to `https://sidmody.tech`
3. configure DNS at your registrar (github has docs)

### subpath deployment (`username.github.io/repo`)

if you're not using a custom domain, edit `astro.config.mjs`:
```js
site: 'https://yourusername.github.io',
base: '/your-repo-name',
```

## todos for the content pass

every TODO comment in the source marks something to fill in. main ones:

- [ ] real intro paragraph on landing page (`src/pages/index.astro`)
- [ ] longer bio on about page (`src/pages/about.astro`)
- [ ] confirm sovol writeup is okay to publish, flip `draft: false`
- [ ] write c3+ project page properly
- [ ] write locking mecanum project page properly (you have the most photos for this)
- [ ] add github link to header/footer when you want it public
- [ ] add favicon to `/public/favicon.svg` or `/public/favicon.ico`
- [ ] swap placeholder content for real content

## structure

```
src/
├── components/
│   └── DoublePendulum.astro      ← the landing animation
├── content/
│   ├── blog/                     ← markdown posts go here
│   ├── projects/                 ← markdown project pages go here
│   └── config.ts                 ← schema definitions
├── layouts/
│   └── BaseLayout.astro          ← header + footer wrapper
├── pages/
│   ├── index.astro               ← landing
│   ├── about.astro
│   ├── projects/
│   │   ├── index.astro           ← projects list
│   │   └── [...slug].astro       ← project detail (auto-generated)
│   └── blog/
│       ├── index.astro           ← blog list
│       └── [...slug].astro       ← post detail (auto-generated)
└── styles/
    └── global.css                ← all styling. design tokens at the top.
```

## design notes

- typography: Lora (serif body), Inter Tight (sans accents), JetBrains Mono (code)
- system-based dark mode. tokens defined in `src/styles/global.css` at the top.
- accent color: warm rust (`#8b3a2f` light, `#d68f7e` dark). change `--accent` in global.css if you want different.
- max reading width is intentionally tight (~640px) for prose. project/blog index pages can opt into wider via `<BaseLayout wide={true}>`.
- pendulum is an honest "untuned" energy-shaping swing-up + LQR catch. it tries, sometimes catches, drifts off, tries again. respects `prefers-reduced-motion`.

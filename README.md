# Static Publications Site (Jekyll + GitHub Pages)

Minimal, clean site for an About page and a Publications list powered by Markdown files. Built with Jekyll and auto-deployed via GitHub Pages.

## Quick start

1. Push this repo to GitHub (default branch `main`).
2. In GitHub, go to Settings → Pages, set Build and deployment to "GitHub Actions". The included workflow will publish on every push to `main`.
3. Optional: Update `_config.yml` with your `url` and `baseurl`.

## Writing

- About page lives at `about.md`.
- Publications are Markdown files in `_publications/` with front matter like:

```yaml
---
title: My Post Title
date: 2025-02-01
tags: [tag1, tag2]
summary: Optional one-liner shown on the list page.
---

Your Markdown content here. Images go in `assets/images/` (or any path) and code blocks are supported:

```python
print("Hello")
```
```

Add a new file, commit, and push. The homepage lists all publications with search and tag filtering.

## Local development

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000` (append your `baseurl` if set).

## Configuration

- `title` and `description` in `_config.yml` control site metadata.
- `url` should be `https://<user>.github.io` for user sites, or `https://<user>.github.io/<repo>` with `baseurl: "/<repo>"` for project sites.

## Structure

- `_publications/` — Markdown posts with `tags` and `date`.
- `_layouts/` — Templates (`home`, `publication`, `page`).
- `_includes/` — Header and footer.
- `assets/css/main.css` — Minimal styling.
- `assets/js/main.js` — Client-side search and tag filter.
## License

MIT
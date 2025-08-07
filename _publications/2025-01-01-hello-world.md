---
title: Hello, World
date: 2025-01-01
tags: [intro, example]
summary: A tiny example publication with an image and a code block.
---

This is an example publication. Add more files like this one into the `_publications/` folder.

Images work as usual in Markdown:

![A placeholder image](/assets/images/placeholder.svg)

Code blocks are highlighted using Rouge:

```python
def hello(name: str) -> str:
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(hello("world"))
```

---

How to publish a new entry:

1) Create a new Markdown file under `_publications/`.

2) Use this required front matter at the top:

```yaml
---
title: Your Post Title
date: 2025-02-01   # ISO format YYYY-MM-DD
tags: [tag1, tag2] # one or more tags
summary: Optional short blurb shown on the list page
---
```

3) Write the rest of your post beneath the front matter using normal Markdown. Images can live under `assets/images/` and be referenced as `![alt](/assets/images/your-image.png)`.

4) Commit and push to `main`. The GitHub Actions workflow will build and deploy automatically.

Setting up GitHub Pages (one time):

- Push this repo to GitHub with the default branch named `main`.
- In GitHub: Settings → Pages → Build and deployment → select "GitHub Actions". The included workflow `.github/workflows/pages.yml` will handle builds on every push.

Deployment gotcha (first push):

If your first push shows an error like:

```
Error: Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions ... HttpError: Not Found
```

Do this:
- Go to Settings → Pages and enable Pages. Choose "GitHub Actions" for Build and deployment.
- Then make any small commit (e.g., edit `index.md`) and push again, or re-run the failed workflow from the Actions tab.
- After this one-time enablement, future pushes will deploy automatically. The workflow will print the site URL when it completes.



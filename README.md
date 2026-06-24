# σ standard deviation

**standardlydeviated.substack.com** — a data publication about whatever seems worth investigating.

This repo hosts all interactive charts, notebooks, and supporting code for every article. Each piece lives in its own folder under `/articles/`. Hosted on GitHub Pages.

---

## repo structure

```
standard-deviation/
├── index.html                  ← landing page / article index
├── articles/
│   └── 01-big-dipper/
│       ├── index.html          ← full interactive article page
│       └── notebook.ipynb      ← source notebook (Quarto → HTML)
├── notebooks/
│   └── big-dipper.ipynb        ← standalone runnable notebook
├── assets/
│   ├── css/
│   │   └── style.css           ← shared styles across all articles
│   └── js/
│       └── scroll-reveal.js    ← shared scroll reveal utility
└── .github/
    └── workflows/
        └── deploy.yml          ← auto-deploy to GitHub Pages on push
```

---

## setup

```bash
git clone https://github.com/YOUR_USERNAME/standard-deviation.git
cd standard-deviation

# install quarto (for rendering notebooks to HTML)
# https://quarto.org/docs/get-started/

# install python dependencies
pip install pandas plotly geopandas folium astropy numpy scipy

# render an article notebook
quarto render articles/01-big-dipper/notebook.qmd
```

---

## publish workflow

1. Write article in Substack
2. Build interactive charts locally as `.qmd` or `.html`
3. Push to this repo → GitHub Actions auto-deploys to Pages
4. Link to `yourusername.github.io/standard-deviation/articles/01-big-dipper/` from the Substack post

---

## data sources

| article | source | url |
|---|---|---|
| Big Dipper | HYG Star Database v3.4 | github.com/astronexus/HYG-Database |

---

## license

Code: MIT. Article text: © standard deviation / @standardlydeviated.

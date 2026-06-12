# Personal Portfolio — Mostafa Zaghloul

A minimal, dark-themed personal portfolio for a software engineer, built as a
static single-page React app and deployed to GitHub Pages at
[zaghloul.de](https://zaghloul.de).

## Stack

- **React 18** (Create React App / `react-scripts`)
- **Plain CSS** — no Tailwind, no UI libraries, no component frameworks
- **gh-pages** for deployment to GitHub Pages

## Sections

Hero → About → Experience → Projects → Tech Stack → Contact, with a sticky
navbar that highlights the active section on scroll, smooth scrolling, and
subtle fade-in-on-scroll animations.

## Getting started

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

Produces an optimized static site in `build/`.

## Deployment (GitHub Pages)

The `homepage` field in `package.json` is set to `https://zaghloul.de`, and a
`CNAME` file is included for the custom domain. To deploy:

```bash
npm run deploy
```

This runs `gh-pages -d build`, which builds the site (via `predeploy`) and
pushes the contents of `build/` to the `gh-pages` branch.

### Custom domain

1. In the GitHub repository settings, enable GitHub Pages from the `gh-pages`
   branch.
2. Set the custom domain to `zaghloul.de`.
3. Point the domain's DNS at GitHub Pages (an `A`/`ALIAS` record for the apex,
   plus a `CNAME` for `www` if desired).

## Project structure

```
portfolio/
  public/
    cv.pdf            # served as a static file, linked from the Download CV button
    index.html
    CNAME             # custom domain for GitHub Pages
    favicon.svg
    404.html          # redirects deep links back to the SPA
  src/
    components/       # Navbar, Hero, About, Experience, Projects, TechStack, Contact
    hooks/            # scroll-reveal + active-section observers
    App.jsx
    App.css
    index.js
    index.css
  package.json
  README.md
```

## CV

The CV is served as a static file from `public/cv.pdf`. The **Download CV**
buttons in the Hero and Contact sections open it in a new tab and trigger a
download.

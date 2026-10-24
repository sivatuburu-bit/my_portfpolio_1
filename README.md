<<<<<<< HEAD
# Tuburu Sivakumar — React Portfolio

Multi-page dark-theme portfolio built with React, React Router DOM (data router) and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173`.

## Routes (react-router-dom)

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About, learning, strengths |
| `/skills` | Technical skills |
| `/projects` | Project list |
| `/projects/:slug` | Project detail (`vocatube`, `movie-api-app`) |
| `/experience` | Work experience timeline |
| `/education` | Education |
| `/contact` | Contact |
| `*` | 404 page |

## Edit content

All text lives in `src/data.js`. Theme colours are CSS variables at the top of `src/styles.css`.

## Resume

Put your resume PDF at `public/resume.pdf`.

## Build & deploy (Netlify)

```bash
npm run build
```

Build command `npm run build`, publish directory `dist`. `public/_redirects` makes direct links and refreshes on routes like `/projects/vocatube` work.

## Structure

```text
├── public/        resume.pdf, _redirects
├── src/
│   ├── components/  Layout, PageHeader, ProjectCard, ProjectArt, CtaBand
│   ├── pages/       Home, About, Skills, Projects, ProjectDetail, Education, Contact, NotFound
│   ├── router.jsx   createBrowserRouter route table (lazy pages)
│   ├── data.js      all content (config.js holds links/resume path)
│   ├── main.jsx     BrowserRouter entry
│   └── styles.css   theme
├── vite.config.js
└── package.json
```
=======
# my_portfpolio_1
>>>>>>> f29af5374cbcb533fded8b682f3273452416ec35

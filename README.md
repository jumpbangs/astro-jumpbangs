# Jumpbangs - Astro based portfolio

The following project is build using Astro and the following packages that are used to build the following page.
---
## Project Structure
```
/
├── public/
|   ├── assets
|   |   └── files
|   |   └── images
│   └── favicon.svg
├── src/
│   ├── components/
|   |   └── common/
|   |   |   └── ColorMode.astro
|   |   |   └── Footer.astro
|   |   |   └── Header.astro
|   |   |   └── Metadata.astro
│   │   └── Breadcrumbs.astro
|   |   └── DateTime.astro
|   |   └── Tags.astro
|   |   └── ToggleTheme.astro
|   ├── content/
|   |   └── post
|   |   └── config.ts  
│   ├── layouts/
│   │   └── Layout.astro
|   |   └── AboutPage.astro
|   |   └── PostPage.astro
|   |   └── Posts.astro
│   └── pages/
|   |   └── posts/
|   |   |    └── [slug].astro
|   |   |    └── index.astro
|   |   └── 404.astro
|   |   └── about.astro
│   |   └── index.astro
|   |   └── projects.astro
|   └── styles/
|   |   └── base.css
|   └── utils/
|       └── constants.ts
|       └── date.ts
|       └── pagination.ts
└── .eslintrc.js
└── .gitignore
└── .prettierignore
└── .prettierrc
└── astro.config.mjs
└── prettier.config.cjs
└── README.md
└── tailwind.config.cjs
└── tsconfig.json
└── package.json
```

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

There's nothing special about src/components/, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the public/ directory.

---
## Commands

| Command                | Actions                                    |
|------------------------|--------------------------------------------|
| yarn                   | Installs dependencies                      |
| yarn start             | Starts local dev server at `localhost:4321`|
| yarn build             | Build your production site `./dist/`       |
| yarn preview           | Preview your build locally, before deploy  |
| yarn add <package>     | Install given package                      |
| yarn astro --help      | Get help using the Astro CLI               |

---
## Package.json
- [@astrojs/react] (https://www.npmjs.com/package/@astrojs/react)
- [@astrojs/tailwind] (https://www.npmjs.com/package/@astrojs/tailwind)
- [@types/react] (https://www.npmjs.com/package/@types/react)
- [@types/react-dom] (https://www.npmjs.com/package/@types/react-dom)
- [astro] (https://www.npmjs.com/package/astro)
- [astro-feather] (https://www.npmjs.com/package/astro-feather)
- [react] (https://www.npmjs.com/package/react)
- [react-dom] (https://www.npmjs.com/package/react-dom)
- [remark-toc] (https://www.npmjs.com/package/remark-toc)
- [slugify] (https://www.npmjs.com/package/slugify)
- [tailwindcss] (https://www.npmjs.com/package/tailwindcss)


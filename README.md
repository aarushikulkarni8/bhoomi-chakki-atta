# Bhoomi Chakki Atta website

[![Security](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/security.yml/badge.svg?branch=main)](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/security.yml)
[![Dependency audit](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/dependencies.yml/badge.svg?branch=main)](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/dependencies.yml)
[![Website build](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/website.yml/badge.svg?branch=main)](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/website.yml)
[![Deployment](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/deployment.yml/badge.svg?branch=main)](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/deployment.yml)
[![Docs](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/docs.yml/badge.svg?branch=main)](https://github.com/aarushikulkarni8/bhoomi-chakki-atta/actions/workflows/docs.yml)

Website for Bhoomi Chakki Atta, a chakki atta made from Premium Sharbati Wheat by Aarambh Manufacturers.
Built with React, TypeScript, Vite and Tailwind CSS.

## Run it

```bash
npm install
npm run dev
npm run build
```

## Hosting

The site runs as a free static site on Render, using the settings in [render.yaml](render.yaml). Render does not redeploy automatically: after a change reaches `main`, start a manual deploy in the Render dashboard.

## Project layout

- [src/pages](src/pages): Home, About, Product, Quality, Partner and Contact pages
- [src/components](src/components): shared page sections
- [src/data/company.ts](src/data/company.ts): contact details, navigation and FAQs
- [src/assets](src/assets): product and lifestyle images (replace using the same filenames)

The phone and WhatsApp number in this repository is a placeholder. Set the `VITE_PHONE` environment variable (10 digits, without +91) in Render, then redeploy. The number is visible to visitors of the published site.

## Commit checklist

Changes reach `main` through **Actions > CI Checklist**. They are committed only if every selected check passes.

| Check | What it verifies | When it runs |
| --- | --- | --- |
| Security | No environment files, dependencies, build output or secrets are tracked | Every commit |
| Dependency audit | No known moderate or worse problems in the website packages | When selected |
| Website build | TypeScript and the production build succeed | When selected |
| Deployment | The built site starts and serves its pages | When selected |
| Docs | README links and commands are valid | When selected |

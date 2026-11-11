# TechKey Solutions website

The rebuilt [thetks.com](https://thetks.com) — Next.js + Tailwind, static-first, with a
Markdown blog and a contact form that emails submissions.

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS 4**
- **TypeScript**
- **Markdown blog** (`content/blog/*.md`, rendered with `gray-matter` + `marked`)
- **Contact form** delivered via [Formspree](https://formspree.io)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Writing blog posts

Add a new `.md` file to `content/blog/`:

```markdown
---
title: "Your title"
description: "One-line summary for the card and SEO."
date: "2026-04-21"
author: "Your name"
tags: ["ai"]
---

Your post body in **Markdown**.
```

It will show up automatically at `/blog/<filename-without-extension>`.

## Deployment

thetks.com is hosted on **Netlify** (site `boisterous-dragon-d89b8e`) and deploys automatically from `main`.

- **GitHub is the only source of truth.** Never upload files to a host by hand. Every change goes through a pull request into `main`.
- Each pull request gets a Netlify deploy preview. Check it before merging.
- Merging into `main` publishes to the live site.

Before any hosting or DNS move, compare every page on the old host with the new build. If the old host has anything newer than this repo, bring it into the repo first.

## Structure

```
src/
  app/                 # routes (home, about, services, blog, contact, privacy)
  components/          # header, footer, logo, icons, container
  lib/
    site.ts            # site-wide constants (name, email, nav, socials)
    blog.ts            # markdown loading + rendering
content/blog/          # blog posts as .md files
public/                # static assets
```

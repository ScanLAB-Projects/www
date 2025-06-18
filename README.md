# scanlabprojects.co.uk `v5`

![](src/assets/readme/scanlabprojects.png)
Getting started.

## Currently [Staging](http://cicd-staging-scanlab-www.s3-website.eu-west-2.amazonaws.com)

- Node `>20`
- Package manager `pnpm`
- Requires Git for branch deployments

```bash
pnpm install    # install locally
pnpm dev        # preview changes
pnpm sync       # push to Github, patch and deploy
```

## Deplopyments

**reccommended**
🚀 The CICD pipeline configured on Github will automatically build and sync with AWS S3 bucket.

```bash
pnpm sync
```

🧑‍💻 Otherwise you can make changes directly on the Github repo page itself.
_...on doing so the site will build automatically_
![](src/assets/readme/changes.jpg)

### Trigger a deployment for Exhibition updates

You (specific users) can make EDIT's to the spreadsheet [here](https://docs.google.com/spreadsheets/d/1iJ8XBJGkpWw33kltxKcuTd5X9-txEhHpy4Ldi9RVgdo)
Then goto [Actions](https://github.com/ScanLAB-Projects/www/actions) tab and click any previous deploy.

You have the option to re-run, do so and the new data will be reflected.
![](src/assets/readme/actions.jpg)

### Page CRUD

There are 2 types of pages:

1. Standard pages: `src/pages` type: `.astro`
2. Project pages: `src/content/projects` type: `.mdx`

Both use `HTML`, whereas specifically, the project pages are setup to consume `markdown`.

Project pages also **require** `frontmatter`, a `YAML` syntax to define higher level meta config.

```yaml
---
title: "Page title"
client: ""
subtitle: "currently unused"
description: "SEO short page descriptor"
vimeo: "643973859"
background: "filename.jpg" # fallback used when no video is present
tags: ["artwork", "installation"]
---
```

### Images

Re Project pages, we use the `slug` as an identifier ie: `eternal-room.mdx` becomes the URL page slug `eternal-room`.
This is used to match assets and content against respectively.

Place images for `eternal-return` in the corresponding `src/assets/projects/eternal-return` location.
Images placed here will automatically be reduced during the build step.

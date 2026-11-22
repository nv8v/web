# Personal Portfolio

<<<<<<< HEAD
A minimal personal portfolio built with Lume and Deno.
=======
A minimal personal portfolio built with [Lume](https://lume.land/) and Deno.
>>>>>>> 38ce136 (Fix project root for GitHub Pages)

> A small space on the web to document what I'm learning, building, and exploring.

## Development

```sh
git clone https://github.com/nv8v/web
cd web
deno task serve
<<<<<<< HEAD
deno task build
```
## Deployment

This site is automatically deployed to [Deno Deploy](https://deno.com/deploy) on every push to the `main` branch.
=======
```

## Build

```sh
deno task build
```

Lume generates the static website in the `_site/` directory. Deno is only needed to build the site; the published website runs as static files and does not require a Deno server.

## Deployment

Every push to the `main` branch triggers GitHub Actions. The workflow builds the site with Deno and Lume, then publishes the generated `_site/` directory to GitHub Pages.

In the repository settings, configure **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The custom domain is configured separately in GitHub Pages settings and in the is-a.dev DNS registration.
>>>>>>> 38ce136 (Fix project root for GitHub Pages)

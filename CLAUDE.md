# jimmyfavaron.com

Personal portfolio site for Jimmy Favaron. Built with Gatsby 5 + React 18, hosted on AWS (S3/CloudFront/Route53), infrastructure managed with Terraform, deployed via GitHub Actions. This project is developed exclusively using Claude Code.

## Commands

| Command           | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `npm run develop` | Local dev server at localhost:8000        |
| `npm run build`   | Production build (output to `public/`)    |
| `npm run serve`   | Serve production build locally            |
| `npm run clean`   | Clear `.cache/` and `public/` directories |
| `npm run format`  | Run Prettier on all source files          |

Run `npm run clean` first when encountering stale GraphQL schema errors or unexpected build failures — Gatsby's cache can become stale.

## Directory Structure

```
gatsby-config.js          Site metadata + plugin config
gatsby-node.js            Programmatic page creation (STARTER PLACEHOLDER — DSG demo)
gatsby-browser.js         Browser APIs (currently empty)
gatsby-ssr.js             SSR APIs (sets lang="en")
provider.tf               Terraform Cloud + AWS provider config
site.tf                   S3/CloudFront/Route53 infrastructure modules
variables.tf              Terraform variable definitions
terraform.tfvars          Production variable values
src/
  pages/
    index.js              Homepage (/)
    404.js                Not found page
    page-2.js             STARTER PLACEHOLDER — to be replaced
    using-ssr.js          STARTER PLACEHOLDER — to be removed
    using-typescript.tsx  STARTER PLACEHOLDER — to be removed
  components/
    layout.js             Root layout wrapper (dark theme shell)
    header.js             Header component (from starter, NOT imported by layout.js)
    seo.js                SEO/meta tags via useStaticQuery + react-helmet
    layout.css            Global CSS reset + CSS variable definitions
    index.module.css      CSS Module styles (from starter)
  templates/
    using-dsg.js          STARTER PLACEHOLDER — to be removed (also remove createPage in gatsby-node.js)
  images/
    favicon.ico           Site favicon (not usable by gatsby-plugin-manifest — sharp doesn't support ico)
    gatsby-icon.png       Gatsby icon (used as manifest icon)
    example.png           Example image (from starter)
.github/workflows/
  terraform-plan.yml      PR workflow: Terraform plan + PR comment
  terraform-apply.yml     Main branch: Terraform apply + Gatsby build + S3 sync
.devcontainer/
  devcontainer.json       Dev container config (Node 18, gatsby-cli, port 8000)
```

## Build & Deploy Pipeline

**Branch strategy:** `dev` (development) → PR to `main` → merge triggers deploy

- **On PR:** `terraform-plan.yml` runs a speculative Terraform plan and posts results as a PR comment
- **On push to main:** `terraform-apply.yml` applies Terraform changes, builds Gatsby, and syncs `public/` to the S3 bucket
- **AWS auth:** OIDC via `github-actions-role` (account 043873863297)
- **Terraform Cloud:** org `favaron-solutions`, workspace `jimmyfavaron-site`

**GitHub repo:** `favaron-solutions/jimmyfavaron` (default branch: `main`)

**GitHub Actions variables:** `TF_CLOUD_ORGANIZATION`, `TF_WORKSPACE`, `TF_CODE_DIRECTORY`, `S3_BUCKET` (just the bucket name, no `s3://` prefix — the workflow adds it)

**GitHub Actions secrets:** `TF_API_TOKEN` (Terraform Cloud org-level API token, shared across repos)

Do not modify Terraform files (`*.tf`, `terraform.tfvars`) unless specifically asked. Infrastructure changes require coordination with Terraform Cloud.

## Coding Conventions

**Formatting:** Prettier with no semicolons and `arrowParens: "avoid"`. Run `npm run format` before committing. Prettierignore covers `.cache`, `package.json`, `package-lock.json`, `public`.

**Components:** All functional components — no class components. Place new components in `src/components/`.

**SEO:** Use the Gatsby v5 Head export pattern on page components:

```js
export const Head = () => <Seo title="Page Title" />
```

**Styling** (in order of preference for new code):

1. CSS variables defined in `layout.css` `:root` block for design tokens
2. CSS Modules (`.module.css` files) for component-specific styles
3. Inline styles for simple one-off cases

Key CSS variables: `--color-primary: #7026b9`, `--space-1` through `--space-6` (4px–64px), `--font-sans`, `--font-mono`, `--size-content: 54rem`

**Theme:** Dark — `#333` background, white text, `#7026b9` purple accent. Set via inline styles in `layout.js`.

**Routing:** File-based via `src/pages/`. Use Gatsby `<Link>` for internal navigation, not `<a>` tags.

**Images:** Use `StaticImage` or `GatsbyImage` from `gatsby-plugin-image`. Do not use the deprecated `gatsby-image` package. Images go in `src/images/`.

**GraphQL:** `useStaticQuery` for component-level data. Exported `graphql` tagged templates for page-level queries.

## Known Issues

- **Broken image ref:** `src/pages/index.js` references `../images/sample-image.jpg` which does not exist (build warns but succeeds)
- **Deprecated dependency:** `gatsby-image` (v3.11.0) is in package.json but unused — should be removed
- **Starter metadata:** `package.json` name, author, repository, and bugs fields still reference gatsby-starter-default
- **Unused header:** `src/components/header.js` exists but is not imported by `layout.js` (layout has its own inline header)
- **CSS conflict:** `layout.css` sets `--color-text: #333` (light theme default) which conflicts with the dark background in `layout.js`
- **No tests:** Test script is a placeholder echo — no test framework configured
- **Remaining dep vulnerabilities:** 34 vulnerabilities in Gatsby's transitive dependencies — cannot be fixed without downgrading Gatsby to v3. Do not run `npm audit fix --force`.
- **Sharp native module:** `sharp` is a direct dependency for Apple Silicon compatibility. After `npm install`, if builds fail with sharp errors, run `npm install --platform=darwin --arch=arm64v8 sharp` or do a clean `rm -rf node_modules && npm install`.

## Infrastructure Reference

- **AWS:** Account 043873863297, region us-east-1
- **Hosting:** S3 bucket `jimmyfavaron.com` + CloudFront CDN + Route53 DNS (hosted zone Z05015668G63TWT3RZ6C)
- **Terraform modules:** `cn-terraform/s3-static-website/aws` v1.0.8, `cn-terraform/logs-s3-bucket/aws` v1.0.6
- **State:** Managed in Terraform Cloud — do not run `terraform` locally without `TF_API_TOKEN`
- `.terraform/` and `.terraform.lock.hcl` are gitignored

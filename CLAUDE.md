# jimmyfavaron.com

Personal portfolio site for Jimmy Favaron. Built with React 16 + React Router, hosted on AWS (S3/CloudFront/Route53), infrastructure managed with Terraform, deployed via GitHub Actions. This project is developed exclusively using Claude Code.

## Commands

| Command         | Purpose                                       |
| --------------- | --------------------------------------------- |
| `npm start`     | Local dev server at localhost:3000             |
| `npm run build` | Production build (output to `build/`)          |
| `npm test`      | Run tests with jest                            |
| `npm run deploy`| Manual deploy: S3 sync + CloudFront invalidation |

## Directory Structure

```
package.json              Dependencies + scripts (React 16, react-router-dom 4, Bootstrap 4)
provider.tf               Terraform Cloud + AWS provider config
site.tf                   S3/CloudFront/Route53 infrastructure modules
variables.tf              Terraform variable definitions
terraform.tfvars          Production variable values
public/
  index.html              HTML shell (React mounts to #root)
  manifest.json           PWA manifest
  favicon.ico             Site favicon
src/
  index.js                Entry point (renders App into #root)
  App.js                  Router — maps paths to page components
  App.css                 Global app styles
  bootstrap.css           Bootstrap 4 styles
  registerServiceWorker.js  PWA service worker registration
  components/
    HomePage.js           Homepage (/)
    AboutPage.js          About page (/about)
    BlogPage.js           Blog page (/blog)
    ProjectsPage.js       Projects page (/projects)
    AboutSitePage.js      About this site (/aboutSite)
    home/                 Homepage sub-components
    about/                About page sub-components
    about-site/           About site sub-components
    blog/                 Blog sub-components
    projects/             Project sub-components
    header/               Header/navigation component
    charts/               Chart components
    divider/              Divider component
    technology-list/      Technology list component
  assets/                 Images and logos
    logos/                Tech logo SVGs (AWS, Docker, etc.)
.github/workflows/
  terraform-plan.yml      PR workflow: Terraform plan + PR comment
  terraform-apply.yml     Main branch: Terraform apply + build + S3 sync + CloudFront invalidation
.devcontainer/
  devcontainer.json       Dev container config
```

## Build & Deploy Pipeline

**Branch strategy:** `dev` (development) -> PR to `main` -> merge triggers deploy

- **On PR:** `terraform-plan.yml` runs a speculative Terraform plan and posts results as a PR comment
- **On push to main:** `terraform-apply.yml` applies Terraform, builds React app, syncs `build/` to S3, invalidates CloudFront
- **AWS auth:** OIDC via `github-actions-role` (account 043873863297)
- **Terraform Cloud:** org `favaron-solutions`, workspace `jimmyfavaron-site`

**GitHub repo:** `favaron-solutions/jimmyfavaron` (default branch: `main`)

**GitHub Actions variables:** `TF_CLOUD_ORGANIZATION`, `TF_WORKSPACE`, `TF_CODE_DIRECTORY`, `S3_BUCKET` (just the bucket name, no `s3://` prefix -- the workflow adds it)

**GitHub Actions secrets:** `TF_API_TOKEN` (Terraform Cloud org-level API token, shared across repos)

Do not modify Terraform files (`*.tf`, `terraform.tfvars`) unless specifically asked. Infrastructure changes require coordination with Terraform Cloud.

## Routing

React Router v4 with `BrowserRouter`. Routes defined in `src/App.js`:
- `/` - HomePage
- `/about` - AboutPage
- `/blog` - BlogPage
- `/projects` - ProjectsPage
- `/aboutSite` - AboutSitePage

Client-side routing means all paths serve `index.html` (handled by CloudFront/S3 error page config).

## Tech Stack

- React 16.2 with class components
- React Router DOM 4.2
- Bootstrap 4 + Reactstrap 5
- Font Awesome 4.7
- react-easy-chart for data visualizations
- react-burger-menu for mobile navigation

## Infrastructure Reference

- **AWS:** Account 043873863297, region us-east-1
- **Hosting:** S3 bucket `jimmyfavaron.com` + CloudFront CDN + Route53 DNS
- **CloudFront distribution:** EP0EUIYXJ9PJI (jimmyfavaron.com)
- **Terraform modules:** `cn-terraform/s3-static-website/aws` v1.0.8, `cn-terraform/logs-s3-bucket/aws` v1.0.6
- **State:** Managed in Terraform Cloud -- do not run `terraform` locally without `TF_API_TOKEN`
- `.terraform/` and `.terraform.lock.hcl` are gitignored

## Gatsby Revamp (In Progress)

A Gatsby 5 migration is in progress on the `gatsby-revamp` branch. When ready to resume:
1. Create feature branch from `dev`
2. Reference `gatsby-revamp` for the Gatsby code
3. Migrate incrementally with PRs to `dev`, then `dev` to `main`

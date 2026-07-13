# Azure deployment (Bicep)

This directory contains infrastructure-as-code to deploy the CodeSprouts
website to Azure.

The site is a Next.js **static export** (`output: 'export'` in
[`next.config.ts`](../next.config.ts)). Running `npm run build` produces a fully
static site in the `out/` directory, so it is hosted on
[Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/).

## Files

| File | Purpose |
| --- | --- |
| `main.bicep` | Defines the Static Web App (and optional custom domain). |
| `main.bicepparam` | Default parameter values for a deployment. |

## Parameters

| Name | Default | Description |
| --- | --- | --- |
| `name` | `codesprouts` | Name of the Static Web App resource. |
| `location` | `westeurope` | Region (Static Web Apps are region-limited). |
| `sku` | `Free` | `Free` or `Standard`. |
| `repositoryUrl` | `''` | GitHub repo URL to enable CI/CD. Leave empty for token-based deploys. |
| `branch` | `main` | Branch to build/deploy when a repo is linked. |
| `repositoryToken` | `''` | GitHub PAT (secure) used to create the Actions workflow. |
| `customDomain` | `''` | Optional custom domain (e.g. `codesprouts.ie`). |

## Deploy

Create a resource group and deploy the Bicep template:

```bash
az group create --name codesprouts-rg --location westeurope

az deployment group create \
  --resource-group codesprouts-rg \
  --template-file infra/main.bicep \
  --parameters infra/main.bicepparam
```

### Publish the built site

If you deploy without linking a repository, build locally and push the `out/`
folder using the deployment token from the created Static Web App:

```bash
npm ci
npm run build

# Get the deployment token
token=$(az staticwebapp secrets list \
  --name codesprouts --query "properties.apiKey" -o tsv)

# Requires the SWA CLI: npm i -g @azure/static-web-apps-cli
swa deploy ./out --deployment-token "$token" --env production
```

### Custom domain

Set `customDomain` (e.g. `codesprouts.ie`) and add the CNAME/TXT validation
records Azure requests at your DNS registrar. Apex domains require the
`Standard` SKU or an `ALIAS`/`A` record depending on your DNS provider.

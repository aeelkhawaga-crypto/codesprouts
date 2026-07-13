using './main.bicep'

param name = 'codesprouts'
param location = 'westeurope'
param sku = 'Free'

// To wire up CI/CD, set the repository URL, branch and a GitHub PAT (as a secure
// value, e.g. via `az deployment ... --parameters repositoryToken=<token>`).
param repositoryUrl = ''
param branch = 'main'

// Optional custom domain. Requires DNS validation records at your registrar.
param customDomain = ''

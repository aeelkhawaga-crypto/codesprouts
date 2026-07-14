// Deploys the CodeSprouts static website (Next.js static export) to Azure.
//
// The site is built with `next build` using `output: 'export'`, which produces
// a fully static site in the ./out directory. Azure Static Web Apps is the
// natural host for this kind of content: it serves static assets globally,
// provides free SSL, and integrates with GitHub for CI/CD.

targetScope = 'resourceGroup'

@description('Name of the Static Web App resource.')
param name string = 'codesprouts'

@description('Location for the Static Web App. Static Web Apps are only available in a subset of regions.')
@allowed([
  'westeurope'
  'northeurope'
  'eastus2'
  'centralus'
  'westus2'
  'eastasia'
])
param location string = 'westeurope'

@description('Pricing tier for the Static Web App.')
@allowed([
  'Free'
  'Standard'
])
param sku string = 'Free'

@description('URL of the source GitHub repository. Leave empty to deploy without linking a repository (e.g. deploy content via the SWA CLI or a deployment token).')
param repositoryUrl string = ''

@description('Branch that Static Web Apps should build and deploy from.')
param branch string = 'main'

@description('GitHub personal access token used to configure the GitHub Actions deployment workflow. Required only when repositoryUrl is set.')
@secure()
param repositoryToken string = ''

@description('Optional custom domain to bind to the Static Web App (e.g. codesprouts.ie). Leave empty to skip.')
param customDomain string = ''

var hasRepository = !empty(repositoryUrl)

resource staticSite 'Microsoft.Web/staticSites@2024-04-01' = {
  name: name
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    // App build/deploy configuration. When a repository is linked, Azure
    // creates a GitHub Actions workflow that builds from these paths.
    repositoryUrl: hasRepository ? repositoryUrl : null
    branch: hasRepository ? branch : null
    repositoryToken: hasRepository ? repositoryToken : null
    buildProperties: hasRepository ? {
      appLocation: '/'
      outputLocation: 'out'
      appBuildCommand: 'npm run build'
    } : null
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
  }
}

// Bind an optional custom domain. DNS records (CNAME/TXT) must be configured
// with the domain registrar so Azure can validate ownership.
resource domain 'Microsoft.Web/staticSites/customDomains@2024-04-01' = if (!empty(customDomain)) {
  parent: staticSite
  name: customDomain
}

@description('The default hostname assigned to the Static Web App.')
output defaultHostname string = staticSite.properties.defaultHostname

@description('The resource ID of the Static Web App.')
output staticSiteId string = staticSite.id

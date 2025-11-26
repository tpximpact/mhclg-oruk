import { App } from 'octokit'

// 1. Validate Environment Variables
if (
  !process.env.GITHUB_CLIENT_ID ||
  !process.env.GITHUB_APP_PRIVATE_KEY ||
  !process.env.GITHUB_INSTALLATION_ID
) {
  throw new Error('Missing GitHub App credentials in .env.local')
}

// 2. Format the Private Key
// .env files often struggle with multi-line strings. We replace literal \n with actual newlines.
const privateKey = process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n')

// 3. Initialize Octokit with App Authentication
const app = new App({
  appId: process.env.GITHUB_CLIENT_ID,
  privateKey
})

export const octokit = await app.getInstallationOctokit(
  process.env.GITHUB_INSTALLATION_ID as unknown as number
)

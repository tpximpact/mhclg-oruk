import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app";

// 1. Validate Environment Variables
if (
  !process.env.GITHUB_APP_ID ||
  !process.env.GITHUB_APP_PRIVATE_KEY ||
  !process.env.GITHUB_INSTALLATION_ID
) {
  throw new Error("Missing GitHub App credentials in .env.local");
}

// 2. Format the Private Key
// .env files often struggle with multi-line strings. We replace literal \n with actual newlines.
const privateKey = process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n');

// 3. Initialize Octokit with App Authentication
// This automatically handles JWT generation and Installation Token retrieval
export const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.GITHUB_APP_ID,
    privateKey: privateKey,
    installationId: process.env.GITHUB_INSTALLATION_ID,
  },
});
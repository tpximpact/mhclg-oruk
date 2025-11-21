'use server'

import { appOctokit } from '@/lib/github'
import { ServiceResponse } from '@/models/service'

/**
 * Server Action to create a GitHub Issue.
 * This runs entirely on the server, keeping your Private Key secure.
 */
export async function createVerificationIssue(serviceData: ServiceResponse) {
  // Hardcode these or fetch them from your DB/Env
  const owner = process.env.GITHUB_REPO_OWNER!
  const repo = process.env.GITHUB_REPO_NAME!
  const assignees = process.env.GITHUB_REPO_ASSIGNEES?.split(',') || [owner]

  // Because we used `createAppAuth` in lib/github.ts,
  // this request is automatically signed as the GitHub App Installation.
  const response = await appOctokit.rest.issues.create({
    owner,
    repo,
    title: `Manual Verification Required: ${serviceData.name}`,
    body: generateIssueBody(serviceData),
    labels: ['verification', 'new-service', 'manual-review'],
    assignees // Optionally assign the issue to the repo owner
  })

  return response.data
}

/**
 * Generates the issue body content with service details
 */
function generateIssueBody(serviceData: ServiceResponse): string {
  const formatDate = (date: Date) => date.toISOString().split('T')[0]

  return `## New Service Registration - Manual Verification Required

A new service has been registered and requires manual verification.

### Service Details

- **ID:** \`${serviceData.id}\`
- **Name:** ${serviceData.name}
- **Publisher:** ${serviceData.publisher}
- **Developer:** ${serviceData.developer}
- **Registration Date:** ${formatDate(serviceData.createdAt)}

### URLs to Verify

- **Publisher URL:** [${serviceData.publisherUrl}](${serviceData.publisherUrl})
- **Developer URL:** [${serviceData.developerUrl}](${serviceData.developerUrl})
- **Service URL:** [${serviceData.serviceUrl}](${serviceData.serviceUrl})

### Contact Information

- **Contact Email:** ${serviceData.contactEmail}

### Description

${serviceData.description}

### Verification Tasks

Please complete the following verification steps:

- [ ] Verify publisher URL is accessible and legitimate
- [ ] Verify developer URL is accessible and legitimate  
- [ ] Verify service URL is accessible and functional
- [ ] Verify contact email is valid and responsive
- [ ] Check service description for accuracy and completeness
- [ ] Validate service compliance with OR-UK standards
- [ ] Confirm service is not a duplicate registration

### Admin Actions

- **Update Service Status:** After verification, update the service status in the system.
- **Add Verification Notes:** Document any findings or issues encountered during verification.

### Next Steps

Once verification is complete:
1. Update the service status to "approved" or "rejected"
2. Add any verification notes to the service record
3. Close this issue with a summary of findings

---

*This issue was automatically generated when the service was registered on ${formatDate(serviceData.createdAt)}.*`
}

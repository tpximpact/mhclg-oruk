// GitHub service for creating issues for manual verification

export interface GitHubIssueData {
  title: string
  body: string
  labels?: string[]
  assignees?: string[]
}

export interface ServiceData {
  id: string
  name: string
  publisher: string
  publisherUrl: string
  description: string
  developer: string
  developerUrl: string
  serviceUrl: string
  contactEmail: string
  createdAt: Date
  updateLink: string
}

export class GitHubService {
  private readonly baseUrl = 'https://api.github.com'
  private readonly owner: string
  private readonly repo: string
  private readonly token: string

  constructor() {
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN

    if (!owner || !repo || !token) {
      throw new Error(
        'Missing required GitHub configuration. Please set GITHUB_OWNER, GITHUB_REPO, and GITHUB_TOKEN environment variables.'
      )
    }

    this.owner = owner
    this.repo = repo
    this.token = token
  }

  /**
   * Creates a GitHub issue for manual verification of a new service
   */
  async createVerificationIssue(serviceData: ServiceData): Promise<{ url: string; number: number }> {
    const issueData: GitHubIssueData = {
      title: `Manual Verification Required: ${serviceData.name}`,
      body: this.generateIssueBody(serviceData),
      labels: ['verification', 'new-service', 'manual-review'],
    }

    try {
      const response = await fetch(`${this.baseUrl}/repos/${this.owner}/${this.repo}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify(issueData),
      })

      if (!response.ok) {
        const errorBody = await response.text()
        throw new Error(`GitHub API error (${response.status}): ${errorBody}`)
      }

      const issue = await response.json()
      
      return {
        url: issue.html_url,
        number: issue.number,
      }
    } catch (error) {
      console.error('Failed to create GitHub issue:', error)
      throw new Error(`Failed to create GitHub issue: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Generates the issue body content with service details
   */
  private generateIssueBody(serviceData: ServiceData): string {
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

- **Update Service Status:** [${serviceData.updateLink}](${process.env.NEXTAUTH_URL || 'http://localhost:3000'}${serviceData.updateLink})

### Next Steps

Once verification is complete:
1. Update the service status to "approved" or "rejected"
2. Add any verification notes to the service record
3. Close this issue with a summary of findings

---

*This issue was automatically generated when the service was registered on ${formatDate(serviceData.createdAt)}.*`
  }
}
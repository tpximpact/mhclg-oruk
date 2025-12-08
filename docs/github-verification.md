# GitHub Issue Creation for Service Verification

This feature automatically creates GitHub issues when new services are registered, informing team members that manual verification is required.

## Setup

### 1. Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# GitHub integration for automatic issue creation
GITHUB_OWNER=tpximpact
GITHUB_REPO=mhclg-oruk
GITHUB_TOKEN=your_github_token_here
NEXTAUTH_URL=http://localhost:3000
```

### 2. GitHub Token

You need a GitHub Personal Access Token with the following permissions:
- `repo` scope (for creating issues in the repository)

To create a token:
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Click "Generate new token (classic)"
3. Select the `repo` scope
4. Copy the token and add it to your environment variables

## How It Works

### Automatic Issue Creation

When a new service is registered through the `/developers/register` form:

1. The service is saved to the database via `ServiceRepository`
2. A GitHub issue is automatically created with:
   - Title: "Manual Verification Required: [Service Name]"
   - Labels: `verification`, `new-service`, `manual-review`
   - Detailed service information in the issue body
   - Verification checklist for manual review

### Issue Content

Each automatically created issue includes:

- **Service Details**: ID, name, publisher, developer, registration date
- **URLs to Verify**: Publisher, developer, and service URLs
- **Contact Information**: Email address for communication
- **Service Description**: Full description provided during registration
- **Verification Tasks**: Checkbox list of verification steps
- **Admin Actions**: Direct link to update the service status
- **Next Steps**: Instructions for completing the verification process

### Error Handling

- If GitHub issue creation fails, it's logged but doesn't prevent service registration
- The service is still successfully saved to the database
- You can manually create issues using the provided script if needed

## Manual Issue Creation

If you need to create a GitHub issue for an existing service, use the utility script:

```bash
node src/scripts/create-github-issue.js [serviceId]
```

Example:
```bash
node src/scripts/create-github-issue.js 507f1f77bcf86cd799439011
```

## Verification Workflow

1. **New Service Registered**: 
   - Service saved to database with "pending" status
   - GitHub issue created automatically

2. **Team Notification**: 
   - Team members are notified via GitHub issue
   - Issue contains all necessary information for verification

3. **Manual Verification**: 
   - Team member reviews the service details
   - Checks URLs, contact information, and compliance
   - Uses the verification checklist in the issue

4. **Status Update**: 
   - Update service status via the admin link in the issue
   - Add verification notes as needed
   - Close the GitHub issue with findings summary

## Configuration

### Labels

The following labels are automatically added to verification issues:
- `verification`: Indicates this is a verification task
- `new-service`: Marks this as a new service registration
- `manual-review`: Requires manual human review

### Issue Template

The issue body template includes:
- Service metadata and contact information
- Clickable URLs for easy verification
- Checkbox-based verification tasks
- Direct admin links for status updates
- Formatted for easy readability and action

## Troubleshooting

### Common Issues

1. **Missing Environment Variables**:
   ```
   Error: Missing required GitHub configuration
   ```
   Solution: Ensure all GitHub environment variables are set

2. **Invalid GitHub Token**:
   ```
   GitHub API error (401): Unauthorized
   ```
   Solution: Check your GitHub token has correct permissions

3. **Network Issues**:
   ```
   Failed to create GitHub issue: Network error
   ```
   Solution: Check internet connection and GitHub API status

### Debugging

Enable debugging by checking the console logs:
- Successful issue creation logs the issue number and URL
- Failed attempts log the full error message
- Service registration continues regardless of GitHub issue status

## Testing

Run the test suite to verify GitHub service functionality:

```bash
npm test src/lib/__tests__/github-service.test.ts
```

The tests cover:
- Environment variable validation
- Successful issue creation
- Error handling for API failures
- Issue content generation
- Network error scenarios
# Testing GitHub Integration Locally

## Setup for Local Testing

1. **Set up environment variables** in your `.env.local`:
   ```env
   GITHUB_OWNER=tpximpact
   GITHUB_REPO=mhclg-oruk
   GITHUB_TOKEN=your_github_personal_access_token
   NEXTAUTH_URL=http://localhost:3000
   ```

2. **Create a GitHub Personal Access Token**:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `repo` scope
   - Copy the token to your `.env.local` file

## Testing the Integration

### Option 1: Register a Test Service

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/developers/register` in your browser

3. Fill out the service registration form with test data

4. Submit the form

5. Check your GitHub repository for a new issue with the title "Manual Verification Required: [Service Name]"

### Option 2: Manual Script Testing

Create a test service manually and then run the issue creation script:

```bash
# First, ensure you have a service ID from your database
node src/scripts/create-github-issue.js 507f1f77bcf86cd799439011
```

## Expected Behavior

When a service is successfully registered:

1. ✅ Service is saved to the MongoDB database
2. ✅ Service gets a "pending" status
3. ✅ GitHub issue is created automatically
4. ✅ Console logs show: "Created GitHub issue #123 for service verification: https://github.com/..."
5. ✅ If GitHub issue creation fails, it logs an error but doesn't break service registration

## Troubleshooting

### Issue: "Missing required GitHub configuration"
- **Cause**: Environment variables not set correctly
- **Solution**: Check your `.env.local` file has all required variables

### Issue: "GitHub API error (401): Unauthorized"
- **Cause**: Invalid GitHub token
- **Solution**: Regenerate your GitHub token with correct permissions

### Issue: "GitHub API error (404): Not Found"
- **Cause**: Repository doesn't exist or token doesn't have access
- **Solution**: Verify `GITHUB_OWNER` and `GITHUB_REPO` are correct

### Issue: Network errors
- **Cause**: No internet connection or GitHub API is down
- **Solution**: Check your connection and GitHub status

## Verifying the Issue Content

A successful GitHub issue should contain:

- **Title**: "Manual Verification Required: [Service Name]"
- **Labels**: verification, new-service, manual-review  
- **Body includes**:
  - Service ID and registration date
  - Publisher and developer information
  - All URLs to be verified
  - Contact email
  - Service description
  - Verification checklist with checkboxes
  - Direct link to admin update page

## Production Considerations

- Ensure production environment variables are set in your deployment platform
- Consider rate limiting for GitHub API calls if you expect high volume
- Monitor GitHub API quotas
- Set up notifications for failed GitHub issue creation
- Consider adding retry logic for transient failures
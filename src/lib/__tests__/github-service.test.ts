import { GitHubService } from '@/lib/github-service'

// Mock fetch for testing
global.fetch = jest.fn()

describe('GitHubService', () => {
  const mockServiceData = {
    id: '507f1f77bcf86cd799439011',
    name: 'Test Service',
    publisher: 'Test Publisher',
    publisherUrl: 'https://example.com/publisher',
    description: 'A test service for verification',
    developer: 'Test Developer',
    developerUrl: 'https://example.com/developer',
    serviceUrl: 'https://example.com/service',
    contactEmail: 'test@example.com',
    createdAt: new Date('2024-01-15T10:30:00Z'),
    updateLink: '/developers/register/507f1f77bcf86cd799439011',
  }

  beforeEach(() => {
    jest.clearAllMocks()
    
    // Set up environment variables
    process.env.GITHUB_OWNER = 'tpximpact'
    process.env.GITHUB_REPO = 'mhclg-oruk'
    process.env.GITHUB_TOKEN = 'test-token'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'
  })

  afterEach(() => {
    delete process.env.GITHUB_OWNER
    delete process.env.GITHUB_REPO
    delete process.env.GITHUB_TOKEN
    delete process.env.NEXTAUTH_URL
  })

  describe('constructor', () => {
    it('should throw error when environment variables are missing', () => {
      delete process.env.GITHUB_TOKEN

      expect(() => new GitHubService()).toThrow(
        'Missing required GitHub configuration. Please set GITHUB_OWNER, GITHUB_REPO, and GITHUB_TOKEN environment variables.'
      )
    })

    it('should initialize successfully with all environment variables', () => {
      expect(() => new GitHubService()).not.toThrow()
    })
  })

  describe('createVerificationIssue', () => {
    it('should create a GitHub issue successfully', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          html_url: 'https://github.com/tpximpact/mhclg-oruk/issues/123',
          number: 123,
        }),
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValue(mockResponse)

      const githubService = new GitHubService()
      const result = await githubService.createVerificationIssue(mockServiceData)

      expect(result).toEqual({
        url: 'https://github.com/tpximpact/mhclg-oruk/issues/123',
        number: 123,
      })

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.github.com/repos/tpximpact/mhclg-oruk/issues',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Authorization': 'Bearer test-token',
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
            'X-GitHub-Api-Version': '2022-11-28',
          }),
          body: expect.stringContaining('Manual Verification Required: Test Service'),
        })
      )
    })

    it('should handle API errors gracefully', async () => {
      const mockResponse = {
        ok: false,
        status: 401,
        text: jest.fn().mockResolvedValue('Unauthorized'),
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValue(mockResponse)

      const githubService = new GitHubService()
      
      await expect(githubService.createVerificationIssue(mockServiceData)).rejects.toThrow(
        'Failed to create GitHub issue: GitHub API error (401): Unauthorized'
      )
    })

    it('should handle network errors gracefully', async () => {
      ;(global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'))

      const githubService = new GitHubService()
      
      await expect(githubService.createVerificationIssue(mockServiceData)).rejects.toThrow(
        'Failed to create GitHub issue: Network error'
      )
    })

    it('should generate correct issue body', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          html_url: 'https://github.com/tpximpact/mhclg-oruk/issues/123',
          number: 123,
        }),
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValue(mockResponse)

      const githubService = new GitHubService()
      await githubService.createVerificationIssue(mockServiceData)

      const callArgs = (global.fetch as jest.Mock).mock.calls[0][1]
      const requestBody = JSON.parse(callArgs.body)

      expect(requestBody.title).toBe('Manual Verification Required: Test Service')
      expect(requestBody.labels).toEqual(['verification', 'new-service', 'manual-review'])
      expect(requestBody.body).toContain('Test Service')
      expect(requestBody.body).toContain('Test Publisher')
      expect(requestBody.body).toContain('test@example.com')
      expect(requestBody.body).toContain('2024-01-15')
      expect(requestBody.body).toContain('https://example.com/publisher')
    })
  })
})
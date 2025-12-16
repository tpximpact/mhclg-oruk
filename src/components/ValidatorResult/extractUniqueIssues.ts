import { isDeepEqual } from '@/utilities/isDeepEqual'
import { STATUS } from '@/utilities/status'

interface Message {
  name: string
  message: string
  description: string
  parameters?: any
  errorIn?: string
  errorAt?: string
  count?: number
}

interface Test {
  description: string
  status: string
  messages: Message[]
}

interface Group {
  [groupKey: string]: Test[]
}

interface Endpoint {
  groups: Group
}

interface Endpoints {
  [endpointKey: string]: Endpoint
}

interface Occurrence {
  endpoint: string
  testDescription: string
  testStatus: string
  errorIn?: string
  errorAt?: string
}

export interface UniqueIssue {
  name: string
  message: string
  description: string
  parameters?: any
  errorIn?: string
  errorAt?: string
  count: number
  occurrences: Occurrence[]
}

interface IssueWithLocation extends Message {
  endpoint: string
  testDescription: string
  testStatus: string
}

/**
 * Extracts all unique errors and warnings from validation results
 * Deduplicates based on error type and message, ignoring location-specific details
 * @param endpoints - Formatted validation results grouped by endpoint
 * @returns Array of unique issues with occurrence count and locations
 */
export const extractUniqueIssues = (endpoints: Endpoints): UniqueIssue[] => {
  const allIssues: IssueWithLocation[] = []

  // Collect all messages from all tests across all endpoints
  Object.keys(endpoints).forEach(endpointKey => {
    const endpoint = endpoints[endpointKey]

    Object.keys(endpoint.groups).forEach(groupKey => {
      const group = endpoint.groups[groupKey]

      group.forEach(test => {
        // Only process failed tests
        if (test.status === STATUS.FAIL || test.status === STATUS.OTHER) {
          test.messages.forEach(message => {
            allIssues.push({
              ...message,
              endpoint: endpointKey,
              testDescription: test.description,
              testStatus: test.status
            })
          })
        }
      })
    })
  })

  // Deduplicate issues by comparing message content
  // Ignore errorIn and errorAt fields for uniqueness check
  const uniqueIssues: UniqueIssue[] = []

  allIssues.forEach(issue => {
    // Find if we already have this issue (compare by message content, not location)
    // errorIn and errorAt are excluded from comparison to treat same errors at different locations as duplicates
    const existingIndex = uniqueIssues.findIndex(
      unique =>
        unique.name === issue.name &&
        unique.message === issue.message &&
        unique.description === issue.description &&
        isDeepEqual(unique.parameters, issue.parameters)
    )

    if (existingIndex === -1) {
      // New unique issue - use the first occurrence's location info
      uniqueIssues.push({
        name: issue.name,
        message: issue.message,
        description: issue.description,
        parameters: issue.parameters,
        errorIn: issue.errorIn,
        errorAt: issue.errorAt,
        count: issue.count || 1,
        occurrences: [
          {
            endpoint: issue.endpoint,
            testDescription: issue.testDescription,
            testStatus: issue.testStatus,
            errorIn: issue.errorIn,
            errorAt: issue.errorAt
          }
        ]
      })
    } else {
      // Increment count and add occurrence with its specific location
      uniqueIssues[existingIndex].count += issue.count || 1
      uniqueIssues[existingIndex].occurrences.push({
        endpoint: issue.endpoint,
        testDescription: issue.testDescription,
        testStatus: issue.testStatus,
        errorIn: issue.errorIn,
        errorAt: issue.errorAt
      })
    }
  })

  // Sort by count (most common first)
  uniqueIssues.sort((a, b) => b.count - a.count)

  return uniqueIssues
}

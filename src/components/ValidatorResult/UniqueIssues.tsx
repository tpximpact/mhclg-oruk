import { useState } from 'react'
import styles from './ValidatorResult.module.css'
import Icon from '@/components/Icon'
import { STATUS } from '@/utilities/status'
import { getColourForStatus } from '@/utilities/getColourForStatus'
import { getIconForStatus } from '@/utilities/getIconForStatus'
import type { UniqueIssue } from './extractUniqueIssues'

interface UniqueIssuesProps {
  issues: UniqueIssue[]
}

export const UniqueIssues = ({ issues }: UniqueIssuesProps) => {
  const [isExpanded, setIsExpanded] = useState(true)

  if (!issues || issues.length === 0) {
    return null
  }

  return (
    <section className={styles.section} style={{ marginBottom: '2rem' }}>
      <header
        className={styles.endpointContainer}
        style={{ cursor: 'pointer' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.endpointContainerLeft}>
          <h2>
            <span className={styles.light}>Unique Issues Summary</span>
            <span>
              ({issues.length} unique issue{issues.length !== 1 ? 's' : ''})
            </span>
          </h2>
        </div>
        <div className={styles.endpointContainerRight}>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {isExpanded ? '▼' : '▶'}
          </button>
        </div>
      </header>

      {isExpanded && (
        <div style={{ padding: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            This section shows all unique errors and warnings found across all endpoints,
            deduplicated and sorted by frequency. Duplicate errors at different locations are
            counted together.
          </p>

          {issues.map((issue, index) => (
            <UniqueIssue key={index} issue={issue} index={index + 1} />
          ))}
        </div>
      )}
    </section>
  )
}

interface UniqueIssueProps {
  issue: UniqueIssue
  index: number
}

const UniqueIssue = ({ issue, index }: UniqueIssueProps) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div
      className={styles.message}
      style={{
        marginBottom: '1rem',
        borderLeft: `4px solid ${getColourForStatus(STATUS.FAIL)}`,
        paddingLeft: '1rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
        <Icon
          colour={getColourForStatus(STATUS.FAIL)}
          weight='4'
          icon={getIconForStatus(STATUS.FAIL)}
          size='18'
        />
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 'bold' }}>
            #{index} - {issue.name}: <strong>{issue.description}</strong>
          </p>
          <p>
            {issue.message}
            {issue.count > 1 && (
              <span
                style={{
                  marginLeft: '0.5rem',
                  padding: '0.2rem 0.5rem',
                  background: 'var(--error-bg, #fee)',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}
              >
                ×{issue.count} occurrences
              </span>
            )}
          </p>

          {issue.parameters && (
            <p>
              When called with parameters:
              <code>{JSON.stringify(issue.parameters)}</code>
            </p>
          )}

          {issue.errorIn && (
            <p>
              Error in:
              <code> {issue.errorIn}</code>
            </p>
          )}

          {issue.errorAt && (
            <p>
              Error at:
              <code> {issue.errorAt}</code>
            </p>
          )}

          {issue.occurrences && issue.occurrences.length > 1 && (
            <div style={{ marginTop: '0.5rem' }}>
              <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  background: 'none',
                  border: '1px solid currentColor',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                {showDetails ? 'Hide' : 'Show'} all {issue.occurrences.length} locations
              </button>

              {showDetails && (
                <ul
                  style={{
                    marginTop: '0.5rem',
                    marginLeft: '1rem',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {issue.occurrences.map((occurrence, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      <strong>{occurrence.endpoint}</strong> - {occurrence.testDescription}
                      {occurrence.errorIn && (
                        <div style={{ marginLeft: '1rem', fontSize: '0.8rem' }}>
                          Error in: <code>{occurrence.errorIn}</code>
                        </div>
                      )}
                      {occurrence.errorAt && (
                        <div style={{ marginLeft: '1rem', fontSize: '0.8rem' }}>
                          Error at: <code>{occurrence.errorAt}</code>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

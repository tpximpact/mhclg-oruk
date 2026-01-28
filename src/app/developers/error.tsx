'use client'

import { useEffect } from 'react'
import { PageMargin } from '@/components/PageMargin'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <PageMargin>
      <div style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Unable to Load Developer Resources
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          We&apos;re unable to load this developer resource at the moment. This may be due to
          missing specification files or a temporary issue.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Please try again later or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--color-primary, #0066cc)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Try again
        </button>
      </div>
    </PageMargin>
  )
}

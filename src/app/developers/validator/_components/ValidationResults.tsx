'use client'

import { useEffect, useState } from 'react'
import { ValidatorResult } from '@/components/ValidatorResult'

interface ValidationResultsProps {
  url: string
  apiData: any
}

interface ValidatorApiResult {
  service: {
    url: string
    isValid: boolean
    profile: string
    profileReason?: string
  }
  metadata: any[]
  testSuites: any[]
}

export default function ValidationResults({ url, apiData }: ValidationResultsProps) {
  const [result, setResult] = useState<ValidatorApiResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function validateUrl() {
      setLoading(true)
      setError(null)
      setResult(null)

      try {
        const response = await fetch('http://localhost:6969/api/openapi/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ baseUrl: url })
        })

        if (!response.ok) {
          throw new Error(`Validation failed: ${response.statusText}`)
        }

        const data = await response.json()
        setResult(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred during validation')
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      validateUrl()
    }
  }, [url])

  if (loading) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '24px',
            maxWidth: '500px',
            margin: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <svg
              style={{
                width: '32px',
                height: '32px',
                animation: 'spin 1s linear infinite'
              }}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                style={{ opacity: 0.25 }}
                cx='12'
                cy='12'
                r='10'
                stroke='#2563eb'
                strokeWidth='4'
              />
              <path
                style={{ opacity: 0.75 }}
                fill='#2563eb'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              />
            </svg>
            <div>
              <p
                style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}
              >
                Validating your feed
              </p>
              <p style={{ fontSize: '14px', color: '#6b7280', wordBreak: 'break-all' }}>{url}</p>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (error) {
    return (
      <div className='p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg'>
        <h3 className='text-sm font-semibold text-red-800 dark:text-red-400 mb-1'>Error</h3>
        <p className='text-sm text-red-700 dark:text-red-300'>{error}</p>
        <p className='text-xs text-red-600 dark:text-red-400 mt-2'>URL attempted: {url}</p>
      </div>
    )
  }

  if (!result) {
    return null
  }

  return (
    <div>
      <div className='mb-4 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg'>
        <p className='text-sm text-gray-700 dark:text-gray-300'>
          Validated URL: <strong className='text-gray-900 dark:text-gray-100'>{url}</strong>
        </p>
        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
          You can bookmark this page to return to these results
        </p>
      </div>
      <ValidatorResult result={{ result }} apiData={apiData} />
    </div>
  )
}

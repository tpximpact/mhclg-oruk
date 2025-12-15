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
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ baseUrl: url }),
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
      <div className='p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg'>
        <p className='text-sm text-blue-700 dark:text-blue-300'>
          Validating URL: <strong>{url}</strong>
        </p>
        <p className='text-sm text-blue-600 dark:text-blue-400 mt-2'>Please wait...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg'>
        <h3 className='text-sm font-semibold text-red-800 dark:text-red-400 mb-1'>Error</h3>
        <p className='text-sm text-red-700 dark:text-red-300'>{error}</p>
        <p className='text-xs text-red-600 dark:text-red-400 mt-2'>
          URL attempted: {url}
        </p>
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

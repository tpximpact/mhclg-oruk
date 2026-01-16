'use client'

import { useEffect, useMemo } from 'react'
import { Title } from './Title'
import { Endpoint } from './Endpoint'

import styles from './ValidatorResult.module.css'

import { formatResults } from './formatResults'

//import exampleData from './example.json'

interface ValidatorResultProps {
  result: any
  apiData: any
}

export const ValidatorResult = ({ result, apiData }: ValidatorResultProps) => {
  result = result.result

  const endpoints: Record<string, any> = useMemo(() => formatResults(result), [result])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={styles.result}>
        <Title result={result} />

        {Object.keys(endpoints).map((k, i) => (
          <Endpoint
            profile={result.service.profile}
            rootPath={result.service.url}
            key={i}
            path={k}
            data={endpoints[k]}
            apiData={apiData}
          />
        ))}
      </div>

      {result && (
        <div className='mt-4'>
          <h4 className='text-sm font-medium text-gray-800 dark:text-gray-400 mb-1'>
            Full Result:
          </h4>
          <pre className='bg-gray-100 dark:bg-gray-800 p-2 rounded-lg overflow-x-auto text-sm text-gray-700 dark:text-gray-300'>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </>
  )
}

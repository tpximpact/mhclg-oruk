'use client'

import { useActionState, useRef, useState } from 'react'
import { validateFeed, type ValidationState } from './actions'
import { ValidatorResult } from '@/components/ValidatorResult'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { getAllContentVersions } from '@/utilities/getAllContentVersions'
import Link from 'next/link'
// @ts-ignore - Columns is a JS component without proper types
import Columns from '@/components/Columns'
import { Button } from '@/components/Button'
import styles from './ValidatorForm.module.css'

const Heading = ({ title }: { title: string }) => (
  <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{title}</h2>
)

const Samples = () => (
  <div className={styles.samples}>
    <Heading title='Sample reports' />
    <p>For a quick preview of the results this tool reports, choose an example:</p>
    <ol className={styles.samplesList}>
      <li>
        <Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock'>
          Pass
        </Link>
      </li>
      <li>
        <Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/warn'>
          Pass (with warnings)
        </Link>
      </li>
      <li>
        <Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/fail'>
          Fail
        </Link>
      </li>
    </ol>
  </div>
)

const Form = ({
  title,
  action,
  defaultValue
}: {
  title?: string
  action: (formData: FormData) => void
  defaultValue?: string
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [disabled, setDisabled] = useState(false)

  const submit = (e: React.MouseEvent): void => {
    if (!inputRef.current?.value || inputRef.current.value.length === 0) {
      e.preventDefault()
      alert('please enter the URL of the data feed')
      return
    }
    if (!inputRef.current.reportValidity()) {
      e.preventDefault()
      return
    }

    setDisabled(true)
    formRef.current?.requestSubmit()
  }

  return (
    <div className={styles.form}>
      {title && <Heading title={title} />}
      <form ref={formRef} action={action}>
        <label className={styles.label}>
          URL
          <input
            ref={inputRef}
            type='url'
            defaultValue={defaultValue}
            name='uri'
            placeholder='Enter URL to check'
          />
        </label>
        <span className={styles.example}>
          The <strong>base URL</strong> the ORUK data service e.g. <br />
          https://example.com/my-oruk-feed
        </span>
        <Button onClick={submit} disabled={disabled}>
          Check
        </Button>
      </form>
    </div>
  )
}

export default function ValidatorFormNew() {
  const [state, formAction] = useActionState<ValidationState, FormData>(validateFeed, {})

  // Get API data for the ValidatorResult component
  const apiData = getAllContentVersions({
    contentFolder: '/developers/api',
    specificationFolder: './public/specifications'
  })

  // If we have a result, show it with the ValidatorResult component
  if (state?.result) {
    return (
      <div>
        <ValidatorResult result={{ result: state.result }} apiData={apiData} />
        <NamedMarkdownPage
          noMargin={true}
          name='results'
          autoMenu={false}
          markdownRaw={undefined}
        />
        <section style={{ marginTop: '2rem' }}>
          <div style={{ marginTop: '6rem' }}>
            <Columns layout='42'>
              <Form action={formAction} defaultValue={state?.baseUrl || ''} title='Check again' />
              <Samples />
            </Columns>
          </div>
        </section>
      </div>
    )
  }

  // If we have an error, show it along with the form
  if (state?.error) {
    return (
      <div>
        <div className='p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-6'>
          <h3 className='text-sm font-semibold text-red-800 dark:text-red-400 mb-1'>Error</h3>
          <p className='text-sm text-red-700 dark:text-red-300'>{state.error}</p>
        </div>
        <div style={{ marginTop: '6rem' }}>
          <Columns layout='42'>
            <Form action={formAction} defaultValue={state?.baseUrl || ''} title='' />
            <Samples />
          </Columns>
        </div>
      </div>
    )
  }

  // Default state - show the form
  return (
    <div style={{ marginTop: '6rem' }}>
      <Columns layout='42'>
        <Form action={formAction} defaultValue={state?.baseUrl || ''} title='' />
        <Samples />
      </Columns>
    </div>
  )
}

import styles from './DashboardDetails.module.css'
import { getColourForStatus } from '@/utilities/getColourForStatus'
import { getIconForStatus } from '@/utilities/getIconForStatus'
import Icon from '@/components/Icon'
import { ReactNode } from 'react'

interface ServiceUrl {
  url?: string
  value?: string
}

interface TestResult {
  title?: { value?: string }
  serviceUrl?: ServiceUrl
  publisher: { value: string; url: string }
  developer: { value: string; url: string }
  service: { value: string; url: string }
  isValid: boolean
  lastTested?: { value?: string }
  payload: SectionData[]
}

interface DashboardDetailsProps {
  result: {
    result: TestResult
  }
}

interface FieldData {
  label: string
  value?: string
  dataType: string
  url?: string
}

interface SectionData {
  label: string
  fields: FieldData[]
}

interface ValidationProps {
  status: string | null
  result: TestResult
}

interface SectionProps {
  data: SectionData
  key?: React.Key
}

interface SectionHeadingProps {
  children: ReactNode
}

interface FieldProps {
  data: FieldData
  key?: React.Key
}

interface FieldValueProps {
  data: FieldData
}

interface FVStringProps {
  data?: string
  url?: string
}

interface FVDateProps {
  data?: string
}

export const DashboardDetails = ({ result }: DashboardDetailsProps) => {
  const testResult = result.result
  // console.log('Rendering DashboardDetails for:', testResult)
  return (
    <div className={styles.details}>
      <h1>{getDetailsTitle(testResult)}</h1>
      <Field
        data={{
          label: 'Published by',
          value: getDetailsPublisher(testResult),
          dataType: 'oruk:dataType:string'
        }}
      />

      <Validation result={testResult} status={getDetailsStatus(testResult)} />

      {testResult.payload.map((data, i) => (
        <Section data={data} key={i} />
      ))}

      <div>
        <h2>Feed Data</h2>
        <Field
          data={{
            label: 'Feed URL',
            value: testResult.service.url,
            dataType: 'oruk:dataType:string'
          }}
        />

        <div className={styles.feedNote}>
          Note: Open Referral feeds are <em>machine readable</em>, and are not designed for human
          readers or for display in a web browser.{' '}
          <a href={getDetailsURI(testResult)} target='_blank'>
            I understand: open the raw data in a new window
          </a>
        </div>
      </div>
    </div>
  )
}

const getDetailsStatus = (result: TestResult): string | null => (result.isValid ? 'pass' : 'fail')

const Validation = ({ status, result }: ValidationProps) => {
  const statusText = getDetailsStatus(result)
  const colour = getColourForStatus(statusText)
  return (
    <section className={styles.validationSection}>
      <SectionHeading>
        <span className={styles.validationStatus}>
          Validation status:{' '}
          <Icon colour={colour} weight='4' icon={getIconForStatus(status)} size='48' />{' '}
          <span style={{ color: colour }}>{status}</span>
        </span>
      </SectionHeading>

      <Field
        data={{
          label: 'Last checked',
          value: getDetailsLastTest(result),
          dataType: 'oruk:dataType:dateTime'
        }}
      />
    </section>
  )
}

const getDetailsTitle = (result: TestResult): string | undefined => result.title?.value
const getDetailsURI = (result: TestResult): string | undefined => result.serviceUrl?.url
const getDetailsURIValue = (result: TestResult): string | undefined => result.serviceUrl?.value
const getDetailsPublisher = (result: TestResult): string | undefined => result.publisher?.value

const Section = ({ data }: SectionProps) => (
  <>
    {data.fields.length > 1 ? (
      <section style={{ marginTop: '4rem' }} className={styles.section}>
        <SectionHeading>{data.label}</SectionHeading>
        {data.fields.map((field, i) => (
          <Field data={field} key={i} />
        ))}
      </section>
    ) : null}
  </>
)

const SectionHeading = ({ children }: SectionHeadingProps) => <h2>{children}</h2>

const Field = ({ data }: FieldProps) => {
  return (
    <div className={styles.field}>
      <span className={styles.label}>{data.label}</span>
      <FieldValue data={data} />
    </div>
  )
}

const FieldValue = ({ data }: FieldValueProps) => {
  let result: ReactNode = undefined
  switch (data.dataType) {
    case 'oruk:dataType:string':
      result = <FVString data={data.value} url={data.url} />
      break
    case 'oruk:dataType:dateTime':
      result = <FVDate data={data.value} />
      break
  }
  return result
}

const FVString = ({ data, url }: FVStringProps) => {
  if (url) {
    return (
      <a className={styles.fv} href={url}>
        {data} ({url})
      </a>
    )
  }
  return <span className={styles.fv}>{data}</span>
}

const stringifyDateString = (s?: string): string => {
  if (!s) return 'Invalid date'

  try {
    const date = new Date(s)
    if (isNaN(date.getTime())) {
      return 'Invalid date'
    }

    // Use user's local timezone and locale
    const dateString = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const timeString = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    })

    return `${dateString}, ${timeString}`
  } catch (error) {
    return 'Invalid date'
  }
}

const FVDate = ({ data }: FVDateProps) => <FVString data={stringifyDateString(data)} />

const getDetailsLastTest = (data: TestResult): string | undefined => data.lastTested?.value

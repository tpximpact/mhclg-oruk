import { DocumentationFeatureSection, DocumentationLineItem } from '@/components/Documentation'
import { BadgeRequired, BadgeInPath } from '@/components/Badge'
import styles from './Parameters.module.css'

interface ParametersProps {
  data: any[]
  parametersReferences: any
}

export const Parameters = ({ data, parametersReferences }: ParametersProps) => {
  return (
    <DocumentationFeatureSection title='Parameters'>
      {data.map((p: any, i: number) => (
        <Parameter parametersReferences={parametersReferences} key={i} data={p} />
      ))}
    </DocumentationFeatureSection>
  )
}

const propertyInPath = (data: any) => data['in'] && data['in'] === 'path'
const propertyRequired = (data: any) => data.required

interface BadgesProps {
  data: any
}

const Badges = ({ data }: BadgesProps) =>
  (propertyInPath(data) || propertyRequired(data)) && (
    <span
      style={{
        display: 'inline-block'
      }}
      className={styles.Badges}
    >
      {propertyInPath(data) && <BadgeInPath />}
      {propertyRequired(data) && <BadgeRequired />}
    </span>
  )

interface ParameterProps {
  data: any
  parametersReferences: any
}

const Parameter = ({ data, parametersReferences }: ParameterProps) => {
  if (data.$ref) {
    const name = data.$ref.replace('#/components/parameters/', '')
    if (parametersReferences[name]) {
      data = parametersReferences[name]
    }
  }

  return (
    <DocumentationLineItem title={data.name}>
      <Badges data={data} />
      {data.description && <div className={styles.description}>{data.description}</div>}
      {data.schema && <Schema data={data.schema} />}
    </DocumentationLineItem>
  )
}

interface SchemaProps {
  data: any
}

const Schema = ({ data }: SchemaProps) => (
  <div className={styles.schema}>
    <span className={styles.type}>{data.type}</span>
  </div>
)

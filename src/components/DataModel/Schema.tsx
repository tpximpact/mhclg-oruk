import { DocumentationFeatureSection } from '@/components/Documentation'

import { DocumentationFeature } from '@/components/Documentation'
//import styles from './Schema.module.css'
import { SchemaProperty } from './SchemaProperty'

interface SchemaProps {
  parentKeyName: string
  data: any
  allSchemas: string[]
}

export const Schema = ({ parentKeyName, data, allSchemas }: SchemaProps) => (
  <DocumentationFeature name={data.name || parentKeyName} description={data.description}>
    <SchemaProperties data={data} allSchemas={allSchemas} />
  </DocumentationFeature>
)

interface SchemaPropertiesProps {
  data: any
  allSchemas: string[]
}

export const SchemaProperties = ({ data, allSchemas }: SchemaPropertiesProps) => (
  <DocumentationFeatureSection title='Schema'>
    {data.properties &&
      Object.keys(data.properties).map((pk, i) => (
        <SchemaProperty
          key={i}
          parentKeyName={pk}
          data={data.properties[pk]}
          allSchemas={allSchemas}
          required={isRequiredBySchema(pk, data)}
        />
      ))}
  </DocumentationFeatureSection>
)

const isRequiredBySchema = (key: string, schema: any) => {
  return schema.required?.includes(key) || schema.tabular_required?.includes(key)
}

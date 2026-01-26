import { getAllSchemas, SchemaProperty } from '@/components/DataModel'
import { DocumentationFeatureSection } from '@/components/Documentation'
import { filenameToName } from '@/utilities/filenameToName'

interface ResponsesProps {
  data: any
  allData: any
}

export const Responses = ({ data, allData }: ResponsesProps) => {
  const allSchemas = getAllSchemas(allData.schemata)
  data = data['200']
  let schema = data.content['application/json'].schema
  let description = data.description
  if (schema.$ref) {
    const modelFile = schema.$ref.split('/').pop()
    const model = filenameToName(modelFile)
    description = (
      <>
        {`${description} An instance of the class `}
        <a href={'/developers/schemata#' + model}>{model}</a>
      </>
    )
    if (allSchemas && model && allSchemas.includes(model)) {
      schema = allData.schemata[model]
    }
  }

  return (
    <DocumentationFeatureSection title='Response' description={description}>
      {schema.properties &&
        Object.keys(schema.properties).map((pk, i) => (
          <SchemaProperty
            key={i}
            parentKeyName={pk}
            data={schema.properties[pk]}
            allSchemas={allSchemas}
            required={false}
            useFullPath={true}
          />
        ))}
    </DocumentationFeatureSection>
  )
}

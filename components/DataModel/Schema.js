import { DocumentationFeatureSection } from '@/components/Documentation'

import { DocumentationFeature } from '@/components/Documentation'
//import styles from './Schema.module.css'
import { SchemaProperty } from './SchemaProperty'

export const Schema = ({ parentKeyName, data, allSchemas }) => (
	<DocumentationFeature name={data.name || parentKeyName} description={data.description}>
		<SchemaProperties data={data} allSchemas={allSchemas} />
	</DocumentationFeature>
)

export const SchemaProperties = ({ data, allSchemas }) => (
	<DocumentationFeatureSection title='Schema'>
	
		{data.properties && Object.keys(data.properties).map((pk, i) => (
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

const isRequiredBySchema = (key, schema) => {
	return schema.required?.includes(key) || schema.tabular_required?.includes(key)
}

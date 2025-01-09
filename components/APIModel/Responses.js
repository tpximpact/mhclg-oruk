/*import {
	getAllSchemas,
SchemaProperties
} from '@/components/DataModel'*/
import { DocumentationFeatureSection } from '@/components/Documentation'
//import styles from './Responses.module.css'

export const Responses = ({
	data
	//allData
}) => {
	//const allSchemas = getAllSchemas(allData)
	data = data['200']
	const schema = data.content['application/json']
	return (
		<DocumentationFeatureSection title='Response' description={data.description}>
			{/*<SchemaProperties data={data} allSchemas={allSchemas} />*/}

			<pre>{JSON.stringify(schema, null, 2)}</pre>
		</DocumentationFeatureSection>
	)
}

import { DataModel } from '@/components/DataModel'
import ATTRIBUTE from './attribute.json'
import TAXONOMY from './taxonomy.json'
import TAXONOMY_TERM from './taxonomy_term.json'
import { PageMargin } from '@/components/PageMargin'

export const metadata = {
	title: 'ORUK data model'
}

export default async function Page() {
	const def = getDataModel()
	
	return (
	<PageMargin>
	<DataModel definition={def}>
		<h1>Data model</h1>
	</DataModel>
	</PageMargin>
	)
}

const getDataModel = () => {return(
	{
		schemas: [
			ATTRIBUTE,
			TAXONOMY,
			TAXONOMY_TERM
		]
	}
)}
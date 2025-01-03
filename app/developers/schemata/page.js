import { DataModel } from '@/components/DataModel'
import ATTRIBUTE from './attribute.json'
import { PageMargin } from '@/components/PageMargin'

export const metadata = {
	title: 'ORUK data model'
}

export default async function Page() {
	const def = getDataModel()
	
	return (
	<PageMargin>
	<DataModel definition={def} />
	</PageMargin>
	)
}

const getDataModel = () => {return(
	{
		schemas: [
			ATTRIBUTE
		]
	}
)}
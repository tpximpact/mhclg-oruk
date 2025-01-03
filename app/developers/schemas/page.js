import { DataModel } from '@/components/DataModel'
import ATTRIBUTE from './attribute'

export const metadata = {
	title: 'ORUK data model'
}

export default async function Page() {
	const definiton = getDataModel()
	
	return (
	<DataModel definiton={definition} />
	)
}

const getDataModel = () => (
	{
		schemas: [
			ATTRIBUTE
		]
	}
)
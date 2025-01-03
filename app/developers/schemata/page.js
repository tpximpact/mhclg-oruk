import { DataModel } from '@/components/DataModel'
import ATTRIBUTE from './attribute.json'

export const metadata = {
	title: 'ORUK data model'
}

export default async function Page() {
	const def = getDataModel()
	
	return (
	<DataModel definition={def} />
	)
}

const getDataModel = () => {return(
	{
		schemas: [
			
		]
	}
)}
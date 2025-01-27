import { GenericPage, metadata } from '@/components/GenericPage'

const pageNameParam = 'subsection'

export default async function Page(props) {
	const params = await props.params
	return <GenericPage name={params[pageNameParam]} />
}

export const generateMetadata = async props => {
	const params = await props.params
	return metadata(params[pageNameParam])
}

import { GenericPage, metadata } from '@/components/GenericPage'

const pageNameParam = 'subsection'

export default async function Page({ params }) {
	return <GenericPage name={params[pageNameParam]} />
}

export const generateMetadata = ({ params }) => metadata(params[pageNameParam])

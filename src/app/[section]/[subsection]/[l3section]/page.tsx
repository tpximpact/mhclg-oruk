import { GenericPage, metadata } from '@/components/GenericPage'

const pageNameParam = 'l3section'

interface PageProps {
	params: Promise<{
		l3section: string
	}>
}

export default async function Page(props: PageProps) {
	const params = await props.params
	return <GenericPage name={params[pageNameParam]} />
}

export const generateMetadata = async (props: PageProps) => {
	const params = await props.params
	return metadata(params[pageNameParam])
}

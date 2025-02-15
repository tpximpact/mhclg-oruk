import { GenericPage, metadata } from '@/components/GenericPage'

export default async function Page() {
	return <GenericPage name='community' />
}

export const generateMetadata = () => metadata('community')

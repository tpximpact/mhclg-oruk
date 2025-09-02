import image from '../practical-examples.webp'
import PageWithTwoColumnsAndImage from '@/components/PageWithTwoColumnsAndImage'

export const metadata = {
	title: 'Practical Examples - Combine Local Data to Create New Services',
	description:
		'Example of how to combine local data to create new services using the Open Referral UK standard.'
}

const contentFilePath = 'adopt/practical-examples/combine-local-data-to-create-new-services'

export default async function Page() {
	return (
		<PageWithTwoColumnsAndImage
			metadata={metadata}
			contentFilePath={contentFilePath}
			image={image}
		/>
	)
}

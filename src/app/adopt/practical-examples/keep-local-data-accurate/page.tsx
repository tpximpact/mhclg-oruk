import image from '../practical-examples.webp'
import PageWithTwoColumnsAndImage from '@/components/PageWithTwoColumnsAndImage'

export const metadata = {
	title: 'Practical Examples - Keep Local Data Accurate',
	description: 'Example of how to keep local data accurate using the Open Referral UK standard.'
}

const contentFilePath = 'adopt/practical-examples/keep-local-data-accurate'

export default async function Page() {
	return (
		<PageWithTwoColumnsAndImage
			metadata={metadata}
			contentFilePath={contentFilePath}
			image={image}
		/>
	)
}

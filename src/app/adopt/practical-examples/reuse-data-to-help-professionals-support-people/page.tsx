import image from '../practical-examples.webp'
import PageWithTwoColumnsAndImage from '@/components/PageWithTwoColumnsAndImage'

export const metadata = {
	title: 'Practical Examples - Reuse Data to Help Professionals Support People',
	description:
		'Example of how to reuse data to help professionals support people using the Open Referral UK standard.'
}

const contentFilePath = 'adopt/practical-examples/reuse-data-to-help-professionals-support-people'

export default async function Page() {
	return (
		<PageWithTwoColumnsAndImage
			metadata={metadata}
			contentFilePath={contentFilePath}
			image={image}
		/>
	)
}

import image from '../practical-examples.webp'
import PageWithTwoColumnsAndImage from '@/components/PageWithTwoColumnsAndImage'

export const metadata = {
	title: 'Practical Examples - Automate Updates to Improve Data Quality',
	description:
		'Example of how the Open Referral UK standard can help automate updates to improve data quality.'
}

const contentFilePath = 'adopt/practical-examples/automate-updates-to-improve-data-quality'

export default async function Page() {
	return (
		<PageWithTwoColumnsAndImage
			metadata={metadata}
			contentFilePath={contentFilePath}
			image={image}
		/>
	)
}

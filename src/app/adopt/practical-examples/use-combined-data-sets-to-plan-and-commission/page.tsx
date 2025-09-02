import image from '../practical-examples.webp'
import PageWithTwoColumnsAndImage from '@/components/PageWithTwoColumnsAndImage'

export const metadata = {
	title: 'Practical Examples - Use Combined Data Sets to Plan and Commission',
	description:
		'Example of how to use combined data sets to plan and commission services using the Open Referral UK standard.'
}

const contentFilePath = 'adopt/practical-examples/use-combined-data-sets-to-plan-and-commission'

export default async function Page() {
	return (
		<PageWithTwoColumnsAndImage
			metadata={metadata}
			contentFilePath={contentFilePath}
			image={image}
		/>
	)
}

import image from '../practical-examples.webp'
import PageWithTwoColumnsAndImage from '@/components/PageWithTwoColumnsAndImage'

export const metadata = {
	title: 'Practical Examples - Repurpose Data to Meet Different Needs',
	description:
		'Example of how to repurpose data to meet different needs using the Open Referral UK standard.'
}

const contentFilePath = 'adopt/practical-examples/repurpose-data-to-meet-different-needs'

export default async function Page() {
	return (
		<PageWithTwoColumnsAndImage
			metadata={metadata}
			contentFilePath={contentFilePath}
			image={image}
		/>
	)
}

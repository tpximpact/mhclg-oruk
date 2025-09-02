import image from '../practical-examples.webp'
import PageWithSingleColumnAndImage from '@/components/PageWithSingleColumnAndImage'

export const metadata = {
	title: 'Practical Examples - Adopt',
	description:
		'Practical examples of how to adopt the Open Referral UK standard in your organisation.'
}

const contentFilePath = 'adopt/practical-examples/how-to-get-started'

export default async function Page() {
	return (
		<PageWithSingleColumnAndImage
			metadata={metadata}
			contentFilePath={contentFilePath}
			image={image}
		/>
	)
}

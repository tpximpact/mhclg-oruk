import PageWithSingleColumnAndImage from '@/components/PageWithSingleColumnAndImage'
import image from './use-cases.webp'
import { getMarkdownData } from '@/utilities/markdown'
import { notFound } from 'next/navigation'

export const metadata = {
	title: 'Open Referral UK use cases',
	description:
		'Explore practical applications and benefits of sharing data using the Open Referral UK standard.'
}

const contentFilePath = 'adopt/use-cases'

export default async function Page() {
	const { data, content } = await getMarkdownData(contentFilePath, 'page-content')

	if (!data || !content) {
		return notFound()
	}

	return (
		<PageWithSingleColumnAndImage
			metadata={data}
			content={content}
			image={image}
		/>
	)
}

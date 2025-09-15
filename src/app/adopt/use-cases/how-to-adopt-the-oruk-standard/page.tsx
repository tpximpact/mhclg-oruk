import PageWithSingleColumnAndImage from '@/components/PageWithSingleColumnAndImage'
import { getMarkdownData } from '@/utilities/markdown'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'

const contentFilePath = 'adopt/use-cases/how-to-adopt-the-oruk-standard'

export async function generateMetadata(): Promise<Metadata> {
	const { data } = await getMarkdownData(contentFilePath, 'page')

	if (!data) {
		return {}
	}

	return {
		title: data.title,
		description: data.description
	}
}

export default async function Page() {
	const { data, content } = await getMarkdownData(contentFilePath, 'page')

	if (!data || !content) {
		return notFound()
	}

	return (
		<PageWithSingleColumnAndImage
			metadata={data}
			content={content}
			image={data.image}
		/>
	)
}

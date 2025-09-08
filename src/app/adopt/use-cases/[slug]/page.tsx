import image from '../use-cases.webp'
import PageWithSingleColumnAndImage from '@/components/PageWithSingleColumnAndImage'
import { getMarkdownData } from '@/utilities/markdown'
import { notFound } from 'next/navigation'
import PageWithTwoColumnsAndImage from '@/components/PageWithTwoColumnsAndImage'
import { Metadata, ResolvingMetadata } from 'next'
import { metadata } from '../page'

const contentFilePath = 'adopt/use-cases'

export async function generateStaticParams() {
	return [
		'reuse-data-one-source-many-places',
		'empower-professionals-to-support-people',
		'automated-checks-to-improve-data-quality',
		'combine-local-data-for-regional-and-national-services',
		'keep-local-data-accurate-using-national-sources',
		'use-combined-data-to-plan-and-commission-services',
		'how-to-adopt-the-oruk-standard'
	].map((slug) => ({ slug }))
}

export async function generateMetadata({ params, parent }: { params: Promise<{ slug: string }>,parent: ResolvingMetadata }): Promise<Metadata> {
	const { slug } = await params
	const markdownFilePath = `${contentFilePath}/${slug}`;
	const { data } = await getMarkdownData(markdownFilePath, 'page-content')

	if (!data) {
		return {}
	}

	const parentMetadata = await parent
	
	return {
		title: data.title || parentMetadata.title,
		description: data.description || parentMetadata.description,
	}
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const markdownFilePath = `${contentFilePath}/${slug}`;
	const { data, content } = await getMarkdownData(markdownFilePath, 'page-content')
	
	if (!data || !content) {
		return notFound()
	}

	if (data.layout === '2-columns') {
		return (
			<PageWithTwoColumnsAndImage
				metadata={metadata}
				contentFilePath={markdownFilePath}
				image={image}
			/>
		)
	} else if (data.layout === '1-column') {
		return (
			<PageWithSingleColumnAndImage
				metadata={metadata}
				contentFilePath={markdownFilePath}
				image={image}
			/>
		)
	}

	return notFound()
}

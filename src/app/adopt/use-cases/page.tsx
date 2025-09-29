import { getMarkdownData } from '@/utilities/markdown'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import GettingStarted from './_components/getting-started'
import { ArticleDateComponent, Links } from '@/components/DynamicSection/DynamicSectionPage'
import { CSSProperties } from 'react'
import Columns from '@/components/Columns'
import { MarkdownComponent } from '@/components/NamedMarkdownPage/MarkdownContent'

const contentFilePath = 'adopt/use-cases'

const headerStyle: CSSProperties = {
	minHeight: 250,
	marginBottom: 48
}

export async function generateMetadata(): Promise<Metadata> {
	const { data } = await getMarkdownData(contentFilePath, 'index')

	if (!data) {
		return {}
	}

	return {
		title: data.title || 'Open Referral UK use cases',
		description:
			data.description ||
			'Explore practical applications and benefits of sharing data using the Open Referral UK standard.'
	}
}

export default async function Page() {
	const { data, content } = await getMarkdownData(contentFilePath, 'index')

	if (!data || !content) {
		return notFound()
	}

	return (
		<>
			<section style={headerStyle}>
				<Columns
					layout='42'
					className={undefined}
					debug={undefined}
					supressTrailingSpace={undefined}
				>
					<MarkdownComponent html={content} />
				</Columns>
			</section>
			<section>
				<GettingStarted />
			</section>
			<section>
				<ArticleDateComponent date={data.modified} />
				<Links {...data.links} />
			</section>
		</>
	)
}

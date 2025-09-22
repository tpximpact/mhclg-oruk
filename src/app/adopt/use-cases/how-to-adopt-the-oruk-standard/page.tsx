import Columns from '@/components/Columns'
import { ArticleDateComponent } from '@/components/DynamicSection/DynamicSectionPage'
import { MarkdownComponent } from '@/components/NamedMarkdownPage/MarkdownContent'
import { getMarkdownData } from '@/utilities/markdown'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import { CSSProperties } from 'react'
import Feedback from '../_components/feedback'
import styles from '../use-cases.module.css'

const contentFilePath = 'adopt/use-cases/how-to-adopt-the-oruk-standard'

const headerStyle: CSSProperties = {
	minHeight: 250,
	marginBottom: 48
}

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
				<Columns
					layout='11'
					className={styles.gap5}
					debug={undefined}
					supressTrailingSpace={undefined}
				>
					<Feedback />
				</Columns>
			</section>
			<section>
				<ArticleDateComponent date={data.modified} />
			</section>
		</>
	)
}

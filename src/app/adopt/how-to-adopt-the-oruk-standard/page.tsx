import Columns from '@/components/Columns'
import { ArticleDateComponent } from '@/components/DynamicSection/DynamicSectionPage'
import { MarkdownComponent } from '@/components/NamedMarkdownPage/MarkdownContent'
import { getMarkdownData } from '@/utilities/markdown'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import Feedback from '../use-cases/_components/feedback'
import styles from './page.module.css'

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
		<>
			<section>
				<Feedback />
			</section>
			<section>
				<Columns
					layout='42'
					className={styles.useCasesMarkdownStyle}
					debug={undefined}
					supressTrailingSpace={undefined}
				>
					<MarkdownComponent html={content} />
				</Columns>
			</section>
			<section>
				<ArticleDateComponent date={data.modified} />
			</section>
		</>
	)
}

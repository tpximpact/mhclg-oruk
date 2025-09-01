import Columns from '@/components/Columns'
import { MarkdownComponent } from '@/components/NamedMarkdownPage/MarkdownContent'
import { getMarkdownData } from '@/utilities/markdown'
import Image from 'next/image'
import logo from '../practical-examples.webp'
import { ArticleDateComponent, Links } from '@/components/DynamicSection/DynamicSectionPage'
import { MarkdownComponentFromFile } from '@/components/MarkdownComponentFromFile'

export const metadata = {
	title: 'Practical Examples - Automate Updates to Improve Data Quality',
	description:
		'Example of how the Open Referral UK standard can help automate updates to improve data quality.'
}

const contentFilePath = 'adopt/practical-examples/automate-updates-to-improve-data-quality'

export default async function Page() {
	const { data, content } = await getMarkdownData(contentFilePath, 'page-content')

	return (
		<>
			<section>
				<Columns
					layout='42'
					className={undefined}
					debug={undefined}
					supressTrailingSpace={undefined}
				>
					<MarkdownComponent html={content} />
					<div>
						<Image src={logo} alt={metadata.title} width={200} />
					</div>
				</Columns>
			</section>
			<section>
				<Columns
					layout='11'
					className={undefined}
					debug={undefined}
					supressTrailingSpace={undefined}
				>
					<MarkdownComponentFromFile filePath={contentFilePath} fileName='column-1' />
					<MarkdownComponentFromFile filePath={contentFilePath} fileName='column-2' />
				</Columns>
			</section>
			<section>
				<ArticleDateComponent date={data.modified} />
				<Links {...data.links} />
			</section>
		</>
	)
}

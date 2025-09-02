import { getMarkdownData } from '@/utilities/markdown'
import Columns from './Columns'
import { ArticleDateComponent, Links } from './DynamicSection/DynamicSectionPage'
import { MarkdownComponentFromFile } from './MarkdownComponentFromFile'
import { MarkdownComponent } from './NamedMarkdownPage/MarkdownContent'
import Image, { StaticImageData } from 'next/image'
import { CSSProperties } from 'react'

const headerStyle: CSSProperties = {
	minHeight: 250,
	marginBottom: 48
}

export default async function PageWithTwoColumnsAndImage({
	metadata,
	contentFilePath,
	image
}: {
	metadata: { title: string; description: string }
	contentFilePath: string
	image: StaticImageData
}) {
	const { data, content } = await getMarkdownData(contentFilePath, 'page-content')

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
					<div>
						<Image src={image} alt={metadata.title} width={200} />
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

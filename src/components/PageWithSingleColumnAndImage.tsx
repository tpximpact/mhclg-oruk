import { MarkdownMetadata } from '@/utilities/markdown'
import Columns from './Columns'
import { ArticleDateComponent, Links } from './DynamicSection/DynamicSectionPage'
import { MarkdownComponent } from './NamedMarkdownPage/MarkdownContent'
import Image, { StaticImageData } from 'next/image'
import { CSSProperties } from 'react'

const headerStyle: CSSProperties = {
	minHeight: 250,
	marginBottom: 48
}
export default async function PageWithSingleColumnAndImage({
	metadata,
	content,
	image
}: {
	metadata: MarkdownMetadata
	content: string
	image: string | StaticImageData | undefined
}) {
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
					{image && (
						<div>
							<Image src={image} alt={metadata.title} fill={true} />
						</div>
					)}
				</Columns>
			</section>
			<section>
				<ArticleDateComponent date={metadata.modified} />
				<Links {...metadata.links} />
			</section>
		</>
	)
}

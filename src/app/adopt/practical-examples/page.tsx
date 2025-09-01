import { MarkdownComponent } from '@/components/NamedMarkdownPage/MarkdownContent'
import Columns from '@/components/Columns'
import Image from 'next/image'
import image from './practical-examples.webp'
import { ArticleDateComponent, Links } from '@/components/DynamicSection/DynamicSectionPage'
import { getMarkdownData } from '@/utilities/markdown'

export const metadata = {
	title: 'Practical Examples - Adopt',
	description:
		'Practical examples of how to adopt the Open Referral UK standard in your organisation.'
}

export default async function Page() {
	const { data, content } = await getMarkdownData('adopt/practical-examples/landing-page', 'page-content')
	
	return (
		<section>
			<Columns layout='42' className={undefined} debug={undefined} supressTrailingSpace={undefined}>
				<MarkdownComponent html={content} />
				<div>
					<Image src={image} alt='ORUK practical examples' width={200} />
				</div>
			</Columns>
			<ArticleDateComponent date={data.modified} />
			<Links {...data.links} />
		</section>
	)
}

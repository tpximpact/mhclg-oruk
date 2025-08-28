import Columns from '@/components/Columns'
import { MarkdownComponent } from '@/components/NamedMarkdownPage/MarkdownContent'
import { getMarkdownData } from '@/utilities/markdown'
import Image from 'next/image'
import logo from '../repurpose-data-to-meet-different-user-needs.webp'
import { ArticleDateComponent, Links } from '@/components/DynamicSection/DynamicSectionPage'
import { MarkdownComponentFromFile } from '@/components/MarkdownComponentFromFile'

export const metadata = {
	title: 'Practical Examples - Repurpose Data to Meet Different User Needs',
	description:
		'Example of how to repurpose data to meet different user needs using the Open Referral UK standard.'
}

export default async function Page() {
	const { data, content } = await getMarkdownData(
		'adopt/practical-examples',
		'repurpose-data-to-meet-different-user-needs'
	)

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
						<Image src={logo} alt='Repurpose data to meet different user needs' width={200} />
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
					<MarkdownComponentFromFile
						filePath='adopt/practical-examples'
						fileName='repurpose-data-to-meet-different-user-needs-column-1'
					/>
					<MarkdownComponentFromFile
						filePath='adopt/practical-examples'
						fileName='repurpose-data-to-meet-different-user-needs-column-2'
					/>
				</Columns>
			</section>
			<section>
				<ArticleDateComponent date={data.modified} />
				<Links {...data.links} />
			</section>
		</>
	)
}

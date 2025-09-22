import { getMarkdownData } from '@/utilities/markdown'
import { notFound } from 'next/navigation'
import { Metadata, type ResolvingMetadata } from 'next'
import { CSSProperties } from 'react'
import Columns from '@/components/Columns'
import { ArticleDateComponent, Links } from '@/components/DynamicSection/DynamicSectionPage'
import { MarkdownComponentFromFile } from '@/components/MarkdownComponentFromFile'
import { MarkdownComponent } from '@/components/NamedMarkdownPage/MarkdownContent'
import Image from 'next/image'
import GettingStarted from '../_components/getting-started'
import styles from '../use-cases.module.css'
import Feedback from '../_components/feedback'

const contentFilePath = 'adopt/use-cases'

export async function generateStaticParams() {
	const slugs = [
		'reuse-data-one-source-many-places',
		'empower-professionals-to-support-people',
		'automated-checks-to-improve-data-quality',
		'combine-local-data-for-regional-and-national-services',
		'keep-local-data-accurate-using-national-sources',
		'use-combined-data-to-plan-and-commission-services'
	]

	return slugs.map(slug => ({ slug }))
}

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { slug } = await params

	const markdownFilePath = `${contentFilePath}/${slug}`
	const { data } = await getMarkdownData(markdownFilePath, 'page')

	if (!data) {
		return {}
	}

	const parentMetadata = await parent

	return {
		title: data.title || parentMetadata.title,
		description: data.description || parentMetadata.description
	}
}

const headerStyle: CSSProperties = {
	fontSize: '1.4rem'
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const markdownFilePath = `${contentFilePath}/${slug}`
	const { data, content } = await getMarkdownData(markdownFilePath, 'page')

	if (!data || !content) {
		return notFound()
	}

	return (
		<>
			<section style={headerStyle}>
				<MarkdownComponent html={content} />
			</section>
			<section>
				<Columns
					layout='11'
					className={styles.gap5}
					debug={undefined}
					supressTrailingSpace={undefined}
				>
					<MarkdownComponentFromFile filePath={markdownFilePath} fileName='about' />

					<div style={{ position: 'relative', margin: 'auto' }}>
						{data.image && <Image src={data.image} alt={data.title} width={500} height={300} />}
					</div>
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
				<Columns
					layout='11'
					className={styles.gap5}
					debug={undefined}
					supressTrailingSpace={undefined}
				>
					<div>
						<MarkdownComponentFromFile filePath={markdownFilePath} fileName='benefits' />
						<MarkdownComponentFromFile filePath={markdownFilePath} fileName='outcomes' />
					</div>					
					<MarkdownComponentFromFile filePath={markdownFilePath} fileName='examples' />
				</Columns>
			</section>
			<GettingStarted />
			<section>
				<ArticleDateComponent date={data.modified} />
				<Links {...data.links} />
			</section>
		</>
	)
}

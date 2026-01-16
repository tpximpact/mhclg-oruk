'use server'

import Icon, { ICON_TYPE, ICON_TYPE_DATA } from '@/components/Icon'
import { MarkdownContent } from '@/components/NamedMarkdownPage'
import styles from './DynamicSection.module.css'
import { PageThumbnail } from '@/components/PageThumbnail'
import Columns from '@/components/Columns'
import { Banner } from '@/components/Banner'

interface PDFBannerProps {
	pdf: string
}

export const PDFBanner = async ({ pdf }: PDFBannerProps) => (
	<Banner>
		<span style={{
			display: 'inline-block',
			marginRight: '1rem',
			top: '-0.2rem',
			position: 'relative'
		}}>
			<Icon
				weight={2}
				icon={ICON_TYPE_DATA[ICON_TYPE.INFO]}
				size={21}
			/>
		</span>
		<span>
			{' '}
			For your convenience, this document is also <a href={pdf}>
				{' '}
				available as a downloadable pdf
			</a>{' '}
			(right click on desktop / press and hold on mobile to download).
		</span>
	</Banner>
)

interface ArticleDateComponentProps {
	date?: string
}

export const ArticleDateComponent = async ({ date }: ArticleDateComponentProps) => (
	date && (
		<Columns layout='42'>
			<div className={styles.articleDate}>Updated:{date}</div>
			<div></div>
		</Columns>
	)
)

interface LinkedPage {
	title: string
	path: string
	slug?: string
}

interface DynamicSectionPageProps {
	metadata: {
		pdf?: string
	}
	date?: string
	html: string
	previous?: LinkedPage
	next?: LinkedPage
}

export const DynamicSectionPage = async ({ metadata, date, html, ...linkedPages }: DynamicSectionPageProps) => {
	const pdf = metadata.pdf
	return (
		<section>
			{pdf && <PDFBanner pdf={pdf} />}
			<MarkdownContent autoMenu={true} html={html} />
			<ArticleDateComponent date={date} />
			<Links {...linkedPages} />
		</section>
	)
}

interface LinksProps {
	previous?: LinkedPage
	next?: LinkedPage
}

export const Links = async ({ previous, next }: LinksProps) => (
	<div className={styles.links}>
		<LinkedPageMaybe relation='previous' data={previous} />
		<div className={styles.spacer}></div>
		<LinkedPageMaybe relation='next' data={next} />
	</div>
)

interface LinkedPageMaybeProps {
	relation: string
	data?: LinkedPage
}

const LinkedPageMaybe = ({ relation, data }: LinkedPageMaybeProps) =>
	data ? <LinkedPage relation={relation} {...data} /> : <Blank />

interface LinkedPageProps extends LinkedPage {
	relation: string
}

const LinkedPage = ({ relation, ...data }: LinkedPageProps) => (
	<div className={styles.linkedPage}>
		<span className={styles.relation}>{relation}</span>
		<PageThumbnail {...data} slug={undefined} />
	</div>
)

const Blank = () => <div className={styles.blank} />

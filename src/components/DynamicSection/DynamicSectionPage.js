'use server'

import Icon, { ICON_TYPE } from '@/components/Icon'
import { MarkdownContent } from '@/components/NamedMarkdownPage'
import styles from './DynamicSection.module.css'
import { PageThumbnail } from '@/components/PageThumbnail'
import Columns from '@/components/Columns'
import { Banner } from '@/components/Banner'

export const PDFBanner = async ({ pdf }) => (
	<Banner>
		<Icon
			weight='2'
			style={{
				display: 'inline-block',
				marginRight: '1rem',
				top: '-0.2rem',
				position: 'relative'
			}}
			icon={ICON_TYPE.INFO}
			size='21'
		/>
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

export const DynamicSectionPage = async ({ metadata, date, html, ...linkedPages }) => {
	const pdf = metadata.pdf
	return (
		<section>
			{pdf && <PDFBanner pdf={pdf} />}
			<MarkdownContent autoMenu={true} html={html} />
			{date && (
				<Columns layout='42'>
					<div className={styles.articleDate}>Updated:{date}</div>
					<div></div>
				</Columns>
			)}
			<Links {...linkedPages} />
		</section>
	)
}

const Links = ({ previous, next }) => (
	<div className={styles.links}>
		<LinkedPageMaybe relation='previous' data={previous} />
		<div className={styles.spacer}></div>
		<LinkedPageMaybe relation='next' data={next} />
	</div>
)

const LinkedPageMaybe = ({ relation, data }) =>
	data ? <LinkedPage relation={relation} {...data} /> : <Blank />

const LinkedPage = ({ relation, ...data }) => (
	<div className={styles.linkedPage}>
		<span className={styles.relation}>{relation}</span>
		<PageThumbnail {...data} slug={null} />
	</div>
)

const Blank = () => <div className={styles.blank} />

'use server'

import { MarkdownContent } from '@/components/NamedMarkdownPage'
import styles from './DynamicSection.module.css'
import { PageThumbnail } from '@/components/PageThumbnail'

import Columns from '@/components/Columns'

export const DynamicSectionPage = async ({ date, content, ...linkedPages }) => {
	return (
		<section>
			<MarkdownContent autoMenu={true} raw={content} />
			<Columns layout="42">
			<div className={styles.articleDate}>Updated:{date}</div>
			<div></div>
			</Columns>
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

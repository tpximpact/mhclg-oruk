'use server'
import { MarkdownContent } from '@/components/NamedMarkdownPage'
import styles from './DynamicSection.module.css'
import { Thumbnail } from './DynamicSectionListing'

export const DynamicSectionPage = ({
	date,
	// metadata,
	content,
	...linkedPages
}) => {
	return (
		<section>
			<MarkdownContent raw={content} />
			<div className={styles.articleDate}>Updated:{date}</div>
			<Links {...linkedPages} />
		</section>
	)
}

const Links = ({ previous, next }) => (
	<div className={styles.links}>
		<LinkedPageMaybe relation='previous' data={previous} />
		<LinkedPageMaybe relation='next' data={next} />
	</div>
)

const LinkedPageMaybe = ({ relation, data }) =>
	data ? <LinkedPage relation={relation} {...data} /> : <Blank />

const LinkedPage = ({ relation, ...data }) => (
	<div className={styles.linkedPage}>
		<span className={styles.relation}>{relation}</span>
		<Thumbnail {...data} slug={null} />
	</div>
)

const Blank = () => <div className={styles.blank} />

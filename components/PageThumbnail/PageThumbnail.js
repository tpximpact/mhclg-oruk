import styles from './PageThumbnail.module.css'
import Link from 'next/link'

export const PageThumbnail = ({ offsite, ...props }) => (
	<>{offsite ? <OffsiteThumbnail {...props} /> : <LocalThumbnail {...props} />}</>
)

const LocalThumbnail = ({ path, ...props }) => (
	<Link href={'/' + path} className={styles.thumbnail}>
		<Payload {...props} />
	</Link>
)

const OffsiteThumbnail = ({ path, suppressDetails, ...props }) => (
	<a href={path} className={styles.thumbnail} target='_blank'>
		<Payload offsite={true} suppressDetails={suppressDetails} {...props} />
		{!suppressDetails && (
			<span className={styles.itemBody}>
				<em>{path}</em> opens in a new window
			</span>
		)}
	</a>
)

const Payload = ({ title, date, slug, suppressDetails, offsite }) => (
	<span>
		<span className={styles.itemHeading}>
			{title} {offsite && '⤤'}
		</span>
		{!suppressDetails && (
			<>
				{slug && <span className={styles.itemBody}>{slug}</span>}
				{/*date && <span className={styles.itemDate}>{date}</span>*/}
			</>
		)}
	</span>
)

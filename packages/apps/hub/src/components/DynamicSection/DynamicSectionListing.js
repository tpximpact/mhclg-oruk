import styles from './DynamicSection.module.css'
import Link from 'next/link'

export const DynamicSectionListing = ({ mainHeading, data }) => {
	return (
		<section>
			<h1 className={styles.mainHeading}>{mainHeading}</h1>
			<ol className={styles.list}>
				{data.map((item, key) => (
					<li className={styles.item} key={key}>
						<Thumbnail {...item} />
					</li>
				))}
			</ol>
		</section>
	)
}

export const Thumbnail = ({ path, title, date, slug }) => (
	<Link href={'/' + path}>
		<span className={styles.itemHeading}>{title}</span>
		{date && <span className={styles.itemDate}>{date}</span>}
		{slug && <span className={styles.itemBody}>{slug}</span>}
	</Link>
)

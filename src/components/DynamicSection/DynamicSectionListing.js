import styles from './DynamicSection.module.css'
import { PageList } from '@/components/PageList'

export const DynamicSectionListing = ({ mainHeading, data }) => {
	return (
		<section>
			<h1 className={styles.mainHeading}>{mainHeading}</h1>
			<PageList data={data} />
		</section>
	)
}

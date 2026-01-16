import styles from './DynamicSection.module.css'
import { PageList } from '@/components/PageList'

interface PageListItem {
	title: string
	path: string
	date?: string
	slug?: string
}

interface DynamicSectionListingProps {
	mainHeading: string
	data: PageListItem[]
}

export const DynamicSectionListing = ({ mainHeading, data }: DynamicSectionListingProps) => {
	return (
		<section>
			<h1 className={styles.mainHeading}>{mainHeading}</h1>
			<PageList data={data} />
		</section>
	)
}

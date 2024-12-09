import styles from './Sitemap.module.css'
import Link from 'next/link'
import { PageList } from '@/components/PageList'
import { PageMargin } from '@/components/PageMargin'
import { formatNodesForPageMenu } from '@/utilities/formatNodesForPageMenu'
import { listDynamicSection } from '@/utilities/dynamicSection'

export const Sitemap = ({ showHeading = true, data }) => (
	<PageMargin>
		{showHeading && <h1 style={{ marginBottom: '4rem' }}>All pages on ORUK</h1>}
		<List data={data}>
			<li>
				<Link href={'/'}>Home</Link>
			</li>
		</List>
	</PageMargin>
)

const List = ({ data, children }) => (
	<ol className={styles.list}>
		{children}
		{data.map((node, i) => {
			return <Node data={node} key={i} />
		})}
	</ol>
)

const Node = ({ data }) => {
	if (!data.urlPath) return
	return (
		<li>
			<Link href={data.urlPath}>{data.label}</Link>
			{data.dynamic && (
				<PageList
					suppressDetails={true}
					data={listDynamicSection({
						rootContentFolder: data.urlPath
					})}
				/>
			)}
			{data.childNodes && (
				<PageList suppressDetails={true} data={formatNodesForPageMenu(data.childNodes)} />
			)}
		</li>
	)
}

import styles from './Sitemap.module.css'
import Link from 'next/link'
import { PageMargin } from '@tpx/PageMargin'

export const Sitemap = ({ showHeading=true, data }) => (
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
	if (data.todo) {
		return (
			<li className={styles.todo}>
				<Link href={data.urlPath}>{data.label} (todo)</Link>

				{data.childNodes ? <List data={data.childNodes} /> : null}
			</li>
		)
	}
	return (
		<li>
			<Link href={data.urlPath}>{data.label}</Link>

			{data.childNodes ? <List data={data.childNodes} /> : null}
		</li>
	)
}

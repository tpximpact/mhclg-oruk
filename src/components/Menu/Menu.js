import Link from 'next/link'
import styles from './Menu.module.css'
import { PageMargin } from '../PageMargin'

export const Menu = ({ ariaName, items, setShowMenu, open }) => {
	if (!items) {
		return
	}
	return (
		<div aria-label={ariaName} className={`${styles.Menu} ${open ? styles.open : null}`}>
			<PageMargin>
				<div className={styles.Innermenu}>
					{items.map((item, i) => (
						<MenuSection key={i} setShowMenu={setShowMenu} data={item} />
					))}
				</div>
			</PageMargin>
		</div>
	)
}

const MenuSection = ({ data, setShowMenu }) => {
	// Flatten menuItems so that dynamic child nodes and single nodes are merged into one array
	const menuItems = data.childNodes
		? data.childNodes.flatMap(node =>
				node.dynamic
					? data.dynamicChildNodes || []
					: [{ title: node.label, path: node.urlPath, offsite: node.offsite, slug: node.teaser }]
			)
		: data.dynamicChildNodes || []

	return (
		<div className={styles.MenuSection}>
			<div className={styles.heading}>{data.label}</div>

			<List setShowMenu={setShowMenu} data={menuItems} overflow={data.dynamicOverflow} />
		</div>
	)
}

const getSectionRoot = data => {
	if (data && Array.isArray(data)) {
		const components = data[0].path.split('/')
		return '/' + components[0]
	}
	return false
}

const List = ({ data, overflow, setShowMenu }) => {
	const sectionRoot = overflow ? getSectionRoot(data) : false
	return (
		<ol>
			{data &&
				data.map((item, key) => (
					<li className={styles.item} key={key}>
						{item.offsite ? (
							<a href={item.path}>{item.title} (opens in new window)</a>
						) : (
							<Link
								onClick={setShowMenu ? () => setShowMenu(false) : null}
								href={'/' + item.path}
								className={styles.thumbnail}
							>
								{item.title ? item.title : 'e'}
							</Link>
						)}
					</li>
				))}
			{overflow && (
				<li className={styles.overflow}>
					...plus <Link href={sectionRoot}>{overflow} more (show all)</Link>
				</li>
			)}
		</ol>
	)
}

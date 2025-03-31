import { formatNodesForPageMenu } from '@/utilities/formatNodesForPageMenu'
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
	return (
		<div className={styles.MenuSection}>
			<div className={styles.heading}>{data.label}</div>
			{data.dynamic && (
				<List
					setShowMenu={setShowMenu}
					data={data.dynamicChildNodes}
					overflow={data.dynamicOverflow}
				/>
			)}

			{data.childNodes && (
				<List setShowMenu={setShowMenu} data={formatNodesForPageMenu(data.childNodes)} />
			)}
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

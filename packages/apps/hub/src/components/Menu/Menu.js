import { formatNodesForPageMenu } from '@/util/formatNodesForPageMenu'
import Link from 'next/link'
import styles from './Menu.module.css'

export const Menu = ({ ariaName, items, setShowMenu }) => {
	return (
		<nav aria-label={ariaName} className={styles.Menu}>
			{items.map((item, i) => (
				<MenuSection key={i} setShowMenu={setShowMenu} data={item} />
			))}
		</nav>
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

const List = ({ data, overflow, setShowMenu }) => {
	return (
		<ol>
			{data &&
				data.map((item, key) => (
					<li className={styles.item} key={key}>
						{item.offsite ? (
							<a href={item.path}>{item.title} (opens in new window)</a>
						) : (
							<Link
								onClick={setShowMenu ? (() => setShowMenu(false)) : null}
								href={'/' + item.path}
								className={styles.thumbnail}
							>
								{item.title}
							</Link>
						)}
					</li>
				))}
			{overflow && <li>...plus {overflow} more </li>}
		</ol>
	)
}
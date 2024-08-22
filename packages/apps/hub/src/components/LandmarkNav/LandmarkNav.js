// BURGER css based on https://dev.to/cwrcode/create-hamburger-menu-using-pure-css-only-45k

'use client'

import Link from 'next/link'
import { useActivePathFragment } from '@/util/useActivePath'
import styles from './nav.module.css'

export const OffsiteItem = ({ label, urlPath }) => (
	<li className={`${styles.item} ${styles.offsite}`}>
		<a href={urlPath} target='_new'>
			<span className={styles.inner}>
				{label} <small>(new window)</small>
			</span>
		</a>
	</li>
)

const Submenu = ({ items }) => (
	<Menu wrapperClass={styles.wrapSub} className={styles.subMenu} items={items} />
)

export const SelectedItem = ({ label, urlPath, childNodes }) => (
	<li className={`${styles.item} ${styles.selected}`}>
		<a href={urlPath}>
			<span className={styles.inner}>{label}</span>
		</a>
		{childNodes ? <Submenu items={childNodes} /> : null}
	</li>
)

export const Item = ({ label, urlPath }) => (
	<li className={styles.item}>
		{urlPath && (
			<Link href={urlPath}>
				<span className={styles.inner}>{label}</span>
			</Link>
		)}
	</li>
)

export const NavigationItem = ({ hide, selected, offsite, ...props }) => {
	if (hide) return
	if (offsite) {
		return <OffsiteItem {...props} />
	}
	if (selected) return <SelectedItem {...props} />
	return <Item {...props} />
}

export const LandmarkNav = ({ items }) => {
	return (
		<nav className={styles.nav} role='navigation'>
			<div id={styles.menuToggle}>
				<input type='checkbox' />

				<span className={styles.burger}></span>
				<span className={styles.burger}></span>
				<span className={styles.burger}></span>

				<Menu
					wrapperClass={styles.wrapTop}
					id={styles.menu}
					className={styles.topMenu}
					items={items}
				/>
			</div>
		</nav>
	)
}

const Menu = ({ items, id, className, wrapperClass, ...props }) => {
	const checkActivePath = useActivePathFragment()
	return (
		<div className={wrapperClass}>
			<ol id={id} className={`${styles.menu} ${className}`} {...props}>
				{items.map((item, counter) => (
					<NavigationItem
						key={counter}
						styles={styles}
						selected={checkActivePath(item.urlPath)}
						{...item}
					/>
				))}
			</ol>
		</div>
	)
}

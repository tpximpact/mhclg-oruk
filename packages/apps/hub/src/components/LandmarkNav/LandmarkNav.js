// BURGER css based on https://dev.to/cwrcode/create-hamburger-menu-using-pure-css-only-45k

'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
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

const Submenu = ({ items, activePath }) => (
	<Menu
		isSubmenu={true}
		activePath={activePath}
		wrapperClass={styles.wrapSub}
		className={styles.subMenu}
		items={items}
	/>
)

export const SelectedItem = ({ isSubmenu, label, urlPath, childNodes, activePath }) => (
	<li className={`${styles.item} ${styles.selected}`}>
		<a href={urlPath}>
			<span className={styles.inner}>{label}</span>
		</a>
		{!isSubmenu && childNodes ? <Submenu activePath={activePath} items={childNodes} /> : null}
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
	const path = usePathname()
	return (
		<nav className={styles.nav} role='navigation'>
			<div id={styles.menuToggle}>
				<input type='checkbox' />

				<span className={styles.burger}></span>
				<span className={styles.burger}></span>
				<span className={styles.burger}></span>

				<Menu
					activePath={path}
					wrapperClass={styles.wrapTop}
					id={styles.menu}
					className={styles.topMenu}
					items={items}
				/>
			</div>
		</nav>
	)
}

const Menu = ({ isSubmenu, items, id, className, wrapperClass, activePath, ...props }) => {
	return (
		<div className={wrapperClass}>
			<ol id={id} className={`${styles.menu} ${className}`} {...props}>
				{items.map((item, counter) => (
					<NavigationItem
						key={counter}
						styles={styles}
						selected={checkActivePath(item.urlPath, activePath)}
						activePath={activePath}
						isSubmenu={isSubmenu}
						{...item}
					/>
				))}
			</ol>
		</div>
	)
}

const checkActivePath = (itemPath, activePath) => {
	if (!activePath) {
		return false
	}

	if (!itemPath) {
		return false
	}

	if (activePath === '/' && itemPath !== activePath) {
		return false
	}

	return activePath.startsWith(itemPath)
}

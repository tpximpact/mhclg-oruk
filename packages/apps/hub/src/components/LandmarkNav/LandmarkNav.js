'use client'

import Link from 'next/link'
import { useActivePathFragment } from '@/util/useActivePath'
import styles from './nav.module.css'

export const OffsiteItem = ({ label, urlPath }) => (
	<li className={`${styles.item} ${styles.offsite}`}>
		<a href={urlPath} target='_new'>
			<span className={styles.inner}>{label}</span>
		</a>
	</li>
)

const Submenu = ({ items }) => <NavigationMenu className={styles.submenu} items={items} />

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

const NavigationMenu = ({ items, className, ...props }) => {
	const checkActivePath = useActivePathFragment()
	return (
		<ol className={`${styles.menu} ${className}`} {...props}>
			{items.map((item, counter) => (
				<NavigationItem
					key={counter}
					styles={styles}
					selected={checkActivePath(item.urlPath)}
					{...item}
				/>
			))}
		</ol>
	)
}

export const LandmarkNav = ({ items }) => {
	return (
		<nav className={styles.nav}>
			<NavigationMenu className={styles.topMenu} items={items} />
		</nav>
	)
}

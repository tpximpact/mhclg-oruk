// BURGER css based on https://dev.to/cwrcode/create-hamburger-menu-using-pure-css-only-45k

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

const Submenu = ({ items }) => <NavigationMenu className={styles.subMenu} items={items} />

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
		/*
		<nav className={styles.nav}>
			<NavigationMenu className={styles.topMenu} items={items} />
		</nav>
		*/
		<nav role='navigation'>
			<div id={styles.menuToggle}>
				<input type='checkbox' />

				<span></span>
				<span></span>
				<span></span>

				<ul id={styles.menu}>
					<a href='#'>
						<li>Home</li>
					</a>
					<a href='#'>
						<li>About</li>
					</a>
					<a href='#'>
						<li>Info</li>
					</a>
					<a href='#'>
						<li>Contact</li>
					</a>
					<a href='https://erikterwan.com/' target='_blank'>
						<li>Show me more</li>
					</a>
				</ul>
			</div>
		</nav>
	)
}

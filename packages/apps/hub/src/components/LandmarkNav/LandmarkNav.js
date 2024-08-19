'use client'

import Link from 'next/link'
//import { usePathname } from 'next/navigation'
import { useActivePath } from '@/util/useActivePath'
import styles from './nav.module.css'
//import { PageMargin } from '@tpx/PageMargin'
//import { childrenOfNamedSiteItem } from '@/util/menuing'

/*
const useSubmenu = (items) => {
	const currentPath = usePathname()
	if (currentPath === '/') {
		return false
	}

	let submenu
	items.forEach((item) => {

		if(item.urlPath && currentPath.startsWith(item.urlPath)){
			submenu = childrenOfNamedSiteItem(item.name, items)
		}
	})
	return submenu

	// TODO: highlight sumbmenu
  }
	*/

export const OffsiteItem = ({ label, urlPath }) => (
	<li className={`${styles.item} ${styles.offsite}`}>
		<a href={urlPath} target='_new'>
			{label}
		</a>
	</li>
)

const Submenu = ({ items }) => <NavigationMenu className={styles.submenu} items={items} />

export const SelectedItem = ({ label, urlPath, childNodes }) => (
	<li className={`${styles.item} ${styles.offsite}`}>
		<a href={urlPath}>{label} *</a>
		{childNodes ? <Submenu items={childNodes} /> : null}
	</li>
)

export const Item = ({ label, urlPath }) => (
	<li className={styles.item}>{urlPath && <Link href={urlPath}>{label}</Link>}</li>
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
	const checkActivePath = useActivePath()
	return (
		<ol className={`${styles.menu} ${className}`} OL {...props}>
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

/*

  
const NavigationMenu = ({items, className, above, ...props}) =>{
	const checkActivePath = useActivePath()
	return( <ol className={`${styles.menu} ${className}` } {...props}>

{items && items.map((item, counter) => (
	<NavigationItem key={counter} styles={styles} selected={checkActivePath(item.urlPath)} {...item} />
))}
</ol>)}






export const LandmarkNav = ({ items }) => {

	const submenu = useSubmenu(items)

return (<nav className={styles.nav}> 

	<NavigationMenu className={styles.topMenu} items={items}/>

	
		{
submenu && 

<NavigationMenu className={styles.subMenu} items={submenu} above={1}/>

}

</nav>)

}


*/

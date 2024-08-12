'use client'

import { usePathname } from 'next/navigation'
import { useActivePath } from '@/util/useActivePath'
import styles from './nav.module.css'
import { PageMargin } from '@tpx/PageMargin'

import { NavigationItem } from '../NavigationItem'


const checkSubmenu = (items) => {
	const currentPath = usePathname()
	if (currentPath === '/') {
		return false
	}

	let submenu
	items.forEach((item) => {
		if(item.urlPath && currentPath.startsWith(item.urlPath)){
			submenu = item.children
		}
	})
	return submenu

	// TODO: highlight sumbmenu
  }
  
const NavigationMenu = ({items}) =>{
	const checkActivePath = useActivePath()
	return( <ol>
{items && items.map((item, counter) => (
	<NavigationItem key={counter} styles={styles} selected={checkActivePath(item.urlPath)} {...item} />
))}
</ol>)}

export const LandmarkNavigation = ({ items }) => {

	const submenu = checkSubmenu(items)

return (<nav className={styles.nav}> 
<PageMargin>
	<NavigationMenu items={items}/>
	</PageMargin>
	
		{
submenu && <div style={{background:"#f9f3eb", padding:"1rem 0 0"}}><PageMargin><NavigationMenu items={submenu}/></PageMargin></div>
}

</nav>)

}
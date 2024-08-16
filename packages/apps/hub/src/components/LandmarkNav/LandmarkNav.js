

'use client'

import { usePathname } from 'next/navigation'
import { useActivePath } from '@/util/useActivePath'
import styles from './nav.module.css'
//import { PageMargin } from '@tpx/PageMargin'
import { childrenOfNamedSiteItem } from '@/util/menuing'
import { NavigationItem } from '../NavigationItem'


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
  
const NavigationMenu = ({items, className, ...props}) =>{
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
<Centred>
<Aligner />
<NavigationMenu className={styles.subMenu} items={submenu}/>
<Aligner />
</Centred>
}

</nav>)

}


const Centred = ({children}) => <div className={styles.centred}>
{children}
	</div>

const Aligner = () => <div className={styles.aligner}>
	</div>
'use client'

import { usePathname } from 'next/navigation'
import { useActivePath } from '@/util/useActivePath'
import styles from './nav.module.css'
import { PageMargin } from '@tpx/PageMargin'

import { NavigationItem } from '../NavigationItem'

export const LandmarkNavigation = ({ items }) => {
	const checkActivePath = useActivePath()
	//const thisPath = usePathname()
	
// TODO sumbenu

return (<nav className={styles.nav}> 
<PageMargin><ol>
			{items && items.map((item, counter) => (
				<NavigationItem key={counter} styles={styles} selected={checkActivePath(item.urlPath)} {...item} />
			))}
		</ol>
</PageMargin>
</nav>)

		}

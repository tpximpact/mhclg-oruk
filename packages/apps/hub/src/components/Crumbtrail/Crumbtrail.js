'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Crumbtrail.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { getPathedSiteItem } from '@/util/menuing'
import { getSiteItems } from '@/util/getSiteItems'

const getLabelForPath = path => {
	const structure = flatten(getSiteItems(), null)

	structure.forEach(element => {
		console.log(element)
	})

	const matches = structure.filter(i => i.urlPath === path)

	return path
}

export const Crumbtrail = () => {
	const path = usePathname()
	if (path === '/') return <div style={{ marginTop: '6rem' }}></div>
	const fragments = path.split('/')
	const structure = getSiteItems()
	const crumbs = fragments.map((element, index) => {
		const rebuiltPath = fragments.slice(0, index + 1).join('/')
		const match = getPathedSiteItem(rebuiltPath, structure)
		return {
			label: match ? match.label : '',
			urlPath: rebuiltPath
		}
	})

	return (
		<PageMargin>
			{JSON.stringify(crumbs)}
			<nav className={styles.crumbtrail}>
				<ol>
					<NavigationItem urlPath='/' label='Home' />
					<NavigationItem urlPath='/' label='Developers' />
					<NavigationItem urlPath='/' label='Boing' />
				</ol>
			</nav>
		</PageMargin>
	)
}

const NavigationItem = ({ urlPath, label }) => (
	<li>
		<Link href={urlPath}>{label}</Link>
	</li>
)

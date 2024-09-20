'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Crumbtrail.module.css'
import {getPageWithPath} from '@/util/site'
import { PageMargin } from '@tpx/PageMargin'

export const generateCrumbs = path =>{
	const fragments = path.split('/')
	const crumbs = fragments.map((element, index) => {
		const rebuiltPath = fragments.slice(0, index + 1).join('/')
		const match = getPageWithPath(rebuiltPath)
		return {
			label: match ? match.label : '',
			urlPath: rebuiltPath
		}
	}).slice(1)
	return crumbs
}

export const Crumbtrail = () => {
	const path = usePathname()
	if (path === '/') return <Empty />
	return <Crumbs data={generateCrumbs(path)}/>
}

export const Empty = () => <div style={{ marginTop: '6rem' }}></div>

export const Crumbs = ({
	data
}) => <PageMargin>
			<nav className={styles.crumbtrail}>
				<ol>
					<NavigationItem urlPath='/' label='Home' />
					{
						data.map(
							(c,i) => i < data.length-1  &&
								<NavigationItem key={i} {...c}/>
						)
					}
				</ol>
			</nav>
		</PageMargin>

const NavigationItem = ({ urlPath, label }) => (
	<li>
		<Link href={urlPath}>{label}</Link>
	</li>
)

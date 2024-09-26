'use client'

import { usePathname } from 'next/navigation'
import styles from './header.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import { isDeveloperSection } from '@/util/isDeveloperSection'

export const LandmarkBanner = () => {
	const developersSection = isDeveloperSection(usePathname())
	return (
		<header role='banner' className={developersSection ? styles.developers : styles.header}>
			<PageMargin>
				<div className={styles.content}>
					<Link href='/'>
						<Logo colour={developersSection ? 'white' : '#5AC09E'} />
					</Link>
				</div>
			</PageMargin>
		</header>
	)
}

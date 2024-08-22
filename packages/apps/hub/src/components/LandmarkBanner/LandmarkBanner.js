import styles from './header.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export const LandmarkBanner = () => (
	<header role='banner' className={styles.header}>
		<PageMargin>
			<div className={styles.content}>
				<Link href='/'>
					<Logo colour='#5AC09E' />
				</Link>
			</div>
		</PageMargin>
	</header>
)

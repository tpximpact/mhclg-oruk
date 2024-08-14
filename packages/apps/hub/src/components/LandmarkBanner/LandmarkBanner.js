import styles from './header.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export const LandmarkBanner = ({ children }) => (
	<header role='banner' className={styles.header}>
		<PageMargin>
			<Link href='/'>
				<Logo colour='#5AC09E' />
			</Link>
			{children}
		</PageMargin>
	</header>
)

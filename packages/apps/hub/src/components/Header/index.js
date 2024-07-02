import styles from './Header.module.css'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { PageMargin } from '@tpx/PageMargin'
import Link from 'next/link'

export const Header = ({ selected, developer }) => (
	<header className={`${styles.header} ${developer && styles.developer}`}>
		<PageMargin>
			<Link href='/'>
				<Logo />
			</Link>
			<Navigation selected={selected} />
		</PageMargin>
	</header>
)

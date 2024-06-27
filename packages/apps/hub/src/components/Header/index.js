import styles from './Header.module.css'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'

export const Header = ({ selected, developer }) => (
	<header className={`${styles.header} ${developer && styles.developer }` }>
		<Logo />
		<Navigation selected={selected} />
	</header>
)

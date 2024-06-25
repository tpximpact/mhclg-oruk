import styles from './Header.module.css'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'

export const Header = ({ selected }) => (
	<header className={styles.header}>
		<Logo />
		<Navigation selected={selected} />
	</header>
)

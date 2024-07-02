import styles from './Footer.module.css'
import { Lower } from './Lower'
import { Upper } from './Upper'

export const Footer = () => (
	<footer className={styles.footer}>
		<Upper />
		<Lower />
	</footer>
)

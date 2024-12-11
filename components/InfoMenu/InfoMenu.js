import styles from './InfoMenu.module.css'
import Link from 'next/link'

export const InfoMenu = ({ items }) => {
	if (!items) {
		return
	}
	return (
		<ol className={styles.InfoMenu}>
			{items.map(item => (
				<li key={item.name}>
					<Link href={'/info/' + item.contentPath}>{item.label}</Link>
				</li>
			))}
		</ol>
	)
}

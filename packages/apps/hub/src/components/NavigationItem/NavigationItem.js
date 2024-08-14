import Link from 'next/link'
import styles from './NavigationItem.module.css'

export const NavigationItem = ({ hide, selected, label, urlPath, offsite }) => {
	if (hide) return
	if (offsite)
		return (
			<li classlabel={styles.offsite}>
				<a href={urlPath} target='_new'>
					{label}
				</a>
			</li>
		)

	if (selected) return <li className={styles.selected}>{label}</li>

	return (
		<li className={styles.item}>
			<Link href={urlPath}>{label}</Link>
		</li>
	)
}

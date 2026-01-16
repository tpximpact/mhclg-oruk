import styles from './InfoMenu.module.css'
import Link from 'next/link'

interface InfoMenuItem {
	name: string
	contentPath: string
	label: string
}

interface InfoMenuProps {
	items?: InfoMenuItem[]
}

export const InfoMenu = ({ items }: InfoMenuProps) => {
	if (!items) {
		return null
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

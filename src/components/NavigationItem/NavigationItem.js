import Link from 'next/link'

import styles from './NavigationItem.module.css'

export const NavigationItem = ({ 
	todo, 
	hide, 
	selected, 
	offsite, 
	...props
}) => {
	if (hide) return

	if (offsite) {
		return <OffsiteItem {...props} />
	}
	if (selected) return <SelectedItem {...props} />
	if (todo) {
		return <Todo {...props} />
	}
	return <Item {...props} />
}

export const SelectedItem = ({ label, urlPath }) => (
	<li className={`${styles.item} ${styles.selected}`}>
		<a href={urlPath}>
			<span className={styles.inner}>{label}</span>
		</a>
	</li>
)

export const Item = ({ label, urlPath }) => (
	<li className={styles.item}>
		{urlPath && (
			<Link href={urlPath}>
				<span className={styles.inner}>{label}</span>
			</Link>
		)}
	</li>
)

export const Todo = ({ label, urlPath }) => (
	<li className={`${styles.item} ${styles.todo}`}>
		{urlPath && (
			<Link href={urlPath}>
				<span className={styles.inner}>{label}</span>
			</Link>
		)}
	</li>
)

export const OffsiteItem = ({ label, urlPath }) => (
	<li className={`${styles.item} ${styles.offsite}`}>
		<a href={urlPath} target='_new'>
			<span className={styles.inner}>
				{label} <small>(new window)</small>
			</span>
		</a>
	</li>
)

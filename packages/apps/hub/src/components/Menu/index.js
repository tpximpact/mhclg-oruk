import styles from './Menu.module.css'
import Link from 'next/link'

export const Menu = ({folder, items}) => {

	return (
		<main>
			{items.map(item => (
				<MenuItem key={item.target} folder={folder} teaser={item.teaser} absolute={item.absolute} text={item.text} target={item.target} />
			))}
		</main>
	)
}

const MenuItem = props => (
	<Link className={styles.menuItem} href={
		props.absolute ? 
		 props.target
		:
		'/' + props.folder + '/' + props.target
		}>
		{props.text}
		{props.teaser && <span className={styles.teaser}>{props.teaser}</span>}
	</Link>
)

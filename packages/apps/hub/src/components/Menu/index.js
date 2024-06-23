import styles from './Menu.module.css'
import Link from 'next/link'

export const Menu = ({folder, items}) => {

	return (
		<main>
			{items.map(item => (
				<MenuItem key={item.target} offsite={item.offsite} folder={folder} teaser={item.teaser} absolute={item.absolute} text={item.text} target={item.target} />
			))}
		</main>
	)
}

const MenuItem = props => {
	if (props.offsite){
return <a className={styles.menuItem} href={props.target} target="_new">{props.text}</a>
	}

	return(

	<Link className={styles.menuItem} href={
		props.absolute ? 
		 props.target
		:
		'/' + props.folder + '/' + props.target
		}>
		{props.text}
		{props.teaser && <span className={styles.teaser}>{props.teaser}</span>}
	</Link>
)}

import styles from './Menu.module.css'
import Link from 'next/link'

export const Menu = () => {
	const items = [
		{
			target: '01-steps-to-adopting-the-standard',
			title: 'Steps to adopting the standard'
		},
		{
			target: '01-features-of-the-standard',
			title: 'Features of  the standard'
		},
		{
			target: '/tools/dashhboard',
			title: 'ata feed dahboard'
		}
	]
	return (
		<main>
			{items.map(item => (
				<MenuItem key={item.target} title={item.title} target={item.target} />
			))}
		</main>
	)
}

const MenuItem = props => (
	<Link className={styles.menuItem} href={props.target}>
		{props.title}
	</Link>
)

import styles from './Menu.module.css'
import Link from 'next/link'
import { buildItemMenuData } from '@/util/content'

export const Menu = () => {
	const items = buildItemMenuData('how')
	items.push({
		target: '/tools/dashhboard',
		text: 'Data feed dashboard'
	})

	return (
		<main>
			{items.map(item => (
				<MenuItem key={item.target} text={item.text} target={item.target} />
			))}
		</main>
	)
}

const MenuItem = props => (
	<Link className={styles.menuItem} href={'/' + 'how' + '/' + props.target}>
		{props.text}
	</Link>
)

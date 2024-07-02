import Link from 'next/link'
import styles from './Navigation.module.css'
import { NAVIGATION_ITEMS } from '@/util/navigation'

export const Navigation = ({ selected }) => (
	<nav className={styles.nav}>
		<ol>
			{NAVIGATION_ITEMS.map(item => (
				<NavItem key={item.target} selectedTarget={selected} {...item} />
			))}
		</ol>
	</nav>
)

const NavItem = ({ selectedTarget, target, text, offsite }) => {
	if (offsite)
		return (
			<li className={styles.offsite}>
				<a href={target} target='_new'>
					{text}
				</a>
			</li>
		)

	if (selectedTarget === target) return <li className={styles.selected}>{text}</li>

	return (
		<li>
			<Link href={'/' + target}>{text}</Link>
		</li>
	)
}

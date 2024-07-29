import styles from './Crumbtrail.module.css'
import { NavigationItem } from '../NavigationItem'
import { PageMargin } from '@tpx/PageMargin'

export const Crumbtrail = ({ crumbs }) => (
	<PageMargin>
		<nav className={styles.crumbtrail}>
			<ol>
				<NavigationItem urlPath='/' label='Home' />
				{crumbs.map((data, index) => (
					<NavigationItem key={index} {...data} />
				))}
			</ol>
		</nav>
	</PageMargin>
)

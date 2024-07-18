import style from './Masthead.module.css'
import Link from 'next/link'
import { PageMargin } from '@tpx/PageMargin'

export const Masthead = ({ children }) => {
	return (
		<main className={style.Masthead}>
			<PageMargin>
				<nav style={{ padding: '2rem' }}>
					<Link href='/'>[home]</Link>
				</nav>
			</PageMargin>
		</main>
	)
}

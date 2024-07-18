import style from './Masthead.module.css'
import Link from 'next/link'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'

export const Masthead = ({ children }) => {
	return (
		<header className={style.Masthead}>
			<PageMargin>
				<nav>
					<Link href='/'>
						<Logo />
					</Link>
				</nav>
			</PageMargin>
		</header>
	)
}

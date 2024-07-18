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
					<ol>
						<li>
							<Link href='/developer/tools/dashboard'>Dashboard</Link>
						</li>
						<li>
							<Link href='/developer/tools/validator'>Validator</Link>
						</li>
					</ol>
				</nav>
				<div>{children}</div>
			</PageMargin>
		</header>
	)
}

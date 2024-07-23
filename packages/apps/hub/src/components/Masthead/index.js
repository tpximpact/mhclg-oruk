import styles from './Masthead.module.css'
import Link from 'next/link'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'

export const Masthead = ({ selected, developer, children }) => {
	return (
		<header className={`${styles.Masthead} ${developer && styles.developer}`}>
			<PageMargin>
				<div className={styles.box}>
					<div className={styles.logo}>
						<Link href='/'>
							<Logo />
						</Link>
					</div>
					<div className={styles.spacer}></div>
					<div className={styles.nav}>
						<Navigation selected={selected} />
					</div>
				</div>
				{/*
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
				</nav>*/}
				<div>{children}</div>
			</PageMargin>
		</header>
	)
}

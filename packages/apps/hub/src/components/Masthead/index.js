import style from './Masthead.module.css'
import Link from 'next/link'
import { PageMargin } from '@tpx/PageMargin'

export const Masthead = ({ children }) => {
	return (
		<main className={style.Masthead}>
			<PageMargin>{children}</PageMargin>
		</main>
	)
}

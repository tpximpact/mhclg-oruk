import style from './Footer.module.css'

import { PageMargin } from '@tpx/PageMargin'

export const Footer = ({ children }) => {
	return (
		<footer className={style.Footer}>
			<PageMargin>
				This is the footer
				{children}
			</PageMargin>
		</footer>
	)
}

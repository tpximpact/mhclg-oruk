import style from './NoJsBanner.module.css'

import { PageMargin } from '@/components/PageMargin'

export const NoJsBanner = () => (
	<noscript>
		<div className={style.banner}>
			<PageMargin>
				JavaScript is disabled in your browser. To get the best from this website, please{' '}
				<a className={style.offsite} href='https://www.enable-javascript.com'>
					{' '}
					consider enabling JavaScript
				</a>
				.
			</PageMargin>
		</div>
	</noscript>
)

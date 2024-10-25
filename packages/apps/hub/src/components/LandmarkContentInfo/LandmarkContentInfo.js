import styles from './footer.module.css'
import { PageMargin } from '@tpx/PageMargin'
import Link from 'next/link'

export const LandmarkContentInfo = ({ showNav }) => (
	<footer role='contentInfo' className={styles.footer}>
		<div className={styles.bottom}>
			{showNav ? (
				<PageMargin>
					<Link href='/sitemap'>Sitemap</Link>
				</PageMargin>
			) : null}
			<PageMargin>Copyright © 2024 Open Referral UK</PageMargin>
		</div>
	</footer>
)

import styles from './footer.module.css'
import { PageMargin } from '@tpx/PageMargin'

export const LandmarkContentInfo = () => <footer
className={styles.footer}
>
	<div className={styles.bottom}>
		<PageMargin>
			Copyright © 2024 Open Referral UK
		</PageMargin>
	</div>
</footer>
import styles from './footer.module.css'
import { PageMargin } from '@tpx/PageMargin'
import Link from 'next/link'
import { Menu} from '@/components/Menu'
import { InfoMenu} from '@/components/InfoMenu'

export const LandmarkContentInfo = ({ showNav, items }) => (
	<footer role='contentInfo' className={styles.footer}>
		<div className={styles.bottom}>
			{showNav ? (
				<>
				<Menu ariaName="footermenu" items={items}  />
		
				<PageMargin>
					<div style={{paddingTop:"6rem"}}>
					<Link href='/sitemap'>Sitemap</Link>
					</div>
					<div>
						<InfoMenu />
						</div>
				</PageMargin>
				</>
			) : null}
			<PageMargin><div className={styles.copyright}>Copyright © 2024 Open Referral UK</div></PageMargin>
		</div>
	</footer>
)

import styles from './NavigationPanel.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export const NavigationPanel = () => {
    return(
        <header>
            <Topbar />
        </header>
    )
}

const Topbar = ({developersSection=1 }) => {
    return <div className={styles.Topbar}>
<PageMargin>
				<div className={styles.content}>
                    <div  className={styles.left}>
					<Link href='/'>
						<Logo   colour={developersSection ? 'white' : 'var(----colour-dark-green)'} />
					</Link>
                    </div>
                    <div className={styles.centre}>
                        </div>
                    <div  className={styles.right}>
Menu
                        </div>
				</div>
			</PageMargin>
        </div>
}

const Panel = () => {
    return <div className={styles.Panel}>
Panel
        </div>
}
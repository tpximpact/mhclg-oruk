import styles from './header.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'

export const LandmarkBanner = ({
	children
}) => <header 
role="banner"
className={styles.header}>
<PageMargin>
<Logo colour="#5AC09E" />
{children}
</PageMargin>
</header>
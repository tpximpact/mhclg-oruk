import styles from './BannerMHCLG.module.css'
import { PageMargin } from '@/components/PageMargin'

export const BannerMHCLG = () => (
  <div className={styles.BannerMHCLG}>
    <PageMargin>
      <div className={styles.inner}>
        <div className={styles.supported}>Open Referral UK is supported by</div>
        <div>
          <Logo />
        </div>
      </div>
    </PageMargin>
  </div>
)

const Logo = () => (
  <div className={styles.logoOuter}>
    <div className={styles.logoInner}>
      <span className={styles.logoType}>
        Ministry of Housing,
        <br />
        Communities &amp; <br />
        Local Government
      </span>
    </div>
  </div>
)

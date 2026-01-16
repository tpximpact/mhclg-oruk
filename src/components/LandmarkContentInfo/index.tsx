import styles from './footer.module.css'
import { PageMargin } from '@/components/PageMargin'
import Link from 'next/link'
//import { Menu } from '@/components/Menu'
import { InfoMenu } from '@/components/InfoMenu'
import { BannerMHCLG } from '@/components/BannerMHCLG'

interface InfoMenuItem {
  name: string
  contentPath: string
  label: string
}

interface LandmarkContentInfoProps {
  showNav: boolean
  //items: any[]
  infoItems: InfoMenuItem[]
}

export const LandmarkContentInfo = ({
  showNav,
  //items,
  infoItems
}: LandmarkContentInfoProps) => (
  <footer id='pageFooter' role='contentInfo' className={styles.footer}>
    <BannerMHCLG />
    <div className={styles.bottom}>
      {showNav ? (
        <>
          {/*
					<Menu ariaName='footermenu' items={items} />
*/}
          <PageMargin>
            <div style={{ paddingTop: '6rem' }}>
              <Link href='/sitemap'>Sitemap</Link>
            </div>
            <div>
              <InfoMenu items={infoItems} />
            </div>
          </PageMargin>
        </>
      ) : null}
      <PageMargin>
        <div className={styles.copyright}>
          Copyright © 2024-5 Open Referral UK. This site is released under the{' '}
          <a
            className={styles.break}
            href='https://github.com/tpximpact/mhclg-oruk/blob/main/LICENSE'
          >
            Creative Commons Attribution-ShareAlike 4.0 International Public License
          </a>
          .
        </div>
      </PageMargin>
    </div>
  </footer>
)

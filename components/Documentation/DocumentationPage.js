import styles from './DocumentationPage.module.css'
import Columns from '@/components/Columns'
import { InPageMenu } from '@/components/InPageMenu'
import {ContentHTML } from '@/components/ContentHTML'

export const DocumentationPage = ({
	contentForAllVersions,
	contentForThisVersion,
	children,
	menuItems,
	menuTitle
}) => 
	<Columns layout='31'>
<div>
		<div className={styles.allVersionsContent}>
		<ContentHTML html={contentForAllVersions} />
		</div>
		<div className={styles.thisVersionContent}>
		<ContentHTML html={contentForThisVersion} />
		</div>
		{
			children
		}
			</div>
			<div className={styles.Menu}>
				<InPageMenu title={
					menuTitle
					}
					items={menuItems} />
			</div>
		</Columns>

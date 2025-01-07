import styles from './APIModel.module.css'
import Columns from '@/components/Columns'
import { InPageMenu } from '@/components/InPageMenu'
import {ContentHTML } from '@/components/ContentHTML'
import {Endpoint } from './Endpoint'

export const APIModel = ({
	allVersionsContent,
	data
}) => {
	const endpoints = data.rootSpec.parsed.paths
	const menuItems = Object.keys(endpoints).map(
		key => {
			// const ep = endpoints[key]
			const item = {
				title: key,
				target: key
			}
			return(item)
		}
	)
	
return (<>
WORK IN PROGRESS
 
    
<Columns layout='31'>
<div>
<div className={styles.allVersionsContent}>
		<ContentHTML html={allVersionsContent} />
		</div>
		<div className={styles.thisVersionContent}>
		<ContentHTML html={data.htmlContent} />
		</div>
			<div className={styles.APIModel}>
			{
				Object.keys(endpoints).map(
					key => <Endpoint key={key} path={key} data={endpoints[key]} />
				)
			}
			</div>
			</div>
			<div className={styles.Menu}>
				<InPageMenu title='Classes' items={menuItems} />
			</div>
		</Columns>

    </>)}

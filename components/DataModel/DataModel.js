import styles from './DataModel.module.css'
import { Schema } from './Schema'
import Columns from '@/components/Columns'
import { InPageMenu } from '@/components/InPageMenu'
import {ContentHTML } from '@/components/ContentHTML'
export const DataModel = ({ 
	allVersionsContent,
	data
}) => {
	
	const keys =  Object.keys(data.schemata).sort()
	const allSchemas = keys.map(key => data.schemata[key].name || key)
	const menuItems = allSchemas.map(item => ({
		title: item,
		target: item
	}))
	return (
		<>
		<div className={styles.allVersionsContent}>
		<ContentHTML html={allVersionsContent} />
		</div>
		<div className={styles.thisVersionContent}>
		<ContentHTML html={data.htmlContent} />
		</div>
		<Columns layout='31'>
			<div className={styles.DataModel}>
			
				{keys.map(key => (
					<Schema 
						key={key} 
						parentKeyName={key}
						data={data.schemata[key]} 
						allSchemas={allSchemas} />
				))}
			</div>
			<div className={styles.Menu}>
				<InPageMenu title='Classes' items={menuItems} />
			</div>
		</Columns>
		</>
	)
}


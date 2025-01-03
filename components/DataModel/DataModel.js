import styles from './DataModel.module.css'
import { Schema } from './Schema'
import Columns from '@/components/Columns'
import { InPageMenu } from '@/components/InPageMenu'

export const DataModel = ({ definition, children }) => {
	const allSchemas = Object.keys(definition.schemas).sort().map(key => definition.schemas[key].name)
	const menuItems = allSchemas.map(item => ({
		title: item,
		target: item
	}))
	return (
		<Columns layout='31'>
			<div className={styles.DataModel}>
				{children}
				{Object.keys(definition.schemas).sort().map(key => (
					<Schema key={key} data={definition.schemas[key]} allSchemas={allSchemas} />
				))}
			</div>
			<div className={styles.Menu}>
				<InPageMenu title='Classes' items={menuItems} />
			</div>
		</Columns>
	)
}

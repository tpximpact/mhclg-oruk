import styles from './DataModel.module.css'
	import {Schema} from './Schema'
	import Columns from '@/components/Columns'
	
	
export const DataModel = ({ 
	definition
}) => {
	const allSchemas = definition.schemas.map(
	schema => schema.name
	)
return(<Columns layout="31">
	<div className={styles.DataModel}>
		{
			definition.schemas.map(
				(schema,i) => <Schema key={i} data={schema}
				allSchemas={allSchemas}
				/>
			)
		}
	</div>
	<div className={styles.Menu}>
menu
	</div>
</Columns>)

}

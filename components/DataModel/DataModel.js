import styles from './DataModel.module.css'
	import {Schema} from './Schema'
	import Columns from '@/components/Columns'
	
	
export const DataModel = ({ 
	definition
}) => (
<Columns layout="31">
	<div className={styles.DataModel}>
		{
			definition.schemas.map(
				(schema,i) => <Schema key={i} data={schema}/>
			)
		}
	</div>
	<div className={styles.Menu}>
	menu
	</div>
</Columns>

)

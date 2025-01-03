import styles from './DataModel.module.css'
	import {Schema} from './Schema'
	import Columns from '@/components/Columns'
	import {InPageMenu} from '@/components/InPageMenu'
	
export const DataModel= ({ 
	definition,children
}) => {
	const allSchemas = definition.schemas.map(
	schema => schema.name
	)
	const menuItems = allSchemas.map(
	item => ({
		title: item,
		target: item
	})
	)
return(<Columns layout="31">
	<div className={styles.DataModel}>
	{children}
		{
			definition.schemas.map(
				(schema,i) => <Schema key={i} data={schema}
				allSchemas={allSchemas}
				/>
			)
		}
	</div>
	<div className={styles.Menu}>
<InPageMenu title="Classes:" items={menuItems}/>
	</div>
</Columns>)

}



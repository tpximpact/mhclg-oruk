import styles from './DataModel.module.css'

export const DataModel = ({ 
	definition
}) => (
	<div className={styles.DataModel}>
		{
			definition.schemas.map(
				(schema,i) => <Schema key={i} data={schema}/>
			)
		}
	</div>
)

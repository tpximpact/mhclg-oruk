import styles from './DataModel.module.css'

export const DataModel = ({ 
	defintion
}) => (
	<div className={styles.DataModel}>
		{
			definiton.schemas.map(
				(schema,i) => <Schema key={i} data={schema}/>
			)
		}
	</div>
)

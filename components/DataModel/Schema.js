import styles from './Schema.module.css'
import {Property} from './Property'
export const Schema = ({
	data
}) => <div className={styles.Schema}>
<div className={styles.name}>{data.name}</div>
<div className={styles.description}>{data.description}</div>
<div className={styles.properties}>
	{
		Object.keys(data.properties).map(
			(pk, i)  => <Property key={i} data={data.properties[pk]}/>
		)
	}
</div>
</div>
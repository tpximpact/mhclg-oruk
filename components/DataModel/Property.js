import styles from './Property.module.css'
import {Badge} from './Badge'

export const Property = ({
	data
}) =>
<div className={styles.Property}>
	<div className={styles.heading}>
		<span className={styles.name}>{data.name}</span> 
		
	</div>
	<div className={styles.fields}>
		<div className={styles.title}>{data.title} <Badges data={data}/></div>
		
		<div className={styles.description}>{data.description}
		</div>
		
		<div className={styles.type}>{data.type}{data.format ? ": " : null} {data.format}
		{data.example &&
			<span className={styles.example}>e.g.: <code>{data.example}</code></span>}
		</div>
		</div>
</div>

const Badges = ({
	data
})  => <div className={styles.badges}> 
		<Badge 
		colour="black"
		background="#fecdd3"
		label="required"/>
		
		{
			isUnique(data) ? 
			<Badge 
			colour="black"
		background="#e9d5ff"
			label="unique"/>
		
			: null
		}
		</div>

const isRequired = data => data.required
const isUnique = data => data.constraints && data.constraints.unique
import styles from './Property.module.css'
import {Badge} from './Badge'
import {filenameToName} from '@/utilities/filenameToName'

export const Property = ({
	data,
	required
}) =>
<div className={styles.Property}>
	<div className={styles.heading}>
		<span className={styles.name}>{data.name}</span> 
		
	</div>
	<div className={styles.fields}>
		<div className={styles.title}>{data.title} <Badges required={required} data={data}/></div>
		
		<div className={styles.description}>{data.description}
		</div>
		
		<Datatype data={data} />
		
		
		</div>
</div>

const Badges = ({
	data,
	required
})  => <div className={styles.badges}> 
		{required ? <Badge 
		colour="black"
		background="#fecdd3"
		label="required"/> : null}
		
		{
			isUnique(data) ? 
			<Badge 
			colour="black"
		background="#e9d5ff"
			label="unique"/>
		
			: null
		}
		</div>

const isUnique = data => data.constraints && data.constraints.unique

const Datatype = ({
	data
}) => {
	let type, format
	if (data.type) {
		if (data.type==="array" || data.items) {
			type="array"
			format = <> <span className={styles.of}>of</span> <LinkedReference data={data.items}/></>
		} else {
			type= data.type
		format=data.format
		}
	} else { 
		if (data["$ref"]) {
			type="object"
		format = <LinkedReference data={data}/>
		}
	}
	
	
	return <div className={styles.type}>
	{type}
	{format ? ": " : null} {format}
	{data.example &&
			<span className={styles.example}>e.g.: <code>{data.example}</code></span>}
	</div>
}

const LinkedReference = ({data}) => <a href={`#${toAnchorName(data["$ref"])}` }
		className={styles.modelLink}>{toAnchorName(data["$ref"])}</a>

const toAnchorName = reference => filenameToName(reference)
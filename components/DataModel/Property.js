import styles from './Property.module.css'
import { Badge } from './Badge'
import { filenameToName } from '@/utilities/filenameToName'

export const Property = ({ data, required, allSchemas }) => (
	<div className={styles.Property}>
		<div className={styles.heading}>
			<span className={styles.name}>{data.name}</span>
		</div>
		<div className={styles.fields}>
			<div className={styles.title}>
				{data.title} <Badges required={required} data={data} />
			</div>

			<div className={styles.description}>{data.description}</div>

			<Datatype data={data} allSchemas={allSchemas} />
		</div>
	</div>
)

const Badges = ({ data, required }) => (
	<div className={styles.badges}>
		{required ? <Badge colour='black' background='#fecdd3' label='required' /> : null}

		{isUnique(data) ? <Badge colour='black' background='#e9d5ff' label='unique' /> : null}
	</div>
)

const isUnique = data => data.constraints && data.constraints.unique

const OfCopula =  () => <span className={styles.of}>of</span>

const getType = (data) => {
    if (data.type === 'array' || data.items) return 'array';
    if (data.$ref) return 'object'; // FIXME is this behaviour correct? Should it be an array?
    return data.type;
  };
  
const getFormat = ({type,data,allSchemas}) => {
    let format

	switch (type) {
		case 'array':
			format = <><OfCopula /> <LinkedReference data={data.items} /></>
    		break;
		case 'object':
    		format = <LinkedReference data={data} />
    		break;
		case 'string':
			if (data.format === 'uuid') {
				const model = propertyNameToModel(data.name)
				let linked
				if (model && allSchemas.includes(model)) {
					let modelData = {}
					modelData['$ref'] = model
					linked = <><OfCopula /> <LinkedReference data={modelData} /></>
				}
				format = <>uuid {linked}</>
			} else {
				format = data.format
			}
			break;
  	default:
    	format = data.format
	}
	return format && <>: {format}</>
  };

const Datatype = ({ data, allSchemas }) => {
	const type = getType(data)
	const format = getFormat({type,data,allSchemas})
	
	return (
		<div className={styles.type}>
			{type}
			{format}
			{data.example && (
				<span className={styles.example}>
					e.g.: <code>{data.example}</code>
				</span>
			)}
		</div>
	)
}

const LinkedReference = ({ data }) => (
	<a href={`#${toAnchorName(data['$ref'])}`} className={styles.modelLink}>
		{toAnchorName(data['$ref'])}
	</a>
)

const toAnchorName = reference => filenameToName(reference)

const propertyNameToModel = (name) => {
  const suffix = '_id'
	return name && name.endsWith(suffix) ? name.replace(suffix, '') : null;
}
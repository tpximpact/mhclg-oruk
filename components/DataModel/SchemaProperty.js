import styles from './SchemaProperty.module.css'
import {DocumentationLineItem} from '@/components/Documentation'
import { BadgeUnique, BadgeRequired } from '@/components/Badge'
import { filenameToName } from '@/utilities/filenameToName'


export const SchemaProperty = ({ 
	parentKeyName, 
	data, 
	required, 
	allSchemas,
	useFullPath }) => (
<DocumentationLineItem title={data.name || parentKeyName}>
<div className={styles.title}>
				{data.title} <Badges required={required} data={data} />
			</div>

			<div className={styles.description}>{data.description}</div>

			<Datatype data={data} allSchemas={allSchemas} useFullPath={useFullPath}/>
			<Length data={data} />
			<Pattern data={data} />
</DocumentationLineItem>
)

const Pattern = ({ data }) => {
	if (data.pattern) {
		return (
			<div className={styles.pattern}>
				Pattern: <code>{data.pattern}</code>
			</div>
		)
	}
	return null
}

const Length = ({ data }) => {
	if (data.maxLength || data.minLength) {
		return (
			<div>
				Length {data.minLength && <>minimum: {data.minLength}</>}{' '}
				{data.maxLength && <>maximum: {data.maxLength}</>}
			</div>
		)
	}
	return null
}

const Badges = ({ data, required }) => (
	<div className={styles.badges}>
		{required ? <BadgeRequired /> : null}

		{isUnique(data) ? <BadgeUnique /> : null}
	</div>
)

const isUnique = data => data.constraints && data.constraints.unique

const OfCopula = ({useInstances}) => <span className={styles.of}>{useInstances && " of instances "}of</span>

const getType = data => {
	if (data.type === 'array' || data.items) return 'array'
	if (data.$ref) return 'object' // FIXME is this behaviour correct? Should it be an array?
	return data.type
}

const getFormat = ({ 
	type, 
	data, 
	allSchemas,
	useFullPath
}) => {
	let format

	switch (type) {
		case 'array':

			format = (
				<> 
					<OfCopula useInstances={true}/> <LinkedReference data={data.items} useFullPath={useFullPath}/>
				</>
			)
			break
		case 'object':
			format = <LinkedReference data={data}  useFullPath={useFullPath}/>
			break
		case 'string':
			if (data.format === 'uuid') {
				const model = propertyNameToModel(data.name)
				let linked
				if (model && allSchemas.includes(model)) {
					let modelData = {}
					modelData['$ref'] = model
					linked = (
						<>
							<OfCopula /> <LinkedReference data={modelData}  useFullPath={useFullPath}/>
						</>
					)
				}
				format = <>uuid {linked}</>
			} else if (data.enum) {
				format = <code style={{ fontStyle: 'normal' }}>{data.enum.join(' | ')}</code>
			} else {
				format = data.format
			}
			break
		default:
			format = data.format
	}
	return format && <>: {format}</>
}

const Datatype = ({ data, allSchemas, useFullPath }) => {
	const type = getType(data)
	const format = getFormat({ type, data, allSchemas,  useFullPath })

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

const LinkedReference = ({ 
	data,
useFullPath
}) => {
	let target = `#${toAnchorName(data['$ref'])}`
	if (useFullPath) {
		target = "/developers/schemata" + target
	}
	return (
	<a href={target} className={styles.modelLink}>
		{toAnchorName(data['$ref'])}
	</a>
)}

const toAnchorName = reference => {
	// if there's a full path, get rid of it
	if(reference.includes("/")) {
		reference = reference.split("/").pop()
	}
	
	return filenameToName(reference)
}

const propertyNameToModel = name => {
	const suffix = '_id'
	return name && name.endsWith(suffix) ? name.replace(suffix, '') : null
}

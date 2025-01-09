import styles from './Property.module.css'
import {DocumentationLineItem} from '@/components/Documentation'
import { BadgeUnique, BadgeRequired } from '@/components/Badge'
import { filenameToName } from '@/utilities/filenameToName'

export const Property = ({ parentKeyName, data, required, allSchemas }) => (
<DocumentationLineItem title={data.name || parentKeyName}>
	<div className={styles.title}>
				{data.title} <Badges required={required} data={data} />
			</div>

			<div className={styles.description}>{data.description}</div>

			<Datatype data={data} allSchemas={allSchemas} />
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

const OfCopula = () => <span className={styles.of}>of</span>

const getType = data => {
	if (data.type === 'array' || data.items) return 'array'
	if (data.$ref) return 'object' // FIXME is this behaviour correct? Should it be an array?
	return data.type
}

const getFormat = ({ type, data, allSchemas }) => {
	let format

	switch (type) {
		case 'array':
			format = (
				<>
					<OfCopula /> <LinkedReference data={data.items} />
				</>
			)
			break
		case 'object':
			format = <LinkedReference data={data} />
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
							<OfCopula /> <LinkedReference data={modelData} />
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

const Datatype = ({ data, allSchemas }) => {
	const type = getType(data)
	const format = getFormat({ type, data, allSchemas })

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

const propertyNameToModel = name => {
	const suffix = '_id'
	return name && name.endsWith(suffix) ? name.replace(suffix, '') : null
}

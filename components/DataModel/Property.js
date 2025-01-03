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

const Datatype = ({ data, allSchemas }) => {
	let type, format
	if (data.type) {
		if (data.type === 'array' || data.items) {
			type = 'array'
			format = (
				<>
					{' '}
					<span className={styles.of}>of</span> <LinkedReference data={data.items} />
				</>
			)
		} else {
			type = data.type
			format = data.format
			// KLUDGE - if this is a uuid it might be a foreign key
			if (format === 'uuid') {
				const model = propertyNameToModel(data.name)
				if (model && allSchemas.includes(model)) {
					let modelData = {}
					modelData['$ref'] = model
					format = (
						<>
							{' '}
							uuid <span className={styles.of}>of</span> <LinkedReference data={modelData} />
						</>
					)
				}
			}
		}
	} else {
		if (data['$ref']) {
			type = 'object'
			format = <LinkedReference data={data} />
		}
	}

	return (
		<div className={styles.type}>
			{type}
			{format ? ': ' : null} {format}
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
	let model
	if (name) {
		if (name.endsWith('_id')) {
			model = name.replace('_id', '')
		}
	}
	return model
}

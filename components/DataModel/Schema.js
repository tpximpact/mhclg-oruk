import styles from './Schema.module.css'
import { Property } from './Property'
export const Schema = ({ parentKeyName, data, allSchemas }) => (
	<div id={data.name || parentKeyName} className={styles.Schema}>
		<div className={styles.name}>{data.name || parentKeyName}</div>
		<div className={styles.description}>{data.description}</div>

		<Properties data={data} allSchemas={allSchemas} />
	</div>
)

const Properties = ({ data, allSchemas }) => (
	<div className={styles.properties}>
		<details>
			<summary>Properties</summary>
			<div className={styles.propertiesList}>
				{Object.keys(data.properties).map((pk, i) => (
					<Property
						key={i}
						parentKeyName={pk}
						data={data.properties[pk]}
						allSchemas={allSchemas}
						required={isRequiredBySchema(pk, data)}
					/>
				))}
			</div>
		</details>
	</div>
)

const isRequiredBySchema = (key, schema) => {
	return schema.required?.includes(key) || schema.tabular_required?.includes(key)
}

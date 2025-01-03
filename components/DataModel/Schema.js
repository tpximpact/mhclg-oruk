import styles from './Schema.module.css'
import { Property } from './Property'
export const Schema = ({ data, allSchemas }) => (
	<div id={data.name} className={styles.Schema}>
		<div className={styles.name}>{data.name}</div>
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

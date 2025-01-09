import styles from './DocumentationFeature.module.css'

export const DocumentationFeature = ({ name, description, children }) => (
	<div className={styles.DocumentationFeature}>
		<header id={name}>
			<h2 className={styles.name}>{name}</h2>
			{description && <div className={styles.description}>{description}</div>}
		</header>
		<details>
			<summary>Details</summary>
			<div className={styles.detailsContent}>{children}</div>
		</details>
	</div>
)

import styles from './DocumentationLineItem.module.css'

export const DocumentationLineItem = ({ title, afterTitle, children }) => (
	<div className={styles.DocumentationLineItem}>
		<div className={styles.heading}>
			<code className={styles.title}>{title}</code>
			{afterTitle}
		</div>
		<div className={styles.fields}>{children}</div>
	</div>
)

import styles from './DocumentationFeatureSection.module.css'

export const DocumentationFeatureSection =({
	children,
	title,
	description
}) => <section className={styles.DocumentationFeatureSection}>
<h3>{title}</h3>
{description && <div className={styles.description}>{description}</div>}
<div className={styles.Box}>
{children}
</div>
</section>
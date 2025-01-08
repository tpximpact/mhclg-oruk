import styles from './DocumentationFeatureSection.module.css'

export const DocumentationFeatureSection =({
	children,
	title
}) => <section className={styles.DocumentationFeatureSection}>
<h3>{title}</h3>
<div className={styles.Box}>
{children}
</div>
</section>
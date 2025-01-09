import styles from './ContentHTML.module.css'

export const ContentHTML = ({ html }) => (
	<div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
)

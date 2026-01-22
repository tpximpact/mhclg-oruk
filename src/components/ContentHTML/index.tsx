import styles from './ContentHTML.module.css'

interface ContentHTMLProps {
	html: string
}

export const ContentHTML = ({ html }: ContentHTMLProps) => (
	<div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
)

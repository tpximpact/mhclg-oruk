import styles from './VersionedDocumentation.module.css'

export const VersionedMarkdownContent  = ({
	html
}) => <div dangerouslySetInnerHTML={{ __html: html }} />
	
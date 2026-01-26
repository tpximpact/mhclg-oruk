import styles from './DocumentationLineItem.module.css'
import { ReactNode } from 'react'

interface DocumentationLineItemProps {
	title: string
	afterTitle?: ReactNode
	children: ReactNode
}

export const DocumentationLineItem = ({ title, afterTitle, children }: DocumentationLineItemProps) => (
	<div className={styles.DocumentationLineItem}>
		<div className={styles.heading}>
			<code className={styles.title}>{title}</code>
			{afterTitle}
		</div>
		<div className={styles.fields}>{children}</div>
	</div>
)

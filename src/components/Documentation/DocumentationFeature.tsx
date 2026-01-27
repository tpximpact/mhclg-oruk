import styles from './DocumentationFeature.module.css'
import { ReactNode } from 'react'

interface DocumentationFeatureProps {
  twirledOpen?: boolean
  name: string
  description?: string
  children: ReactNode
}

export const DocumentationFeature = ({
  twirledOpen,
  name,
  description,
  children
}: DocumentationFeatureProps) => (
  <div className={styles.DocumentationFeature}>
    <header id={name}>
      <h2 className={styles.name}>{name}</h2>
      {description && <div className={styles.description}>{description}</div>}
    </header>
    <details open={twirledOpen}>
      <summary>Details</summary>
      <div className={styles.detailsContent}>{children}</div>
    </details>
  </div>
)

import styles from './DocumentationFeatureSection.module.css'
import { ReactNode } from 'react'

interface DocumentationFeatureSectionProps {
  children: ReactNode
  title: string
  description?: string
}

export const DocumentationFeatureSection = ({
  children,
  title,
  description
}: DocumentationFeatureSectionProps) => (
  <section className={styles.DocumentationFeatureSection}>
    <h3>{title}</h3>
    {description && <div className={styles.description}>{description}</div>}
    <div className={styles.Box}>{children}</div>
  </section>
)

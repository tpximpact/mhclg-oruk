import { MarkdownComponentFromFile } from '@/components/MarkdownComponentFromFile'
import styles from './getting-started.module.css'

const contentFilePath = 'adopt/use-cases'

export default function GettingStarted() {
  return (
    <MarkdownComponentFromFile
      filePath={contentFilePath}
      fileName='getting-started'
      className={styles.gettingStartedBanner}
    />
  )
}

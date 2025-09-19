import { MarkdownComponentFromFile } from '@/components/MarkdownComponentFromFile'
import styles from './feedback.module.css'

const contentFilePath = 'adopt/use-cases'

export default function Feedback() {
	return (
		<MarkdownComponentFromFile
			filePath={contentFilePath}
			fileName='feedback'
			className={styles.feedbackBanner}
		/>
	)
}

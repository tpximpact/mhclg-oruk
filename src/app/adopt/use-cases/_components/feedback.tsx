import Link from 'next/link'
import styles from './feedback.module.css'
import { FaRegComment } from 'react-icons/fa6'

export default function Feedback() {
	return (
		<div className={styles.feedbackContainer}>
			<blockquote>
				<h1 className={styles.newPageText}>This is a new page</h1>
				<Link
					href='https://docs.google.com/forms/d/1JiSxJSOUguLZv-1myjg5neQW8aoAA_8ywiQKiHXEdPE/preview'
					target='_blank'
					rel='noopener noreferrer'
				>
					Help us improve it with your feedback
				</Link>
				<FaRegComment size='2em' />
			</blockquote>
		</div>
	)
}

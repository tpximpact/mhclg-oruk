import styles from './Title.module.css'
import Icon from '@tpx/Icon'
import { getColourForStatus, getIconForStatus, resultToStatus } from '@/util/status'

export const Title = ({ result }) => {
	const status = resultToStatus(result)
	const colour = getColourForStatus(status, true)
	return (
		<header className={styles.header}>
			<h2 className={styles.title}>
				<span className={styles.light}>for </span>
				<span className={styles.url}>{result.service.url}</span>
			</h2>
			<p className={styles.field}>
				<span className={styles.light}>Profile:</span> {result.service.profile}
			</p>
			<p className={styles.field}>
				<span className={styles.light}>Overall result:</span>{' '}
				{result.service.isValid ? 'Pass' : 'Fail'}{' '}
				<span className={styles.overallIcon}>
					<Icon colour={colour} weight='6' icon={getIconForStatus(status, true)} size='48' />
				</span>
			</p>
		</header>
	)
}

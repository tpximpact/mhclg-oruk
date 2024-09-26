import styles from './DashboardDetails.module.css'

export const DashboardDetails = ({ result }) => (
	<div className={styles.details}>
		details page here
		{JSON.stringify(result)}
	</div>
)

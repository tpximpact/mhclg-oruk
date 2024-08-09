import styles from './ValidatorResult.module.css'

export const Title = ({ result }) => 
			<h2 className={styles.service}>
				<span className={styles.light}>for </span>
				{result.queryParams.uri}
			</h2>


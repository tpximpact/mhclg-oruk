import styles from './Banner.module.css'

export const Banner = ({ label, children }) => (
	<div className={styles.Banner}>
		{label}
		{children}
	</div>
)

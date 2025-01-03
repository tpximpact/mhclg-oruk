import styles from './Badge.module.css'

export const Badge = ({
	label,
	colour,
	background
}) =>
<div style={{
	color: colour,
	background: background
}} className={styles.Badge}>
{label}
</div>
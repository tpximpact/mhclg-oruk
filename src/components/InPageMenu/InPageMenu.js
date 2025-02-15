import styles from './InPageMenu.module.css'

export const InPageMenu = ({ title, items }) => (
	<div className={styles.InPageMenu}>
		<div className={styles.title}>{title}</div>
		<ol className={styles.menu}>
			{items.map((item, i) => (
				<li key={i}>
					<a href={`#${item.target}`}>{item.title}</a>
				</li>
			))}
		</ol>
	</div>
)

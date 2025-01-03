import styles from './InPageMenu.module.css'

export const InPageMenu = ({ items }) => (
<div className={styles.InPageMenu}>
<ol className={styles.menu}>
{
	items.map(
	item => <li key={item.target}>
	<a href={`#${item.target}`}>{item.title}</a>
		</li>
	)
}
</ol>
</div>
)

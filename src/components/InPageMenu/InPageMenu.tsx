import styles from './InPageMenu.module.css'

interface InPageMenuItem {
	target: string
	title: string
}

interface InPageMenuProps {
	title: string
	items: InPageMenuItem[]
}

export const InPageMenu = ({ title, items }: InPageMenuProps) => (
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

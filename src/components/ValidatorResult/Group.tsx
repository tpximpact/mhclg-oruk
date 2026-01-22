import styles from './ValidatorResult.module.css'
import { Test } from './Test'

interface GroupProps {
	data: any[]
}

export const Group = ({ data }: GroupProps) => (
	<div className={styles.group}>
		{data.map((test, i) => (
			<Test key={i} data={test} />
		))}
	</div>
)

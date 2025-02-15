import styles from './Register.module.css'
import { PageMargin } from '@/components/PageMargin'
import { Form } from './Form'
import { List } from './List'

export const Register = () => (
	<PageMargin>
		<div className={styles.Register}>
			<Form />
			<List />
		</div>
	</PageMargin>
)

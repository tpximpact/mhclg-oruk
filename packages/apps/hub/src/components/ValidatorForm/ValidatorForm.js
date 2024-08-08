'use client'

import { v4 as uuidv4 } from 'uuid'
import styles from './ValidatorForm.module.css'

export const ValidatorForm = ({ action, defaultValue }) => {
	const UUID = uuidv4()
	return (

			<form action={action}>
				<label className={styles.label}>
					Feed URL <span aria-label='required'>(required)</span>
					<input type='URL' defaultValue={defaultValue} name='uri' required />
				</label>
				<span className={styles.example}>eg: http://example.com/feed/</span>
				<input type='hidden' name='id' value={UUID} />
				<button className={styles.submit}>Check</button>
			</form>

	)
}

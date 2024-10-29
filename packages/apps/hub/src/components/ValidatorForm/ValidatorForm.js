'use client'

import { v4 as uuidv4 } from 'uuid'
import styles from './ValidatorForm.module.css'
import { Button } from '@/components/Button'

export const ValidatorForm = ({ action, defaultValue }) => {
	const UUID = uuidv4()
	return (
		<div className={styles.form}>
			<form action={action}>
				<label className={styles.label}>
					Feed URL <span aria-label='required'>(required)</span>
					<input type='URL' defaultValue={defaultValue} name='uri' required />
				</label>
				<span className={styles.example}>
					eg: https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock
				</span>
				<input type='hidden' name='id' value={UUID} />
				<Button>Check</Button>
			</form>
		</div>
	)
}

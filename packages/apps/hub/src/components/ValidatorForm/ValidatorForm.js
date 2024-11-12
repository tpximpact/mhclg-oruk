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
					URL
					<input type='URL' defaultValue={defaultValue} name='uri' placeholder="Enter URL to check" />
				</label>
				<span className={styles.example}>
					eg: https://example.com/my-oruk-feed
				</span>
				<input type='hidden' name='id' value={UUID} />
				<Button>Check</Button>
			</form>
		</div>
	)
}

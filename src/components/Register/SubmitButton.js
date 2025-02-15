'use client'

import { useFormStatus } from 'react-dom'
import styles from './Register.module.css'

export const SubmitButton = ({ label, loading }) => {
	const { pending } = useFormStatus()

	return (
		<button className={styles.SubmitButton} disabled={pending} type='submit'>
			{pending ? loading : label}
		</button>
	)
}

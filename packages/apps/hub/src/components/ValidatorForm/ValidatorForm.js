'use client'

import { v4 as uuidv4 } from 'uuid'
import styles from './ValidatorForm.module.css'
import { Button } from '@/components/Button'
import { useState, useRef  } from 'react'

export const ValidatorForm = ({ action, defaultValue }) => {
	const UUID = uuidv4()
	const formRef = useRef(null);
	const inputRef = useRef(null);
	const [disabled, setDisabled] = useState(false)

	const submit = (e) => {
		// reportValidity() sadly always returns true if the field hasnt been edited
		if (!inputRef.current.value.length > 0) {
			// stop form submission if the field empty
			e.preventDefault()
			alert("please enter the URL of the data feed")
			return false
		}
		if (!inputRef.current.reportValidity()) {
			// stop form submission if the field isnt valid
			e.preventDefault()
			return false
		}
		// disable the button
		setDisabled(true)
		// and submit the form
		formRef.current.submit()
	}
	return (
		<div className={styles.form}>
			<form  ref={formRef}  action={action}>
				<label className={styles.label}>
					URL
					<input ref={inputRef} type='URL' defaultValue={defaultValue} name='uri' placeholder="Enter URL to check" />
				</label>
				<span className={styles.example}>
					The <strong>base URL</strong> your ORUK data service, e.g. https://example.com/my-oruk-feed
				</span>
				<input type='hidden' name='id' value={UUID} />
				<Button onClick={submit} disabled={disabled}>Check</Button>
			</form>
		</div>
	)
}

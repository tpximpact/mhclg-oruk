'use client'

import Link from 'next/link'
import Columns from '@/components/Columns'
import { v4 as uuidv4 } from 'uuid'
import styles from './ValidatorForm.module.css'
import { Button } from '@/components/Button'
import { useState, useRef } from 'react'

const Heading = ({ title }) => <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{title}</h2>

// TODO: load from markdown
const Samples = () => (
	<div>
		<Heading title='Sample reports' />
		<p>For a quick preview of the results this tool reports, choose an example:</p>
		<ol className={styles.samples}>
			<li>
				<Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock'>
					Pass
				</Link>
			</li>
			<li>
				<Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/warn'>
					Pass - but with warnings
				</Link>
			</li>
			<li>
				<Link href='/developers/validator/edcf9d03-47dd-4c46-833b-e9831d505c72?uri=https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/fail'>
					Fail
				</Link>
			</li>
		</ol>
	</div>
)

export const ValidatorForm = props => (
	<Columns layout={42}>
		<Form {...props} />
		<Samples />
	</Columns>
)

const Form = ({ title, action, defaultValue }) => {
	const UUID = uuidv4()
	const formRef = useRef(null)
	const inputRef = useRef(null)
	const [disabled, setDisabled] = useState(false)

	const submit = e => {
		// reportValidity() sadly always returns true if the field hasnt been edited
		if (!inputRef.current.value.length > 0) {
			// stop form submission if the field empty
			e.preventDefault()
			alert('please enter the URL of the data feed')
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
		formRef.current.requestSubmit()
	}
	return (
		<div className={styles.form}>
			{title && <Heading title={title} />}
			<form ref={formRef} action={action}>
				<label className={styles.label}>
					URL
					<input
						ref={inputRef}
						type='URL'
						defaultValue={defaultValue}
						name='uri'
						placeholder='Enter URL to check'
					/>
				</label>
				<span className={styles.example}>
					The <strong>base URL</strong> the ORUK data service e.g. <br />
					https://example.com/my-oruk-feed
				</span>
				<input type='hidden' name='id' value={UUID} />
				<Button onClick={submit} disabled={disabled}>
					Check
				</Button>
			</form>
		</div>
	)
}
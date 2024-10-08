'use client'

import { v4 as uuidv4 } from 'uuid'
import styles from './ValidatorForm.module.css'
import { Button } from '@/components/Button'

export const ValidatorForm = ({ action, defaultValue }) => {
	const UUID = uuidv4()
	return (
		<div className={styles.form}>
			<Banner />
			<form action={action}>
				<label className={styles.label}>
					Feed URL <span aria-label='required'>(required)</span>
					<input type='URL' defaultValue={defaultValue} name='uri' required />
				</label>
				<span className={styles.example}>eg: http://example.com/feed/</span>
				<input type='hidden' name='id' value={UUID} />
				<Button>Check</Button>
			</form>
		</div>
	)
}

const Banner = () => (
	<div className={styles.banner}>
		<p>
			NB: The back end service presently returns simulated results, by default a passing test suite.
		</p>
		<p>
			To simulate a failing test, include the word <code>fail</code> somewhere in the url you are
			testing, eg <code>http://example.com/feed/fail</code>.
		</p>
	</div>
)

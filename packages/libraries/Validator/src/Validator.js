'use client'

import { PageMargin } from '@tpx/PageMargin'
import { Main } from '@tpx/Main'
import { v4 as uuidv4 } from 'uuid'
import styles from './Validator.module.css'

export const Validator = ({ validationAction }) => {
	const UUID = uuidv4()
	return (
		<Main>
			<PageMargin>
				<form action={validationAction}>
					<label className={styles.label}>
						Feed URL <span aria-label='required'>(required)</span>
						<input type='URL' name='uri' required />
					</label>
					<span className={styles.example}>eg: http://example.com/feed/</span>
					<input type='hidden' name='id' value={UUID} />
					<button className={styles.submit}>Check</button>
				</form>
			</PageMargin>
		</Main>
	)
}

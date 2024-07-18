'use client'

import { Main } from '@tpx/Main'

export const Validator = ({ validationAction }) => (
	<Main>
		<form action={validationAction}>
			<label>
				GUID: <input type='text' name='id' />
			</label>
			<button>Submit</button>
		</form>
	</Main>
)

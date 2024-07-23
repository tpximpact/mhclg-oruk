'use client'

import { PageMargin } from '@tpx/PageMargin'
import { Main } from '@tpx/Main'

export const Validator = ({ validationAction }) => (
	<Main>
		<PageMargin>
			<form action={validationAction}>
				<label>
					GUID (For now enter any string of charcters you like! )<input type='text' name='id' />
				</label>
				<button>Submit</button>
			</form>
		</PageMargin>
	</Main>
)

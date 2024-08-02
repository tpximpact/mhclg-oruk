'use server'

import { redirect } from 'next/navigation'

export async function navigate(data) {
	let querystring = `?url=${data.get('uri')}`
	if (!data.get('jsIsDisabled')) querystring = `${querystring}&js=enabled`
	redirect(`/developer/tools/validator/${data.get('id')}${querystring}`)
}

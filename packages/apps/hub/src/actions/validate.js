'use server'

import { redirect } from 'next/navigation'

export async function navigate(data) {
	let querystring = `?uri=${data.get('uri')}`
	redirect(`/developer/tools/validator/${data.get('id')}${querystring}`)
}

'use server'

import { redirect } from 'next/navigation'

export async function navigate(data) {
	let querystring = `?uri=${data.get('uri')}`
	redirect(`/developers/validator-b/${data.get('id')}${querystring}`)
}
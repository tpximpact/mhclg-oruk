'use server'

import { redirect } from 'next/navigation'

export async function navigate(data) {
	redirect(`/developer/tools/validator/${data.get('id')}`)
}

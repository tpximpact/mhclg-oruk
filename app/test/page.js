import fs from 'fs'
import { join } from 'path'
import { PageMargin } from '@/components/PageMargin'

export default function Page() {
	const f = join(process.cwd(), '/content/adopt/02_business_case.md')
	const s = fs.statSync(f)
	
	return (
		<PageMargin>
		{JSON.stringify(s)}
		</PageMargin>
	)
}


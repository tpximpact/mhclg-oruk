import fs from 'fs'
import { join } from 'path'
import { PageMargin } from '@/components/PageMargin'

export default function Page() {
	const f = join(process.cwd(), '/content/adopt/02_business_case.md')
	const s = fs.statSync(f)
	
	return (
		<PageMargin>
		{JSON.stringify(s)}
		<p>{s.mtime.toLocaleDateString()}</p>
		<p>{s.mtime.toLocaleDateString('en')}</p>
		<p>{s.mtime.toLocaleDateString('en-GB')}</p>
		<p>{s.atime.toLocaleDateString()}</p>
		<p>{s.atime.toLocaleDateString('en')}</p>
		<p>{s.atime.toLocaleDateString('en-GB')}</p>
		</PageMargin>
	)
}


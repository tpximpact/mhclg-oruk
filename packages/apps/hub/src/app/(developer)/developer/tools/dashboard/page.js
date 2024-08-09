/* eslint react/no-unescaped-entities: 0 */

import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { PageMargin } from '@tpx/PageMargin'
import { Dashboard } from '@/components/Dashboard'

import meta from '/content/developer/tools/dashboard/metadata.json'
import data from '/content/developer/tools/dashboard/data.json'

export const metadata = meta

export default function Home() {
	return (
		<>
			<NamedMarkdownPage name='dashboard' />
			<Dashboard data={data} />
		</>
	)
}

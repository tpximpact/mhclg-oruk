import { PageMargin } from '@/components/PageMargin'
import { Timeline } from '@/components/Timeline'
import config from '../../../../content/adopt/gantt/data.json'

export default function Page() {
	return (
		<PageMargin>
			<h1>Implementation Plan timeline</h1>
			<Timeline rows={config.rows} />
		</PageMargin>
	)
}

export const metadata = {
	title: 'ORUK planning timeline'
}

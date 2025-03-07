import { Homepage } from '@/components/Homepage'

import data from '../../content/home/index.json'

export const metadata = {
	title: 'Open Referral UK'
}

export default function Home() {
	return <Homepage data={data} />
}

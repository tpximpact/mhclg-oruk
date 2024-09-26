import { Crumbtrail } from './Crumbtrail'
import testData from './dummy.json'

export default {
	title: 'Hub/Crumbtrail',
	component: Crumbtrail
}

export const Demo = () => <Crumbtrail crumbs={testData} />

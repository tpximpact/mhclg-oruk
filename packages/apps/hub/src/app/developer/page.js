import { readFile, buildItemMenuData   } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Menu } from '@/components/Menu'

const Page = () => {
	
	const markdownRaw = readFile({
		folder: PATHS.developer
	})

	const items = [
		{
			absolute: true,
			target: '/developer/tools/api-query',
			text: 'API Query Tool',
			teaser: 'This lets you connect to your chosen API endpoint to query taxonomy and service data. It exposes each API call it makes so you can copy the syntax. You can examine results in diagrammatic and JSON format to better understand the data structure.'
		},
		{
			absolute: true,
			target: '/developer/tools/exporter',
			text: 'Service Directory Exporter',
			teaser: 'The Service Exporter allows providers to easily view the entire contents of a Service Directory in a Google Spreadsheet form. With derived columns to show how services relate to organisations, service types etc.'
		},
		{
			absolute: true,
			target: '/developer/tools/validator',
			text: 'Service Directory Validator',
			teaser: 'This tool checks that a specific service directory follows the standard. It shows any issues as well as statistics on what types of data is included in the scanned Service Directory. This helps Councils move to the standard. This tool also helps establish trust as it ensures that a Service Directory follows the standard.'
		}
	]

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Menu items={items} />
		</>
	)
}
export default Page

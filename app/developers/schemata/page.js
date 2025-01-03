import { DataModel } from '@/components/DataModel'
import { PageMargin } from '@/components/PageMargin'

export const metadata = {
	title: 'ORUK data model'
}

export default async function Page() {
	const def = getDataModel()

	return (
		<PageMargin>
			<DataModel definition={def}>
				<h1>Data model</h1>
			</DataModel>
		</PageMargin>
	)
}

const getDataModel = () => {
	return {
		schemas: loadJson()
	}
}

// see https://stackoverflow.com/questions/40532230/how-can-i-automatically-load-all-json-files-from-a-given-directory-in-webpack/40552911#40552911

function getFileNameOnly(filePath) {
  return filePath.split('/').pop().split('.').shift();
}

// ALL THE JSON!
function loadJson() {
  const requireContext = require.context('@/specifications/3.0/schemata', false, /\.json$/);
  const json = {};
  requireContext.keys().forEach((key) => {
    const obj = requireContext(key);
    const simpleKey = getFileNameOnly(key);
    json[simpleKey] = obj;
  });
  return json;
}
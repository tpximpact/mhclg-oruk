import { LiteralResponse } from './LiteralResponse'
import { Tests } from './Tests'
import { Title } from './Title'

export const ValidatorResult = ({ result }) => {
	const json = JSON.stringify(result.result,null,2)
	return (
		<div>
			<Title result={result}/>
			<p style={{
				margin: "2rem 0"
			}}>test results go here</p>
			{/*<Tests result={result}/>*/}
			<LiteralResponse
				content={json}
				host={result.queryParams.uri} />
		</div>
	)
}
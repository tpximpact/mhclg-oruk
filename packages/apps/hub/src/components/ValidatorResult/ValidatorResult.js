//import { LiteralResponse } from './LiteralResponse'
import { Tests } from './Tests'
import { Title } from './Title'
import {Hr} from '@tpx/Hr'

export const ValidatorResult = ({ result }) => {
	result=result.result
	//const json = JSON.stringify(result, null, 2)
	return (
		<div>
			<Title result={result} />
			<Hr/>
			<Tests result={result}/>
			<Hr/>
			{/*<LiteralResponse content={json} host={result.queryParams?.uri} />
			<Hr/>*/}
		</div>
	)
}

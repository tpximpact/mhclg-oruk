//import styles from './Path.module.css'
import {Parameters} from './Parameters'
import {Responses} from './Responses'
import {DocumentationFeature} from '@/components/Documentation'
export const Path = ({
    data,
    path
}) => {
	// for oruk we have only GET calls, so we can make this simplifying assumption
	if (data.get) {
		const paramaters=data.parameters
		data = Object.assign({},data.get)
		if (paramaters) {
			data.parameters = paramaters
		}
	}
	return( 
	<DocumentationFeature
		name={path}
		description= {data.summary}
	>
		{data.parameters &&
			<Parameters data={data.parameters}/>}
	   <Responses data={data.responses}/>
       
	</DocumentationFeature>
	)
}
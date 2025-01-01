import dynamic from 'next/dynamic';
import {
	jsonSchemaToDot,
	jsonSchemaToDotB
} from '@/utilities/jsonSchemaToDot'
const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

  

export const RenderAPI = ({data}) => {
	const dot = jsonSchemaToDot(data)

	const workInProgress = jsonSchemaToDotB(data)

return (<div>
{/*<Graphviz dot={dot}
options ={{
	height: 1080,
width: 1028,
zoom: false
 }} />*/}
	<code><pre>{JSON.stringify(workInProgress, undefined, 2)}</pre></code>
</div>)

}
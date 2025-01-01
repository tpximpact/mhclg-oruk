//import dynamic from 'next/dynamic';
/*import {
	jsonSchemaToDot
} from '@/utilities/jsonSchemaToDot' */
//const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

  
/*
export const RenderAPI = ({data}) => {
	const dot = jsonSchemaToDot(data)
return (<div>
<Graphviz dot={dot}
options ={{
	height: 9000,
width: 1028,
zoom: false
 }} />

	<code><pre>{JSON.stringify(data.components.schemas, undefined, 2)}</pre></code>
</div>)

}

*/

import styles from "./RenderAPI.module.css"

const Method = ({methodName,data}) => <div className={styles.method}>
<h3>{methodName}</h3>
{JSON.stringify(data)}
	</div>

const Path = ({pathName,data}) => <div className={styles.path}>
	<h2>{pathName}</h2>
		{
		Object.keys(data).map(
			k => <Method key={k} methodName={k} data={data[k]}/>
			)
		}
	</div>

export const RenderAPI = ({data}) => {
	const paths = data.paths
	return (
		<div>
		{
			Object.keys(data.paths).map(
				k => <Path key={k} pathName={k} data={data.paths[k]} />
			)
		}
	{/*<code><pre>{JSON.stringify(data.paths, undefined, 2)}</pre></code> */}
	</div>
	)
}
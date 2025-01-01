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

const Property = ({name, data}) => {
	if (typeof(data) === "string") {
		return <div className={styles.property}>

		<dt>{name}</dt>
		<dd>{data} </dd>
	  
		  </div>
	}
	if (typeof(data) === "boolean") {
		return 
		<div className={styles.property}>

  <dt>{name}</dt>
  <dd>{data ? ": true" : ": false"} </dd>

	</div>
		
	}
	let content
	if (Array.isArray(data)){
		content = data.join(", ")
	}
	if (Array.isArray(data)){
		if(typeof(data[0] === 'object')) {
			content = <>{data.map(
				(d,i) => <List key={i} data={d} />
			)}</>
		} else {
			content = data.join(", ")
		}
	} else {
		 if (typeof(data) === 'object'){
			content = <List data={data} />
		} else {
			content = data
		}
	}
	return(<div className={styles.property}>

  <dt>{name}</dt>
  <dd>{content} </dd>

	</div>)}

const List = ({data}) => <dl>
	{Object.keys(data).map(
		k => <Property key={k} name={k} data={data[k]} />	
	)}
</dl>

const Method = ({methodName,data}) => <div className={styles.method}>
<h3>{methodName}</h3>
<List data={data} />
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
	<code><pre>{JSON.stringify(data.paths, undefined, 2)}</pre></code> 
	</div>
	)
}
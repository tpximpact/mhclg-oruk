'use client'

import { useState, useEffect } from 'react'
import styles from './ValidatorResult.module.css'
import { Group } from './Group'
import { Suspense } from 'react';
import JSONLiteral from '@/components/JSONLiteral';
import { Spinner } from '@/components/Spinner';
import { Path } from '@/components/APIModel'

const canLink = p => !p.includes('{id}')


export const TabsMenu = ({
	tabData,
	activeTab,
	setActiveTab
}) => 
<div className={styles.tabs}>
  {tabData.map((tab) => (
	<button
	  key={tab.id}
	  className={activeTab === tab.id ? styles.activeTab : ''}
	  onClick={() => setActiveTab(tab.id)}
	>
	  {tab.title}
	</button>
  ))}
</div>

export const TabsContent = ({
	tabData,
	activeTab
}) => 
<div className={styles.tabContent}>
  {tabData.find((tab) => tab.id === activeTab).content}
</div>

const ValidationTab = ({groups}) => <div>
{Object.keys(groups).map((k, i) => (
			<Group key={i} path={k} data={groups[k]} />
		))}

</div>

const ResponseTab = ({src}) => {
/*
	const [response, setResponse] = useState(null)
 
	useEffect(() => {
	  async function fetchResponse() {
		const res = await fetch(src)
		console.log(res)
		const data = await res.json()
		setResponse(data)
	  }
	  fetchResponse()
	}, [])
   
	if (!response) return <Spinner />

return(<div>
	<JSONLiteral data={response}/>

</div>)
*/
return <div>coming soon!</div>
}
		
const DocsTab = ({apiData, path}) => {
	const endpoints = apiData.rootSpec.parsed.paths
	const parametersReferences = apiData.rootSpec.parsed.components.parameters
	

return <Path
twirledOpen
hidePathTitle={true}
path={path}
allData={apiData}
parametersReferences={parametersReferences}
data={endpoints[path]}
/>
}

const profileNameToVersionNumber = (name) =>{
	const atoms = name.split("-")
	return atoms.reverse().shift()
}

export const Endpoint = ({ 
	rootPath, 
	path, 
	data, 
	linkToEndpoint = true,
	apiData,
	profile
}) => {
	
	const profileVersion = profileNameToVersionNumber(profile)

	const [activeTab, setActiveTab] = useState('Tab 1');
  
	const tabs = [
	  { id: 'Tab 1', title: 'Validation', content: <ValidationTab groups={data.groups}/> },
	  { id: 'Tab 2', title: 'API Response', content: <ResponseTab src={rootPath + path + '?&page=1'}/> },
	  { id: 'Tab 3', title: 'Docs', content: <DocsTab path={path} apiData={apiData[profileVersion]} /> },
	];

	return (
	<section className={styles.section}>
		<header className={styles.endpointContainer}>
		<div className={styles.endpointContainerLeft}>
		<h2>
				<span className={styles.light}>API path</span>
				<span className={styles.title}>{path}</span>
			</h2>
		</div>

		<div className={styles.endpointContainerRight}>
		<TabsMenu 
	tabData ={tabs}
	activeTab ={activeTab}
	setActiveTab ={setActiveTab}
	/>
		</div>
		
	</header>

<div>
<TabsContent
	tabData ={tabs}
	activeTab ={activeTab}
	/>
			
		</div>
			{/*
			<h2>
				<span className={styles.light}>Endpoint</span>
				<span className={styles.endpoint}>{path}</span>
			</h2>
			<div className={styles.endpointRight}>
				{linkToEndpoint && canLink(path) && (
					<a href={rootPath + path + '?&page=1'} target='_blank'>
						View (JSON)
					</a>
				)}
			</div>
		</div>
		{Object.keys(data.groups).map((k, i) => (
			<Group key={i} path={k} data={data.groups[k]} />
		))}

		*/}
	</section>
)}

const  TabbedPanel = () => {
	const [activeTab, setActiveTab] = useState('Tab 1');
  
	const tabs = [
	  { id: 'Tab 1', title: 'Tab 1', content: 'This is the content of Tab 1.' },
	  { id: 'Tab 2', title: 'Tab 2', content: 'This is the content of Tab 2.' },
	  { id: 'Tab 3', title: 'Tab 3', content: 'This is the content of Tab 3.' },
	];
  
	return (
	  <div className={styles.tabbedPanel }>
		<div className={styles.tabs}>
		  {tabs.map((tab) => (
			<button
			  key={tab.id}
			  className={activeTab === tab.id ? styles.activeTab : ''}
			  onClick={() => setActiveTab(tab.id)}
			>
			  {tab.title}
			</button>
		  ))}
		</div>
		<div className={styles.tabContent}>
		  {tabs.find((tab) => tab.id === activeTab).content}
		</div>
	  </div>
	);
  }


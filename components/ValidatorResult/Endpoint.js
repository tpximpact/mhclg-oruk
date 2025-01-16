'use client'

import { useState, useEffect } from 'react'
import styles from './ValidatorResult.module.css'
import { Group } from './Group'
import { Suspense } from 'react';
import JSONLiteral from '@/components/JSONLiteral';
import Spinner  from '@/components/Spinner';
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

const RESPONSE_STATUS = {
	INITIAL: "initial",
	PENDING: "pending",
	SUCCESS: "success",
	ERROR: "error"
}



const ResponseTab = ({
	src
}) => {
	const [status, setStatus] = useState(RESPONSE_STATUS.INIITIAL)
	const [response, setResponse] = useState(null)

	const setStatusPending = () => setStatus(RESPONSE_STATUS.PENDING)
	const setStatusSuccess = () => setStatus(RESPONSE_STATUS.SUCCESS)
	const setStatusError = () => setStatus(RESPONSE_STATUS.ERROR)
	
	const dispatchRequest = (e) => {
		setStatusPending()
		console.log("requesting " + e)
		fetchData()
	}

	const fetchData = async () => {
		try {
		  const response = await fetch(src);
		  if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		  }
		  const data = await response.json();
		  setResponse(data)
		  setStatusSuccess()
		} catch (error) {
			setStatusError()
			setResponse('Failed to fetch data:' + error)
		}
	  };

return(<div>
	Load the API response from <code>{src}</code> 
<a href={src} target='_blank'>in a new window</a>
{
	status === RESPONSE_STATUS.INIITIAL && <>&nbsp;or&nbsp;<button onClick={e=>dispatchRequest(e)} className={styles.buttonLink}>inline below</button>.</>
}
{
	status === RESPONSE_STATUS.ERROR && <>&nbsp;or&nbsp;<button onClick={e=>dispatchRequest(e)} className={styles.buttonLink}>retry inline load</button>.<div>
		<Error message={response}/>
		</div></>
}
{
	status === RESPONSE_STATUS.PENDING && <><Spinner /></>
}
{
	status === RESPONSE_STATUS.SUCCESS && <div>
		{
response
		}
		</div>
}
</div>)

}
		
const Error = ({message}) => <div 
	style={{
		marginTop: "1rem",
		borderColor: 'var(--VersionedDocumentation-legacy-border-color)',
		background: 'var(--VersionedDocumentation-legacy-background)',
		color: 'var(--VersionedDocumentation-legacy-color)',
		padding: "2rem",
		fontWeight: "900"
	}}
>Error: Failed to load JSON. {message}</div>

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
/*	linkToEndpoint = true, */
	apiData,
	profile
}) => {
	
	const profileVersion = profileNameToVersionNumber(profile)

	const [activeTab, setActiveTab] = useState('Tab 1');
  
	const tabs = [
	  { id: 'Tab 1', title: 'Validation', content: <ValidationTab groups={data.groups}/> },
	  { id: 'Tab 2', title: 'API Response', content: <ResponseTab src={rootPath + path + '?&page=1/'}/> },
	  { id: 'Tab 3', title: 'Docs', content: <DocsTab path={path} apiData={apiData[profileVersion]} /> },
	];

	return (
	<section className={styles.section}>
		<header className={styles.endpointContainer}>
		<div className={styles.endpointContainerLeft}>
		<h2>
				<span className={styles.light}>API path</span>
				<span >{path}</span>
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


'use client'

import { useState } from 'react'
import styles from './ValidatorResult.module.css'
import { Group } from './Group'
import { Path } from '@/components/APIModel'

import { APIRequest } from './APIRequest'

export const TabsMenu = ({ tabData, activeTab, setActiveTab }) => (
	<div className={styles.tabs}>
		{tabData.map(tab => (
			<button
				key={tab.id}
				className={activeTab === tab.id ? styles.activeTab : ''}
				onClick={() => setActiveTab(tab.id)}
			>
				{tab.title}
			</button>
		))}
	</div>
)

export const TabsContent = ({ tabData, activeTab }) => (
	<div className={styles.tabContent}>{tabData.find(tab => tab.id === activeTab).content}</div>
)

const ValidationTab = ({ groups }) => (
	<div>
		{Object.keys(groups).map((k, i) => (
			<Group key={i} path={k} data={groups[k]} />
		))}
	</div>
)

const DocsTab = ({ apiData, path }) => {
	const endpoints = apiData.rootSpec.parsed.paths
	const parametersReferences = apiData.rootSpec.parsed.components.parameters

	return (
		<Path
			twirledOpen
			hidePathTitle={true}
			path={path}
			allData={apiData}
			parametersReferences={parametersReferences}
			data={endpoints[path]}
		/>
	)
}

const profileNameToVersionNumber = name => {
	const atoms = name.split('-')
	return atoms.reverse().shift()
}

export const Endpoint = ({ rootPath, path, data, apiData, profile }) => {
	const profileVersion = profileNameToVersionNumber(profile)

	const [activeTab, setActiveTab] = useState('Tab 1')

	const tabs = [
		{ id: 'Tab 1', title: 'Validation', content: <ValidationTab groups={data.groups} /> },
		{
			id: 'Tab 2',
			title: 'API Request',
			content: <APIRequest src={rootPath} />
		},
		{
			id: 'Tab 3',
			title: 'Docs',
			content: <DocsTab path={path} apiData={apiData[profileVersion]} />
		}
	]

	path = path.replace(rootPath, '')

	return (
		<section className={styles.section}>
			<header className={styles.endpointContainer}>
				<div className={styles.endpointContainerLeft}>
					<h2>
						<span className={styles.light}>API path</span>
						<span>{path}</span>
					</h2>
				</div>

				<div className={styles.endpointContainerRight}>
					<TabsMenu tabData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
				</div>
			</header>

			<div>
				<TabsContent tabData={tabs} activeTab={activeTab} />
			</div>
		</section>
	)
}

'use client'

import { VersionedBanner } from './VersionedBanner'
import { MarkdownContent } from './MarkdownContent'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import {DataModel} from '@/components/DataModel'
import {APIModel} from '@/components/APIModel'
import {OpenAPIModel} from '@/components/OpenAPIModel'

export const VersionedDocumentation = ({ 
	allVersionsContent,
	data, 
	displayComponentName
}) => {

	const allVersions = Object.keys(data).sort().reverse()

	let DisplayComponent
	// work around - cant pass a componet on server unless it is marked use server and async :(
	if (displayComponentName === 'APIModel') {
		DisplayComponent = APIModel
	}
	if (displayComponentName === 'DataModel') {
		DisplayComponent = DataModel
	}
	if (displayComponentName === 'OpenAPIModel') {
		DisplayComponent = OpenAPIModel
	}

	const cookieName = 'docVersion'
	const [isClient, setIsClient] = useState(false)
	const [cookies, setCookie] = useCookies([cookieName])

	useEffect(() => {
		setIsClient(true)
	}, [])

	const [version, setVersion] = useState(cookies[cookieName] ? cookies[cookieName] : allVersions[0])

	const versionChoiceMade = v => {
		setCookie(cookieName, JSON.stringify(v), { path: '/' })
		setVersion(v)
	}

	// if the markdwon content contains the placeholder, "$version, replace it with the selected version"
	const insertVersionIntoSharedContent = (shared) =>
		shared.replace("$version","(v" + version+")")

	return (
		<>
			{isClient && (
				<>
					<VersionedBanner
						suppressHydrationWarning
						allVersions={allVersions}
						setVersion={versionChoiceMade}
						version={version}
					/>
					<ContentView
						allVersionsContent ={insertVersionIntoSharedContent(allVersionsContent)}
						DisplayComponent={DisplayComponent} 
						data={data[version]}
					/>
				</>
			)}
		</>
	)
}

const ContentView = ({ allVersionsContent, data, DisplayComponent }) => (
	<>
		<MarkdownContent suppressHydrationWarning html={data.textContent} />
		{DisplayComponent && <DisplayComponent allVersionsContent={allVersionsContent} data={data} />}
	</>
)

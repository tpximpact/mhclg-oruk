'use client'

import {VersionedBanner} from './VersionedBanner'
import {MarkdownContent} from './MarkdownContent'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { RenderAPI } from './RenderAPI'
import { RenderDB } from './RenderDB'
import { RenderSpecification } from './RenderSpecification'
import { PageMargin } from '@/components/PageMargin'

export const VersionedDocumentation = ({ 
	content,
	displayComponentName
}) => {
	const allVersions= Object.keys(content).sort().reverse()
	
	
	let DisplayComponent
	// work around - cant pass a componet on server unless it is marked use server and async :(
	if (displayComponentName==="RenderAPI") {
		DisplayComponent = RenderAPI
	}
	if (displayComponentName==="RenderDB") {
		DisplayComponent = RenderDB
	}
	if (displayComponentName==="RenderSpecification") {
		DisplayComponent = RenderSpecification
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

	return (
		<PageMargin>
			{isClient && (
				<><VersionedBanner
						suppressHydrationWarning
						allVersions={allVersions}
						setVersion={versionChoiceMade}
						version={version}
					/>
					<ContentView 
			DisplayComponent={DisplayComponent}
			data={content[version]}/>
					</>
			)}
			
		</PageMargin>
	)
}

const ContentView = ({
	data, 
	DisplayComponent
}) => <>
	<MarkdownContent 
		suppressHydrationWarning 
		html={data.textContent}/>
{DisplayComponent && <DisplayComponent data={data.schema}/>}
	</>


	
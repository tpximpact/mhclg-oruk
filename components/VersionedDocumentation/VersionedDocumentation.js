'use client'

import {VersionedBanner} from './VersionedBanner'
import {VersionedMarkdownContent} from './VersionedMarkdownContent'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { EntityRelationshipDiagram } from './EntityRelationshipDiagram'
import { PageMargin } from '@/components/PageMargin'


export const VersionedDocumentation = ({ 
	allVersions, 
	contentData,
	displayComponentName
}) => {
	let DisplayComponent
	// work around - cant pass a componet on server unless it is marked use server and async :(
	if (displayComponentName==="EntityRelationshipDiagram") {
		DisplayComponent = EntityRelationshipDiagram
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
				<>
					<VersionedBanner
						suppressHydrationWarning
						allVersions={allVersions}
						setVersion={versionChoiceMade}
						version={version}
					/>
					{contentData && version && contentData[version]
						? <VersionedMarkdownContent 
					suppressHydrationWarning 
					html={contentData[version]}/>
				: null
					
				}
				</>
			)}
		</PageMargin>
	)
}






const VersionedContent = ({ 
	version, 
	contentData,
	DisplayComponent
}) => (
	<DisplayComponent version={version} contentData={contentData} />
)

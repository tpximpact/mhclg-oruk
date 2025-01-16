'use client'

import { useEffect, useMemo } from 'react'
import { Title } from './Title'
import { Endpoint } from './Endpoint'

import styles from './ValidatorResult.module.css'

import { formatResults } from './formatResults'

export const ValidatorResult = ({ 
	result,
apiData }) => {
	const endpoints = useMemo(() => formatResults(result.result), [result])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className={styles.result}>
			<Title result={result.result} />
			{Object.keys(endpoints).map((k, i) => (
				<Endpoint 
				profile={result.result.service.profile}
				rootPath={result.result.service.url} 
				key={i} 
				path={k} 
				data={endpoints[k]} 
				apiData={apiData}
				/>
			))}
		</div>
	)
}

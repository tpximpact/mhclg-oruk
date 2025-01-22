'use client'

import { useEffect, useMemo } from 'react'
import { Title } from './Title'
import { Endpoint } from './Endpoint'

import styles from './ValidatorResult.module.css'

import { formatResults } from './formatResults'

import exampleData from './example.json'

export const ValidatorResult = ({ 
	result, 
	apiData
}) => {
	result = exampleData // for development only

	
	const endpoints = useMemo(() => formatResults(result), [result])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className={styles.result}>
			<Title result={result} />
			{Object.keys(endpoints).map((k, i) => (
				<Endpoint

					profile={result.service.profile}
					rootPath={result.service.url}
					key={i}
					path={k}
					data={endpoints[k]}
					apiData={apiData}
				/>
			))}
		</div>
	)
}

'use client'

import React, { useState, useEffect } from 'react'
import { Pagination } from '@/components/Pagination'

export const PaginatedTable = props => {
	const [clientSide, setClientSide] = useState(false)

	useEffect(() => {
		setClientSide(true)
	}, [])

	return clientSide ? <InteractiveView {...props} /> : <NoJSView {...props} />
}

const NoJSView = ({ currentPage }) => (
	<div>
		<div>
			No JS version. currentPage = <strong>{currentPage}</strong>
		</div>
		<Pagination baseUrl='/developer/tools/dashboard?page=' numPages={4} currentPage={currentPage} />
	</div>
)

const InteractiveView = ({ currentPage }) => {
	const [activePage, setActivePage] = useState(currentPage)

	const selectPage = (_, n) => setActivePage(n)

	return (
		<div>
			Interactive version. currentPage = <strong>{activePage}</strong>
			<Pagination
				pageChangeFunction={selectPage}
				baseUrl='/developer/tools/dashboard?page='
				numPages={4}
				currentPage={activePage}
			/>
		</div>
	)
}
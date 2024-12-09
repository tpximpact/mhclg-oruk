// cf https://stackoverflow.com/questions/78178792/how-to-use-axe-core-with-nextjs-app-router

'use client'

import React from 'react'

const config = {
	runOnly: ['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'wcag2aaa', 'best-practice'],
	rules: [
		{
			id: 'skip-link',
			enabled: true
		}
	],
	disableDeduplicate: true
}

const Axe = () => {
	if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
		Promise.all([import('@axe-core/react'), import('react-dom')]).then(([axe, ReactDOM]) =>
			axe.default(React, ReactDOM, 1000, config)
		)
	}
	return null
}

export default Axe

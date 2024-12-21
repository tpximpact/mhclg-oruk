import React from 'react'
import { Changelog } from './Changelog'

export default {
	title: 'Components/Changelog',
	component: Changelog
}

const sampleData = [
	{
		versionNumber: '1.0.0',
		fields: [
			{
				title: 'Field 1',
				added: [{ name: 'Keyword 1' }],
				removed: [{ name: 'Keyword 2' }],
				replaced: [{ name: 'Keyword 3', replacedWith: 'Keyword 4' }]
			}
		]
	}
]

export const Default = () => <Changelog versions={sampleData} />

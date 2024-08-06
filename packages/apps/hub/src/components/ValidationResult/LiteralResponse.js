'use client'

import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { jsonLanguage } from '@codemirror/lang-json'
import { vscodeLight } from '@uiw/codemirror-theme-vscode'
import { EditorView } from '@codemirror/view'

const json = `{
        "wang": "chung",
        "everybodyg": "tonight",
}
`

const customTheme = EditorView.theme({
	$: {
		fontSize: '21pt'
	}
})

export const LiteralResponse = () => (
	<div>
		<h2>JSON response received from www.example.com</h2>
		<CodeMirror
			theme={vscodeLight}
			value={json}
			height='200px'
			extensions={[jsonLanguage, customTheme]}
		/>
		;
	</div>
)

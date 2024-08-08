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

export const LiteralResponse = ({ host }) => (
	<div>
		<h2>
			<span style={{ fontWeight: 'normal' }}>JSON response received from</span> {host}
		</h2>
		<noscript>Sorry. The JSON view feature requires JavaScript</noscript>
		<CodeMirror
			theme={vscodeLight}
			value={json}
			height='200px'
			extensions={[jsonLanguage, customTheme]}
		/>
		;
	</div>
)

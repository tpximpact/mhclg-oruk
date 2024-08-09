'use client'

import React, {useState, useEffect} from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { jsonLanguage } from '@codemirror/lang-json'
import { vscodeLight } from '@uiw/codemirror-theme-vscode'
import { EditorView } from '@codemirror/view'

const customTheme = EditorView.theme({
	$: {
		fontSize: '21pt'
	}
})

export const LiteralResponse = ({ host, content }) => {

const [clientSide, setClientSide] = useState(false)

useEffect(() => {
    setClientSide(true)
  }, [])


	return clientSide && (
		<div>
			<h2 style={{
			marginBottom: "2rem"
		}}>
			<span style={{ fontWeight: 'normal' }}>JSON response received from</span> {host}
		</h2>
		<CodeMirror
			theme={vscodeLight}
			value={content}
			height='auto'
			extensions={[jsonLanguage, customTheme]}
		/>
	</div>
)
}
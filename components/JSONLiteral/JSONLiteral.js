'use client'
// https://github.com/microlinkhq/react-json-view
import ReactJsonView from '@microlink/react-json-view'

export const JSONLiteral = ({
	data
}) => <ReactJsonView 
name={null}
collapsed={1}
collapseStringsAfterLength={48}
enableClipboard={false}
displayDataTypes={false}
style={{
	padding: "2rem",
	fontSize: "21px"
}}
theme={{
				base00: "#000",
                base01: "#fff",
                base02: "#666", // indent brackets - doesnt need contrast
                base03: "#fff",
                base04: "#fff",
                base05: "#fff",
                base06: "#fff",
                base07: "#fff",
                base08: "#fff",
                base09: "#fff",
                base0A: "#fff",
                base0B: "#fff",
                base0C: "#fff",
                base0D: "#fff", // twirlies
                base0E: "#fff",
                base0F: "#fff"
            }}
src={data} />
		
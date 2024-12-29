'use client'
// https://github.com/microlinkhq/react-json-view
import ReactJsonView from '@microlink/react-json-view'

export const JSONLiteral = ({
	data
}) => <ReactJsonView 
name={null}

theme={{
				base00: "#000",
                base01: "#fff",
                base02: "#fff",
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
                base0D: "#fff",
                base0E: "#f00",
                base0F: "#f00"
            }}
src={data} />
		
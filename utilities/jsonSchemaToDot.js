// dot is based on https://github.com/softwaretechnik-berlin/dbml-renderer/tree/master/examples

import {wrapString} from './wrapString'

const TEXT_COLOUR = "#1d71b8"
const HEADER_BG_COLOUR = "#1d71b8"
const HEADER_FG_COLOUR = "#ffffff"
const ROW_BG_COLOUR = "#fafafa"
const DESCRIPTION_FG_COLOUR = "#777777"

const tableOne = {
    name:"wang",
    rows:[
        {
            name:"id",
            datatype:"int",
            description:"This is a description."
        },
        {
            name:"name",
            datatype:"varchar",
            description:"This is a prettty darn long description. which will need to wrap"
        },

        {
            name:"last_update",
            datatype:"timestamp",
            description:"This is a description."
        },
    ]
}

const tableTwo = {
    name:"chung",
    rows:[
        {
            name:"id",
            datatype:"int",
            description:"This is a description."
        },
        {
            name:"name",
            datatype:"varchar",
            description:"This is a prettty darn long description. which will need to wrap"
        },
        {
            name:"wang_id",
            datatype:"int"
        },
        {
            name:"title",
            datatype:"varchar",
            description:"This is short"
        },
        {
            name:"last_update",
            datatype:"timestamp",
            description:"This is a description."
        },
    ]
}

const tables = [tableOne, tableTwo]


const description = text => {
    const allLines = wrapString(text,30)
    return  allLines.map(line => `<TR><TD COLSPAN="2" ALIGN="LEFT"><FONT COLOR="${DESCRIPTION_FG_COLOUR}">${line}</FONT></TD>}</TR>`).join(' ')
}

const row = (data,n) =>  `<TR>
<TD ALIGN="LEFT" PORT="f${n}" BGCOLOR="${ROW_BG_COLOUR}">
    <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
            <TD ALIGN="LEFT"><B>${data.name}</B></TD>
            <TD ALIGN="RIGHT"><I>${data.datatype}</I></TD>
        </TR>
        ${data.description && description(data.description)}
    </TABLE>
</TD>
</TR>`

const table = data => `
    "${data.name}" [
        id="${data.name}";
        label=<<TABLE BORDER="2" COLOR="${TEXT_COLOUR}" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
        <TR><TD PORT="f0" BGCOLOR="${HEADER_BG_COLOUR}"><FONT COLOR="${HEADER_FG_COLOUR}"><B>                    ${data.name}                  </B></FONT></TD></TR>
        ${data.rows.map((rowData,n) => row(rowData,n+1)).join(" ")}
    </TABLE>>];
    `

const connection = ({
    fromTable, 
    fromPort, 
    toTable, 
    toPort
}) =>  `"${fromTable}":${fromPort}:e -> "${toTable}":${toPort}:w [dir=forward, penwidth=3, color="#000"]`

const CONFIG = `
      rankdir=LR;
      graph [fontname="helvetica", fontsize=32, fontcolor="#29235c", bgcolor="transparent"];
      node [penwidth=0, margin=0, fontname="helvetica", fontsize=32, fontcolor="#29235c"];
      edge [fontname="helvetica", fontsize=32, fontcolor="#29235c", color="#29235c"];
`


export const jsonSchemaToDot = schema => {
    let dot = `
digraph dbml {
      ${CONFIG}
${tables.map(t=>table(t)).join(' ' )}

${connection({
    fromTable:"chung", 
    fromPort:"f3",
    toTable:"wang",
    toPort:"f1"
})}
      
    }
`     

    return dot


}



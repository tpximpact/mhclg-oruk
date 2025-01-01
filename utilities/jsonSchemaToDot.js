// dot is based on https://github.com/softwaretechnik-berlin/dbml-renderer/tree/master/examples

const TEXT_COLOUR = "#1d71b8"
const HEADER_BG_COLOUR = "#1d71b8"
const HEADER_FG_COLOUR = "#ffffff"

const tableOne = {
    name:"wang",
    rows:[
        {
            name:"id",
            type:"int"
        },
        {
            name:"name",
            type:"varchar"
        },
        {
            name:"last_update",
            type:"timestamp"
        },
    ]
}


const row = data =>  `<TR>
<TD ALIGN="LEFT" PORT="f1" BGCOLOR="#e7e2dd">
    <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
            <TD ALIGN="LEFT"><B>id</B></TD>
            <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
    </TABLE>
</TD>
</TR>`

const table = data => `
    "${data.name}" [
        id="${data.name}";
        label=<<TABLE BORDER="2" COLOR="${TEXT_COLOUR}" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
        <TR><TD PORT="f0" BGCOLOR="${HEADER_BG_COLOUR}"><FONT COLOR="${HEADER_FG_COLOUR}"><B>     ${data.name}     </B></FONT></TD></TR>
        ${data.rows.map(
            rowData => row(rowData)
        ).join(" ")}
    </TABLE>>];
    `



/*

        <TR>
            <TD ALIGN="LEFT" PORT="f1" BGCOLOR="#e7e2dd">
                <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
                    <TR>
                        <TD ALIGN="LEFT"><B>id</B></TD>
                        <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
                    </TR>
                </TABLE>
            </TD>
        </TR>
<TR><TD ALIGN="LEFT" PORT="f2" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
*/

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

const CATEGORY = `
    "category" 
    [
        id="category";
        label=<
        <TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
        <TR>
            <TD PORT="f0" BGCOLOR="#1d71b8">
                <FONT COLOR="#ffffff"><B>category</B></FONT>
            </TD>
        </TR>
        <TR>
            <TD ALIGN="LEFT" PORT="f1" BGCOLOR="#e7e2dd">
                <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
                    <TR>
                        <TD ALIGN="LEFT"><B>id</B></TD>
                        <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
                    </TR>
                </TABLE>
            </TD>
        </TR>
<TR><TD ALIGN="LEFT" PORT="f2" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>
    >];
`

export const jsonSchemaToDot = schema => {
    let dot = `
digraph dbml {
      ${CONFIG}
${table(tableOne)}
${CATEGORY}
"film_category" [id="film_category";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       film_category       </B></FONT></TD></TR>
<TR><TD ALIGN="LEFT" PORT="f1" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT"><B>id</B>    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f2" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">category_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];

${connection({
    fromTable:"category", 
    fromPort:"f1",
    toTable:"film_category",
    toPort:"f2"
})}
      
    }
`     

    return dot


}



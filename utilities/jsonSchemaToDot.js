// dot is based on https://github.com/softwaretechnik-berlin/dbml-renderer/tree/master/examples

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
    </TABLE>>];
`

export const jsonSchemaToDot = schema => {
    let dot = `
digraph dbml {
      ${CONFIG}

      
      
      "staff" [id="staff";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       staff       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">first_name lorem ipsum dolor sit amet si meliora dies ut vina   </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">address_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f5" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">picture    </TD>
          <TD ALIGN="RIGHT"><FONT><I>blob</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f6" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">email    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f7" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">store_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f8" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">active    </TD>
          <TD ALIGN="RIGHT"><FONT><I>boolean</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f9" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">user_name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f10" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">password    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f11" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"store" [id="store";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       store       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">manager_staff_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">address_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"payment" [id="payment";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       payment       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">customer_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">staff_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">rental_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f5" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">amount    </TD>
          <TD ALIGN="RIGHT"><FONT><I>decimal</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f6" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">payment_date    </TD>
          <TD ALIGN="RIGHT"><FONT><I>datetime</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f7" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"rental" [id="rental";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       rental       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">rental_date    </TD>
          <TD ALIGN="RIGHT"><FONT><I>datetime</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">inventory_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">customer_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f5" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">return_date    </TD>
          <TD ALIGN="RIGHT"><FONT><I>ddatetime</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f6" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">staff_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f7" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"country" [id="country";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       country       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">country    </TD>
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
    </TABLE>>];
"city" [id="city";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       city       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">city    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">country_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"address" [id="address";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       address       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">address    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">address2    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">district    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f5" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">city_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f6" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">postal_code    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f7" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">phone    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f8" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"customer" [id="customer";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       customer       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">store_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">first_name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f5" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">email    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f6" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">address_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f7" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">active    </TD>
          <TD ALIGN="RIGHT"><FONT><I>boolean</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f8" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">create_Date    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f9" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
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
"language" [id="language";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       language       </B></FONT></TD></TR>
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
    </TABLE>>];
"film_text" [id="film_text";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       film_text       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">film_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">title    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">description    </TD>
          <TD ALIGN="RIGHT"><FONT><I>text</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"actor" [id="actor";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       actor       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">first_name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_name    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"film" [id="film";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       film       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">title    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">description    </TD>
          <TD ALIGN="RIGHT"><FONT><I>text</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">releaase_year    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f5" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">language_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f6" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">original_language_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f7" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">rental_duration    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f8" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">rental_rate    </TD>
          <TD ALIGN="RIGHT"><FONT><I>decimal</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f9" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">length    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f10" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">replacement_cost    </TD>
          <TD ALIGN="RIGHT"><FONT><I>decimal</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f11" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">rating    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f12" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">special_feature    </TD>
          <TD ALIGN="RIGHT"><FONT><I>varchar</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f13" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"film_actor" [id="film_actor";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       film_actor       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">film_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">actor_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
"inventory" [id="inventory";label=<<TABLE BORDER="2" COLOR="#29235c" CELLBORDER="1" CELLSPACING="0" CELLPADDING="10">
      <TR><TD PORT="f0" BGCOLOR="#1d71b8"><FONT COLOR="#ffffff"><B>       inventory       </B></FONT></TD></TR>
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
          <TD ALIGN="LEFT">film_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f3" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">store_id    </TD>
          <TD ALIGN="RIGHT"><FONT><I>int</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
<TR><TD ALIGN="LEFT" PORT="f4" BGCOLOR="#e7e2dd">
      <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
        <TR>
          <TD ALIGN="LEFT">last_update    </TD>
          <TD ALIGN="RIGHT"><FONT><I>timestamp</I></FONT></TD>
        </TR>
      </TABLE>
    </TD></TR>
    </TABLE>>];
      "store":f0 -> "staff":f0 [style=invis, weight=100, color=red]
    "store":f1:e -> "staff":f7:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"staff":f0 -> "store":f0 [style=invis, weight=100, color=red]
    "staff":f1:e -> "store":f2:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"staff":f0 -> "payment":f0 [style=invis, weight=100, color=red]
    "staff":f1:e -> "payment":f3:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"rental":f0 -> "payment":f0 [style=invis, weight=100, color=red]
    "rental":f1:e -> "payment":f4:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"staff":f0 -> "rental":f0 [style=invis, weight=100, color=red]
    "staff":f1:e -> "rental":f6:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"country":f0 -> "city":f0 [style=invis, weight=100, color=red]
    "country":f1:e -> "city":f3:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"city":f0 -> "address":f0 [style=invis, weight=100, color=red]
    "city":f1:e -> "address":f5:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"address":f0 -> "customer":f0 [style=invis, weight=100, color=red]
    "address":f1:e -> "customer":f6:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"category":f0 -> "film_category":f0 [style=invis, weight=100, color=red]
    "category":f1:e -> "film_category":f2:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"inventory":f0 -> "film_text":f0 [style=invis, weight=100, color=red]
    "inventory":f2:e -> "film_text":f2:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"language":f0 -> "film":f0 [style=invis, weight=100, color=red]
    "language":f1:e -> "film":f5:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"language":f0 -> "film":f0 [style=invis, weight=100, color=red]
    "language":f1:e -> "film":f6:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"film":f0 -> "film_actor":f0 [style=invis, weight=100, color=red]
    "film":f1:e -> "film_actor":f2:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"actor":f0 -> "film_actor":f0 [style=invis, weight=100, color=red]
    "actor":f1:e -> "film_actor":f3:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
"film":f0 -> "inventory":f0 [style=invis, weight=100, color=red]
    "film":f1:e -> "inventory":f2:w [dir=forward, penwidth=3, color="#29235c", headlabel="*", taillabel="1"]
      
    }
`     

    return dot


}
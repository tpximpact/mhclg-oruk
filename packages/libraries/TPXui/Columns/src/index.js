import React from "react";

import columns from "./columns.module.css";

const DebugWidget = () => (
  <aside className={columns.debug}>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span>7</span>
    <span>8</span>
    <span>9</span>
    <span>10</span>
    <span>11</span>
    <span>12</span>
  </aside>
);

const Columns = ({ className, children, layout = "1111", debug, ...props }) => (
  <div
    className={[columns.columns, columns[`layout_${layout}`], className].join(
      " ",
    )}
    {...props}
  >
    {children}
    {debug ? <DebugWidget /> : null}
  </div>
);

export default Columns;

/*
export const Column = ({
	start,
	end,
	children,
	...props
}) => <div style={{gridColumn: `${start} / ${end}`}} className={columns.column} {...props}>{children}</div>
*/

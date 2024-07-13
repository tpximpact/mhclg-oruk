import React from "react";
import css from "./PageMargin.module.css";

export const PageMargin = ({ children }) => (
  <div className={css.pagemargin}>{children}</div>
);

// accesible pagination based on
// https://github.com/mdn/css-examples/blob/main/css-cookbook/pagination--download.html

import styles from './Pagination.module.css'

export const Pagination = ({ 
	baseUrl,
	numPages,
	currentPage,
	pageChangeFunction
}) => (
	<nav className={styles.pagination} aria-label="pagination">
  <ol >
    <li><a href=""><span aria-hidden="true">« previous</span><span className={styles.visuallyhidden}>previous set of pages</span></a></li>
    <li><a href=""><span className={styles.visuallyhidden}>page </span>1</a></li>
    <li><a href="" aria-current="page"><span className={styles.visuallyhidden}>page </span>2</a></li>
    <li><a href=""><span className={styles.visuallyhidden}>page </span>3</a></li>
    <li><a href=""><span className={styles.visuallyhidden}>page </span>4</a></li>
    <li><a href=""><span className={styles.visuallyhidden}>next set of pages</span><span aria-hidden="true">next »</span></a></li>
  </ol>
</nav>
)

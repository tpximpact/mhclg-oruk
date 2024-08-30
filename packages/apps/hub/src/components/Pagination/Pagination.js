// accesible pagination adapted from
// https://github.com/mdn/css-examples/blob/main/css-cookbook/pagination--download.html

import styles from './Pagination.module.css'

const PreviousItem = (props) => <Item 
		{...props}
		pageNumber = {props.currentPage-1}
		enabled = {props.currentPage!==1}
		><span aria-hidden='true'>« previous</span>
					<span className={styles.visuallyhidden}>previous set of pages</span></Item>

const NextItem = (props) => <Item 
		{...props}
		pageNumber = {props.currentPage+1}
		enabled = {props.currentPage<props.numPages}
		><span className={styles.visuallyhidden}>next set of pages</span>
					<span aria-hidden='true'>next »</span>
			</Item>
				
					
const NumberedItem = props => <Item {...props}>
<span className={styles.visuallyhidden}>page </span>{props.pageNumber}
</Item>

const Item = ({
	enabled=true,
	children,
	currentPage,
	pageNumber,
	pageChangeFunction,
	baseUrl
}) => { 	
	let ariaProps = {}
	if (pageNumber===currentPage) {
		ariaProps["aria-current"]= 'page'
	}
	
	return <li> { enabled ?
				<a  {...ariaProps} href={
				baseUrl + pageNumber
				}
				onClick={(e)=>{
					pageChangeFunction(baseUrl,pageNumber)
					e.preventDefault()
				}
				}>
					{children}
				</a> : <span className={styles.noAnchor}>{children }</span>}
			</li>
			
		}

export const Pagination = props => {
		return(
	<nav className={styles.pagination} aria-label='pagination'>
		<ol>
		
	
			
			<PreviousItem
	{...props}
	/>
			
			
			{[...Array(props.numPages)].map(
				(_,i) =>  <NumberedItem 
		key={i}	
	pageNumber={i+1}
	{...props}
	/>
			)}
			
			
	
			<NextItem
	{...props}
	/>
		</ol>
	</nav>
)
}

import sort from './TableSorting.module.css'

export const getSortingOptions = (view,data) => view.sortBy.map(
    (col) => 
        [col,data.definitions.columns[col].label]
)


export const getSortedRows = (sortColumn,data) => {

	const compareRows = (a,b) => {


		const valA = String(a[sortColumn].value).toUpperCase(); 
	const valB = String(b[sortColumn].value).toUpperCase(); 
	if (valA < valB) {
	  return -1;
	}
	if (valA > valB) {
	  return 1;
	}
	
	//return 0;

	// these columns are the same so sort on name instead
	if (a.name.value < b.name.value) {
		return -1;
	  } else {
		return 1;
	  }
	}

	return data.data.sort(compareRows)
}


export const TableSorting = ({
	values, 
	onValueChange, 
	selectedValue, 
	...rest
}) => {
	return <div  className={sort.sorting}>
		<label for="sortBy">Sort by... </label>

		<select
      defaultValue={selectedValue}
      onChange={({ target: { value } }) => onValueChange(value)}
      {...rest}
    >
      {values.map(([value, text]) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
	</div>
}

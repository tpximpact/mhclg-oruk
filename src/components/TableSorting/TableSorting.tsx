import sort from './TableSorting.module.css'
import { HTMLAttributes } from 'react'

interface Column {
  label: string
}

interface View {
  sortBy: string[]
}

interface DataDefinitions {
  columns: Record<string, Column>
}

interface DataRow {
  [key: string]: {
    value: string | number
  }
  name: {
    value: string
  }
}

interface TableData {
  definitions: DataDefinitions
  data: DataRow[]
}

export const getSortingOptions = (view: View, data: TableData): [string, string][] =>
  view.sortBy.map(col => [col, data.definitions.columns[col]?.label || col])

export const DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending'
} as const

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION]

interface GetSortedRowsParams {
  sortColumn: string
  data: TableData
  sortDirection: Direction
}

export const getSortedRows = ({
  sortColumn,
  data,
  sortDirection
}: GetSortedRowsParams): DataRow[] => {
  const compareRows = (a: DataRow, b: DataRow) => {
    const valA = String(a[sortColumn]?.value || '').toUpperCase()
    const valB = String(b[sortColumn]?.value || '').toUpperCase()
    if (valA < valB) {
      return -1
    }
    if (valA > valB) {
      return 1
    }

    //return 0;

    // these columns are the same so sort on name instead
    if (a.name.value < b.name.value) {
      return -1
    } else {
      return 1
    }
  }

  let newSortedRows = [...data.data].sort(compareRows)

  if (sortDirection === DIRECTION.DESCENDING) {
    newSortedRows = newSortedRows.reverse()
  }

  return newSortedRows
}

interface TableSortingProps extends HTMLAttributes<HTMLSelectElement> {
  values: [string, string][]
  onValueChange: (value: string) => void
  onDirectionChange: (direction: Direction) => void
  selectedValue: string
  selectedDirection: Direction
}

export const TableSorting = ({
  values,
  onValueChange,
  onDirectionChange,
  selectedValue,
  selectedDirection,
  ...rest
}: TableSortingProps) => {
  return (
    <div className={sort.sorting}>
      <div className={sort.widget}>
        <label htmlFor='sortBy'>Sort by... </label>

        <select
          id='sortBy'
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
      <div className={sort.widget}>
        <label htmlFor='sortDir'>Sort direction </label>

        <select
          id='sortDir'
          defaultValue={selectedDirection}
          onChange={({ target: { value } }) => onDirectionChange(value)}
          {...rest}
        >
          <option value={DIRECTION.ASCENDING}>Ascending</option>
          <option value={DIRECTION.DESCENDING}>Descending</option>
        </select>
      </div>
    </div>
  )
}

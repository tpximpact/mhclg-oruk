export default function FormattedDateComponent({ value }: { value: Date | undefined }) {
  if (!value) {
    return <span>Never tested</span>
  }

  const dateObj = value instanceof Date ? value : new Date(String(value))
  if (isNaN(dateObj.getTime())) {
    return <span>Invalid date</span>
  }

  const formattedDate = dateObj.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  return <span style={{ whiteSpace: 'nowrap' }}>{formattedDate}</span>
}

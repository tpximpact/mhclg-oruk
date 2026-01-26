'use client'

// Define the shape of the component's props
interface LocalisedDateProps {
  value: Date | undefined
  options?: Intl.DateTimeFormatOptions // Optional formatting options
}

export default function LocalisedDate({ value, options }: LocalisedDateProps) {
  if (!value) {
    return <span>Never tested</span>
  }

  const dateObj = value instanceof Date ? value : new Date(String(value))

  if (isNaN(dateObj.getTime())) {
    return <span>Invalid date</span>
  }

  // Define options for formatting (this will use the client's locale and timezone)
  const fmtOptions: Intl.DateTimeFormatOptions = options ?? {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  const formattedDate = dateObj.toLocaleString(undefined, fmtOptions)

  return (
    <time
      style={{ whiteSpace: 'nowrap' }}
      dateTime={dateObj.toISOString()}
      suppressHydrationWarning={true}
    >
      {formattedDate}
    </time>
  )
}

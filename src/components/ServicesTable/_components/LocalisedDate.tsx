'use client'
import { useState, useEffect, FC } from 'react'

// Define the shape of the component's props
interface LocalisedDateProps {
  dateString: string // The raw date string, e.g., "2025-11-25T10:00:00.000Z"
}

const LocalisedDate: FC<LocalisedDateProps> = ({ dateString }) => {
  const date = new Date(dateString)

  // --- 1. Initial State for SSR (Universal Format) ---

  // Get the fixed, non-locale-dependent part of the date (YYYY-MM-DD).
  // This ensures the server and client render the same string initially.
  const initialDateString: string = date.toISOString().split('T')[0]

  // State initialized with the universal string
  const [displayedDate, setDisplayedDate] = useState<string>(initialDateString)

  useEffect(() => {
    // --- 2. Client-Side Localization (After Mount) ---
    // This runs only on the client after successful hydration.

    // Define options for formatting (this will use the client's locale and timezone)
    const options: Intl.DateTimeFormatOptions = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    }

    // Format the date. Passing `undefined` as the locale uses the user's browser default.
    const clientLocalizedDate: string = date.toLocaleDateString(undefined, options)

    // Update the state, triggering a re-render from the fixed string to the localized one.
    setDisplayedDate(clientLocalizedDate)
  }, [dateString]) // Dependency on dateString in case the prop changes

  // --- 3. Render Output ---
  // The <time> element provides semantic meaning and the machine-readable ISO date.
  return (
    <time style={{ whiteSpace: 'nowrap' }} dateTime={date.toISOString()}>
      {displayedDate}
    </time>
  )
}

export default LocalisedDate

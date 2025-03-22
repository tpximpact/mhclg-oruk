export const wrapString = (text, maxLength) => {
	// Remove leading/trailing whitespace and split on one or more whitespace characters
	const words = text.trim().split(/\s+/)

	const lines = []
	let currentLine = ''

	for (const word of words) {
		// Check if adding the word would exceed the maxLength
		if (currentLine.length + word.length + 1 <= maxLength) {
			currentLine += (currentLine ? ' ' : '') + word
		} else {
			if (currentLine !== '') {
				lines.push(currentLine)
			}
			currentLine = word
		}
	}

	if (currentLine) lines.push(currentLine)
	return lines
}

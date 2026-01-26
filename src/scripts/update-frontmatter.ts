/* eslint no-console: 'off' */

const forEachFile = require('./forEachFile')
const updateFrontMatter = require('./updateFrontMatter')

async function handleFile(filePath: string) {
  updateFrontMatter(
    filePath
    /*{
	  dryRun: true
	}*/
  )
}

forEachFile('./content', '.md', handleFile).catch((err: unknown) =>
  console.error('Error:', err instanceof Error ? err.message : String(err))
)

export {}

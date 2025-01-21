const forEachFile = require('./forEachFile')
const updateFrontMatter = require('./updateFrontMatter')

async function handleFile(filePath) {
	updateFrontMatter(
		filePath
		/*{
	  dryRun: true
	}*/
	)
}

forEachFile('./content', '.md', handleFile).catch(err => console.error('Error:', err))

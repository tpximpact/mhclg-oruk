const forEachFile = require('./forEachFile');
const updateFrontMatter = require('./updateFrontMatter');
const path = require('path');

const contentPath = "content"


// updateFrontMatter('./content/updates/1001.md');

const d = path.join(process.cwd(), contentPath)

async function handleFile(filePath) {
  console.log(`Processing file: ${filePath}`);
}


forEachFile('./', '.js', handleFile).catch(err => console.error('Error:', err));
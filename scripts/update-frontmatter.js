const forEachFile = require('./forEachFile');
const updateFrontMatter = require('./updateFrontMatter');
const path = require('path');

const contentPath = "content"


// updateFrontMatter('./content/updates/1001.md');

const d = path.join(process.cwd(), contentPath)
forEachFile(d, '.md', (filePath) => {
 console.log(`Processing file: ${filePath}`);
});
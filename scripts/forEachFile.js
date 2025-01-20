const fs = require('fs').promises;
const path = require('path');

/**
 * Loops over all files in a directory and its subdirectories with a given extension,
 * calling a function against each.
 *
 * @param {string} directory - The root directory to search.
 * @param {string} extension - The file extension to look for.
 * @param {function} callback - The function to call for each matching file.
 * @returns {Promise<void>}
 */
async function forEachFile(directory, extension, callback) {
  try {
    const files = await fs.promises.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isDirectory()) {
        await forEachFile(filePath, extension, callback);
      } else if (path.extname(filePath) === extension) {
        callback(filePath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
  }
}

module.exports = forEachFile;

// Example usage:
//forEachFile('./src', '.js', (filePath) => {
//  console.log(`Processing file: ${filePath}`);
//});
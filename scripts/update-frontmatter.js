const fs = require('fs').promises;
const jsYaml = require('js-yaml');
const path = require('path');

/**
 * Updates the YAML front matter in a Markdown file with the file's modified date if it doesn't exist or isn't current.
 *
 * @param {string} filePath - Path to the Markdown file.
 * @returns {Promise<void>}
 */

async function updateFrontMatter(filePath) {
  try {
    // Get file stats to access modified time
    const stats = await fs.stat(filePath);

    // Get current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Read the file contents
    const fileContent = await fs.readFile(filePath, 'utf8');

    // Split the file into front matter and content
    const frontMatterRegex = /^---\n(.*?)\n---\n/s;
    const match = fileContent.match(frontMatterRegex);
    if (!match) {
      throw new Error('No front matter found in the file.');
    }
    const frontMatterYaml = match[1];
    const content = fileContent.replace(frontMatterRegex, '');

    // Parse the front matter YAML
    const frontMatter = jsYaml.load(frontMatterYaml);

    // Check if 'modified' property exists and is current
    const modifiedDate = frontMatter.modified ;
    if (modifiedDate) {
      const modifiedDateObject = new Date(modifiedDate);
      if (
        modifiedDateObject.getFullYear() === currentYear &&
        modifiedDateObject.getMonth() + 1 === currentMonth &&
        modifiedDateObject.getDate() === currentDay
      ) {
        console.log(`Front matter for ${path.basename(filePath)} is up-to-date.`);
        return;
      }
    }

    // Update the modified date
    const mdate = new Date(stats.mtimeMs).toISOString();
    frontMatter.modified = mdate;

    // Stringify the updated front matter
    const updatedFrontMatterYaml = jsYaml.dump(frontMatter);

    // Update the file contents
    const updatedFileContent = `---\n${updatedFrontMatterYaml}---\n${content}`; 

    // Write the updated file contents
    await fs.writeFile(filePath, updatedFileContent);
    console.log(`Front matter updated successfully for ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error updating front matter: ${error.message}`);
  }
}

updateFrontMatter('./content/updates/1001.md');
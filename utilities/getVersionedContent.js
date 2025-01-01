import { join } from 'path'
import {getAllFilesInFolderWithExtension} from './getAllFilesInFolderWithExtension'
import {filenameToName} from './filenameToName'
import {read} from './read'
import {parseMarkdown} from './parseMarkdown'

/**
 * Retrieves versioned content from the specified folders.
 * 
 * @param {Object} options
 * @param {string} options.contentFolder - Path to the content folder.
 * @param {string} options.schemaFolder - Path to the schema folder.
 * @returns {Object} Versioned content.
 */
export const getVersionedContent = ({ contentFolder, schemaFolder }) => {
  const markdownFiles = getAllFilesInFolderWithExtension(contentFolder, 'md')
    .filter(file => filenameToName(file) !== 'index');

  const schemaFiles = getAllFilesInFolderWithExtension(schemaFolder, 'json');

  const result = schemaFiles.reduce((acc, file) => {
    const name = filenameToName(file);
    const version = name.replace('_', '.');
    const schemaFilePath = join(schemaFolder, file);
    const schemaContents = read(schemaFilePath);

    let textContent;
    const contentFileName = `${name}.md`;
    if (markdownFiles.includes(contentFileName)) {
      const contentFilePath = join(contentFolder, contentFileName);
      const fileContents = read(contentFilePath);
      const parsed = parseMarkdown(fileContents);
      textContent = parsed.content;
    }

    return {
      ...acc,
      [version]: {
        schema: JSON.parse(schemaContents),
        textContent,
      },
    };
  }, {});

  return result;
};
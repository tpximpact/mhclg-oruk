import { join } from 'path';
import { readContentFile } from './readContentFile';
import { parseMarkdown } from './parseMarkdown';

/**
 * Loads and parses Markdown content from a file.
 *
 * @param {string} file - File name.
 * @param {string} folder - Folder name.
 * @returns {{ content: string, frontmatter: object }|null} Parsed data or null.
 */
export const loadMarkdownFromFile = (file, folder) => {
  const fileContents = readContentFile(join(folder, file));
  return parseMarkdown(fileContents);
};

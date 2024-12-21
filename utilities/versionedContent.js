import { join } from 'path';
import matter from 'gray-matter';
import { getAllFiles } from './getAllFiles';
import { readContentFile } from './readContentFile'; // New import
import { parseMarkdown } from './parseMarkdown'; // New import

/**
 * Retrieves version data from Markdown files.
 *
 * @param {string} folder - Folder name.
 * @returns {[string[], { [key: string]: any }]} Version keys and content data.
 */
export const getVersions = (folder) => {
  const files = getAllFiles(folder).filter((f) => f.startsWith('v'));
  const contentData = {};

  files.forEach((file) => {
    const parsed = loadMarkdownFromFile(file, folder);
    if (parsed) {
      const key = parsed.frontmatter.standard_version;
      contentData[key] = parsed;
    }
  });

  const allVersions = Object.keys(contentData).sort().reverse();
  return [allVersions, contentData];
};

/**
 * Loads and parses Markdown content from a file.
 *
 * @param {string} file - File name.
 * @param {string} folder - Folder name.
 * @returns {{ content: string, frontmatter: object }|null} Parsed data or null.
 */
const loadMarkdownFromFile = (file, folder) => {
  const fileContents = readContentFile(join(folder, file));
  return parseMarkdown(fileContents);
};
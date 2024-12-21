import { join } from 'path';
import { getAllFiles } from './getAllFiles';
import { readContentFile } from './readContentFile';
import { parseMarkdown } from './parseMarkdown';
import { loadMarkdownFromFile } from './loadMarkdownFromFile'; // New import

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
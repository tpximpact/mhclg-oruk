import fs from 'fs';
import { join } from 'path';
import { PATHS } from './PATHS';
import matter from 'gray-matter';
import { getAllFiles } from './getAllFiles';
import { CONTENT_ROOT } from './contentRoot';

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
 * Builds the full path to a content file.
 *
 * @param {string} contentPath - Relative path.
 * @returns {string} Full path.
 */
const buildContentPath = (contentPath) => join(CONTENT_ROOT, contentPath);

/**
 * Reads a file.
 *
 * @param {string} contentPath - Relative path.
 * @returns {string|null} File contents or null on error.
 */
const readFile = (contentPath) => {
  try {
    return fs.readFileSync(buildContentPath(contentPath), 'utf8');
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Parses Markdown content.
 *
 * @param {string} fileContents - File contents.
 * @returns {{ content: string, frontmatter: object }|null} Parsed data or null.
 */
const parseMarkdown = (fileContents) => {
  const parsed = matter(fileContents);
  return parsed && !parsed.isEmpty
    ? { content: parsed.content, frontmatter: parsed.data }
    : null;
};

/**
 * Loads and parses Markdown content from a file.
 *
 * @param {string} file - File name.
 * @param {string} folder - Folder name.
 * @returns {{ content: string, frontmatter: object }|null} Parsed data or null.
 */
const loadMarkdownFromFile = (file, folder) => {
  const fileContents = readFile(join(folder, file));
  return parseMarkdown(fileContents);
};
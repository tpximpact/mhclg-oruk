import fs from 'fs';
import { buildContentPath } from './buildContentPath';

/**
 * Reads a file.
 *
 * @param {string} contentPath - Relative path.
 * @returns {string|null} File contents or null on error.
 */
export const readContentFile = (contentPath) => {
  try {
    return fs.readFileSync(buildContentPath(contentPath), 'utf8');
  } catch (error) {
    console.error(error);
    return null;
  }
};

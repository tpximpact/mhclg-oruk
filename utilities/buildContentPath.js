import { join } from 'path';
import { CONTENT_ROOT } from './contentRoot';

/**
 * Builds the full path to a content file.
 *
 * @param {string} contentPath - Relative path.
 * @returns {string} Full path.
 */
export const buildContentPath = (contentPath) => join(CONTENT_ROOT, contentPath);

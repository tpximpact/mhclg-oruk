import fs from 'fs';
import { join } from 'path';
import { PATHS } from './PATHS';

const CONTENT_ROOT = join(process.cwd(), PATHS.contentRoot);

/**
 * Retrieves all files in a content folder.
 *
 * @param {string} contentFolder - Folder name.
 * @returns {string[]} File names.
 */
export const getAllFiles = (contentFolder) => fs.readdirSync(join(CONTENT_ROOT, contentFolder));

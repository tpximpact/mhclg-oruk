import { join } from 'path';
import { PATHS } from './PATHS';

export const getContentRoot = () => join(process.cwd(), PATHS.contentRoot);
export const CONTENT_ROOT = getContentRoot();

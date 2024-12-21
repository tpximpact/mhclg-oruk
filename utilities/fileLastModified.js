import fs from 'fs';
import { join } from 'path';
import { CONTENT_ROOT } from './constants';

const statContentFile = contentPath => {
	try {
		return fs.statSync(join(CONTENT_ROOT, contentPath));
	} catch (err) {
		console.error(err);
		return null;
	}
};

export const fileLastModified = contentPath => {
	const stats = statContentFile(contentPath);
	return stats ? stats.mtime.toLocaleDateString('en-GB') : null;
};
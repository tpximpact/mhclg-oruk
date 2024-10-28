import { join } from 'path'
import {PATHS} from './PATHS'

export const getPath = dir => join(process.cwd(), PATHS.contentRoot, dir)

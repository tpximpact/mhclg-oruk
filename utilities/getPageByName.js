import {sitePages} from './sitePages'

export const getPageByName = name => sitePages().find(page => page.name === name)
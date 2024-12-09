import {sitePages} from './sitePages'

export const getPageByPath = path => sitePages().find(page => page.urlPath === path)

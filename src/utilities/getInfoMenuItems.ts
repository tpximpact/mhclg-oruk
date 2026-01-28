import { getRawPageTree } from './getRawPageTree'

export const getInfoMenuItems = () => {
  const section = getRawPageTree().filter(item => item.name === 'info')[0]
  if (!section) return undefined
  return section['childNodes']
}

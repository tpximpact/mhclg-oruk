import { getRawPageTree } from './getRawPageTree'

export const getInfoMenuItems = () => {
	const section = getRawPageTree().filter(item => item.name === 'info')[0]
	return section['childNodes']
}

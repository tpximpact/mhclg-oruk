import {ICON_TYPE} from '@tpx/Icon'

export const STATUS = {
	PASS: 'passed',
	FAIL: 'failed',
	SKIPPED: 'skipped'
}


export const getColourForStatus = status => {
	let colour
	switch (status) {
		case STATUS.PASS:
			colour = '#00AC1B'
			break
		case STATUS.FAIL:
			colour = '#FF3300'
			break
		default:
			colour = '#999'
	}
	return colour
}

export const getIconForStatus = status => {
	let icon
	switch (status) {
		case STATUS.PASS:
			icon = ICON_TYPE.OK
			break
		case STATUS.FAIL:
			icon = ICON_TYPE.X
			break
		default:
			icon = ICON_TYPE.X
	}
	return icon
}
import { ICON_TYPE } from '@tpx/Icon'

export const STATUS = {
	PASS: 'passed',
	FAIL: 'failed',
	OTHER: 'other'
}

export const resultToStatus = data => (data.service.isValid === true ? STATUS.PASS : STATUS.FAIL)

export const getColourForStatus = status => {
	let colour
	switch (status) {
		case STATUS.PASS:
			colour = '#00AC1B'
			break
		case STATUS.FAIL:
			colour = '#FF3300'
			break
		case STATUS.OTHER:
		default:
			colour = '#fa0'
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
		case STATUS.OTHER:
		default:
			icon = ICON_TYPE.WARN
	}
	return icon
}

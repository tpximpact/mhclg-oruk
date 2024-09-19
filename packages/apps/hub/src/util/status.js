import { ICON_TYPE } from '@tpx/Icon'

export const STATUS = {
	PASS: 'passed',
	FAIL: 'failed',
	SKIPPED: 'skipped'
}

export const resultToStatus = data => (data.success === true ? STATUS.PASS : STATUS.FAIL)

export const getColourForStatus = (status, errorsAreFatal) => {
	let colour
	switch (status) {
		case STATUS.PASS:
			colour = '#00AC1B'
			break
		case STATUS.FAIL:
			colour = errorsAreFatal ? '#FF3300' : '#fa0'
			break
		default:
			colour = '#999'
	}
	return colour
}

export const getIconForStatus = (status, errorsAreFatal) => {
	let icon
	switch (status) {
		case STATUS.PASS:
			icon = ICON_TYPE.OK
			break
		case STATUS.FAIL:
			icon = errorsAreFatal ? ICON_TYPE.X : ICON_TYPE.WARN
			break
		default:
			icon = ICON_TYPE.X
	}
	return icon
}

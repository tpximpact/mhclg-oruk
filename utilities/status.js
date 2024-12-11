import { ICON_TYPE } from '@/components/Icon'

export const STATUS = {
	PASS: 'pass',
	FAIL: 'fail',
	OTHER: 'other'
}

export const resultToStatus = data => (data.service.isValid === true ? STATUS.PASS : STATUS.FAIL)

const STATUS_PROPERTIES = {
	[STATUS.PASS]: { colour: '#00AC1B', icon: ICON_TYPE.OK },
	[STATUS.FAIL]: { colour: '#FF3300', icon: ICON_TYPE.X },
	[STATUS.OTHER]: { colour: '#fa0', icon: ICON_TYPE.WARN }
}

export const getColourForStatus = status => STATUS_PROPERTIES[status]?.colour || STATUS_PROPERTIES[STATUS.OTHER].colour

export const getIconForStatus = status => STATUS_PROPERTIES[status]?.icon || STATUS_PROPERTIES[STATUS.OTHER].icon

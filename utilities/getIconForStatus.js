import { STATUS, STATUS_PROPERTIES } from './status'

export const getIconForStatus = status =>
	STATUS_PROPERTIES[status]?.icon || STATUS_PROPERTIES[STATUS.OTHER].icon

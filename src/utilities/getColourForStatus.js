import { STATUS, STATUS_PROPERTIES } from './status'

export const getColourForStatus = status =>
	STATUS_PROPERTIES[status]?.colour || STATUS_PROPERTIES[STATUS.OTHER].colour

import { STATUS, STATUS_PROPERTIES, StatusType } from './status'

export const getColourForStatus = (status: StatusType): string =>
	STATUS_PROPERTIES[status]?.colour || STATUS_PROPERTIES[STATUS.OTHER].colour

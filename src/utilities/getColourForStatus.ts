import { STATUS, STATUS_PROPERTIES, StatusType } from './status'

export const getColourForStatus = (status: StatusType | string | null): string =>
  STATUS_PROPERTIES[status as StatusType]?.colour || STATUS_PROPERTIES[STATUS.OTHER].colour

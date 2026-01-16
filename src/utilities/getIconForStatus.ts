import { STATUS, STATUS_PROPERTIES, StatusType } from './status'
import { ICON_TYPE } from '@/components/Icon'

export const getIconForStatus = (status: StatusType): ICON_TYPE =>
	STATUS_PROPERTIES[status]?.icon || STATUS_PROPERTIES[STATUS.OTHER].icon

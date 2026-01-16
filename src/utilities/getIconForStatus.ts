import { STATUS, STATUS_PROPERTIES, StatusType } from './status'
import { ICON_TYPE_DATA } from '@/components/Icon'
import type { IconType } from '@/components/Icon'

export const getIconForStatus = (status: StatusType | string | null): IconType => {
  const iconEnum =
    STATUS_PROPERTIES[status as StatusType]?.icon || STATUS_PROPERTIES[STATUS.OTHER].icon
  return ICON_TYPE_DATA[iconEnum]
}

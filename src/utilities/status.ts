import { ICON_TYPE } from '@/components/Icon'

export const STATUS = {
  PASS: 'pass',
  FAIL: 'fail',
  OTHER: 'other'
} as const

export type StatusType = (typeof STATUS)[keyof typeof STATUS]

interface StatusProperty {
  colour: string
  icon: ICON_TYPE
}

export const STATUS_PROPERTIES: Record<StatusType, StatusProperty> = {
  [STATUS.PASS]: { colour: '#00AC1B', icon: ICON_TYPE.OK },
  [STATUS.FAIL]: { colour: '#FF3300', icon: ICON_TYPE.X },
  [STATUS.OTHER]: { colour: '#fa0', icon: ICON_TYPE.WARN }
}

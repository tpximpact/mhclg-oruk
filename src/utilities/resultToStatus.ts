import { STATUS, StatusType } from './status'

interface ServiceData {
  service: {
    isValid: boolean
  }
}

export const resultToStatus = (data: ServiceData): StatusType =>
  data.service.isValid === true ? STATUS.PASS : STATUS.FAIL

import { STATUS } from './status'

export const resultToStatus = data => (data.service.isValid === true ? STATUS.PASS : STATUS.FAIL)

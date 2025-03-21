import { resultToStatus } from './resultToStatus'
import { STATUS } from './status'

describe('resultToStatus', () => {
  it('should return PASS status when service is valid', () => {
    const mockData = {
      service: {
        isValid: true
      }
    }
    expect(resultToStatus(mockData)).toBe(STATUS.PASS)
  })

  it('should return FAIL status when service is invalid', () => {
    const mockData = {
      service: {
        isValid: false
      }
    }
    expect(resultToStatus(mockData)).toBe(STATUS.FAIL)
  })

  it('should return FAIL status when isValid is not boolean true', () => {
    const mockData = {
      service: {
        isValid: 1 // truthy but not boolean true
      }
    }
    expect(resultToStatus(mockData)).toBe(STATUS.FAIL)
  })
}) 
import { getColourForStatus } from './getColourForStatus'
import { STATUS } from './status'

describe('getColourForStatus', () => {
  it('should return green colour for PASS status', () => {
    expect(getColourForStatus(STATUS.PASS)).toBe('#00AC1B')
  })

  it('should return red colour for FAIL status', () => {
    expect(getColourForStatus(STATUS.FAIL)).toBe('#FF3300')
  })

  it('should return orange colour for OTHER status', () => {
    expect(getColourForStatus(STATUS.OTHER)).toBe('#fa0')
  })

  it('should return OTHER status colour for undefined status', () => {
    expect(getColourForStatus(undefined)).toBe('#fa0')
  })

  it('should return OTHER status colour for non-existent status', () => {
    expect(getColourForStatus('non-existent-status')).toBe('#fa0')
  })

  it('should return OTHER status colour for null status', () => {
    expect(getColourForStatus(null)).toBe('#fa0')
  })
}) 
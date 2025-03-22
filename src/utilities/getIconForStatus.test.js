import { getIconForStatus } from './getIconForStatus'
import { STATUS } from './status'
import { ICON_TYPE } from '@/components/Icon'

describe('getIconForStatus', () => {
	it('should return correct icon for PASS status', () => {
		expect(getIconForStatus(STATUS.PASS)).toBe(ICON_TYPE.OK)
	})

	it('should return correct icon for FAIL status', () => {
		expect(getIconForStatus(STATUS.FAIL)).toBe(ICON_TYPE.X)
	})

	it('should return correct icon for OTHER status', () => {
		expect(getIconForStatus(STATUS.OTHER)).toBe(ICON_TYPE.WARN)
	})

	it('should return OTHER status icon for undefined status', () => {
		expect(getIconForStatus(undefined)).toBe(ICON_TYPE.WARN)
	})

	it('should return OTHER status icon for non-existent status', () => {
		expect(getIconForStatus('non-existent-status')).toBe(ICON_TYPE.WARN)
	})

	it('should return OTHER status icon for null status', () => {
		expect(getIconForStatus(null)).toBe(ICON_TYPE.WARN)
	})
})

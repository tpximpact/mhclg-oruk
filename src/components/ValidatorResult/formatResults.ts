import { STATUS, StatusType } from '@/utilities/status'
import { groupBy } from '@/utilities/groupBy'
import { isDeepEqual } from '@/utilities/isDeepEqual'

interface Test {
	endpoint: string
	success: boolean
	parent?: string
	status?: StatusType
	messages: any[]
	[key: string]: any
}

interface TestSuite {
	name: string
	required: boolean
	tests: Test[]
}

interface ServiceInput {
	service: {
		url: string
	}
	testSuites: TestSuite[]
}

interface GroupedTests {
	[key: string]: Test[]
}

interface EndpointResult {
	tests?: Test[]
	groups?: GroupedTests
}

interface FormattedResults {
	[endpointName: string]: EndpointResult
}

const normaliseEndpointName = (endpointName: string): string =>
  endpointName !== '/' && endpointName.slice(-1) === '/' ? `${endpointName}{id}` : endpointName

const processTest = (suite: TestSuite, test: Test): Test => {
	test.parent = suite.name
	test.status = test.success ? STATUS.PASS : suite.required ? STATUS.FAIL : STATUS.OTHER
	return test
}

const stripSharedPath = (str: string, sharedPath: string): string => str.replace(sharedPath, '')

const addTestToResult = (result, test, sharedPath) => {
  const endpointRaw = stripSharedPath(test.endpoint, sharedPath)
  const endpointName = normaliseEndpointName(endpointRaw)
  if (!result[endpointName]) {
    result[endpointName] = { tests: [] }
  }
  result[endpointName].tests.push(test)
}

const groupTestsByParent = result => {
  Object.keys(result).forEach(key => {
    const groupedTests = groupBy(result[key].tests, 'parent')
    result[key].groups = groupedTests
    delete result[key].tests
  })
}

export const formatResults = input => {
  let result = {}

  const sharedPath = input.service.url
  input.testSuites.forEach(suite => {
    suite.tests.forEach(test => {
      const processedTest = processTest(suite, test)
      addTestToResult(result, processedTest, sharedPath)
    })
  })

  groupTestsByParent(result)
  result = deDuplicateMessages(result)

  return result
}

const deDuplicateMessages = input => {
  const result = JSON.parse(JSON.stringify(input))
  Object.keys(result).forEach(endpointKey => {
    const endpoint = result[endpointKey]

    Object.keys(endpoint.groups).forEach(groupKey => {
      const group = endpoint.groups[groupKey]
      group.forEach(test => {
        test.messages = deduplicate(test.messages)
      })
    })
  })
  return result
}

const deduplicate = (arr: any[]): any[] => {
	let uniques: any[] = []
	arr.forEach(item => {
		if (!isIn(item, uniques)) {
			uniques.push(item)
		}
	})
	uniques.forEach(u => {
		const number = arr.filter(member => isDeepEqual(member, u)).length
		u.count = number
	})
	return uniques
}

const isIn = (needle: any, haystack: any[]): boolean => haystack.some(item => isDeepEqual(item, needle))

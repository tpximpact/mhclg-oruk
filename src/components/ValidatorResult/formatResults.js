import { STATUS } from '@/utilities/status'
import { groupBy } from '@/utilities/groupBy'
import { isDeepEqual } from '@/utilities/isDeepEqual'

const normaliseEndpointName = endpointName =>
  endpointName !== '/' && endpointName.slice(-1) === '/' ? `${endpointName}{id}` : endpointName

const processTest = (suite, test) => {
  test.parent = suite.name
  test.status = test.success ? STATUS.PASS : suite.required ? STATUS.FAIL : STATUS.OTHER
  return test
}

const stripSharedPath = (str, sharedPath) => str.replace(sharedPath, '')

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

const deduplicate = arr => {
  let uniques = []
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

const isIn = (needle, haystack) => haystack.some(item => isDeepEqual(item, needle))

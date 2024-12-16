import { STATUS } from '@/utilities/status'
import { groupBy } from '@/utilities/groupBy'

const normaliseEndpointName = (endpointName) =>
  endpointName !== "/" && endpointName.slice(-1) === "/"
    ? `${endpointName}{id}`
    : endpointName;

const processTest = (suite, test) => {
  test.parent = suite.name;
  test.status = test.success
    ? STATUS.PASS
    : suite.required
    ? STATUS.FAIL
    : STATUS.OTHER;
  return test;
};

const addTestToResult = (result, test) => {
  const endpointName = normaliseEndpointName(test.endpoint);
  if (!result[endpointName]) {
    result[endpointName] = { tests: [] };
  }
  result[endpointName].tests.push(test);
};

const groupTestsByParent = (result) => {
  Object.keys(result).forEach((key) => {
    const groupedTests = groupBy(result[key].tests, "parent");
    result[key].groups = groupedTests;
    delete result[key].tests;
  });
};

export const formatResults = (input) => {
  let result = {};

  input.testSuites.forEach((suite) => {
    suite.tests.forEach((test) => {
      const processedTest = processTest(suite, test);
      addTestToResult(result, processedTest);
    });
  });
  
  groupTestsByParent(result);
 // result = deDuplicateMessages(result)

  return result;
};

/*
const deDuplicateMessages = (input) =>{
  const result = JSON.parse(JSON.stringify(input))
  Object.keys(result).forEach(endpointKey => {
    const endpoint = result[endpointKey]

    Object.keys(endpoint.groups).forEach(
      groupKey => {
        const group = endpoint.groups[groupKey]
        console.log(group)
        group.forEach(
          test => {
            test.messages = []
          }
        )
      }
    )

  });
  return result
}
  */
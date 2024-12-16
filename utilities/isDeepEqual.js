
export const isDeepEqual = (object1, object2) => {
    if (!isObject(object1) || !isObject(object2)) return false;
  
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) return false;
  
    for (const key of keys1) {
      if (!keys2.includes(key)) return false;
  
      const value1 = object1[key];
      const value2 = object2[key];
  
      if (isObject(value1) && isObject(value2)) {
        if (!isDeepEqual(value1, value2)) return false;
      } else if (value1 !== value2) {
        return false;
      }
    }
  
    return true;
  };
  

  const isObject = (value) => {
    return value !== null && typeof value === "object";
  };
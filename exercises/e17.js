export function minBy(array, cb) {
  let minValue;
  let minElement;
  for (let element of array) {
    let testValue = cb(element);
    if (minValue === undefined || testValue < minValue) {
      minValue = testValue;
      minElement = element;
    }
  }
  return minElement;
}

export function maxBy(array, cb) {
  let maxValue;
  let maxElement;
  for (let element of array) {
    let testValue = cb(element);
    if (maxValue === undefined || testValue > maxValue) {
      maxValue = testValue;
      maxElement = element;
    }
  }
  return maxElement;
}

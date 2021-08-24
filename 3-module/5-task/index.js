function getMinMax(str) {
  let arr = str.split(' ')
  let result = []
  for (let index in arr) {
    if (!isNaN(Number.parseFloat(arr[index]))) {
      result.push(arr[index])
    }
  }
  return {'min': Math.min(...result),
          'max': Math.max(...result)}

}

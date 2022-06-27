export const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length

export const median = (arr) => {
  let middle = Math.floor(arr.length / 2)
  arr = [...arr].sort((a, b) => a - b)
  return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2
}

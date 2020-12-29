export const binarySearch = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.round((low + high) / 2)

    if (list[mid] === item) {
      return mid
    } else if (list[mid] > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1;
}

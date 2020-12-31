export class Recursive {
  sum (arr, t = 0, i = 0) {
    if (arr.length === i) {
      return t
    } else {
      t = t + arr[i]
      i++
      return this.sum(arr, t, i)
    }
  }

  count (arr, i = 0) {
    if (arr.length === i) {
      return i
    } else {
      i++
      return this.count(arr, i)
    }
  }

  findHigh (arr, h = 0, i = 0) {
    if (arr.length === i) {
      return h
    } else {
      if (arr[i] > h) {
        h = arr[i]
      }
      i++
      return this.findHigh(arr, h, i)
    }
  }

  binarySearch (arr, el, l = 0, h = arr.length - 1, m = 0) {
    m = Math.round((h + l) / 2)

    if (l <= h) {
      if (arr[m] === el) {
        return m
      } else if (arr[m] < el) {
        l = m + 1
        return this.binarySearch(arr, el, l, h, m)
      } else {
        h = m - 1
        return this.binarySearch(arr, el, l, h, m)
      }
    } else {
      return -1
    }
  }
}

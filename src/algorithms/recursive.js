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
}

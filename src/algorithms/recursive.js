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
      return this.count(arr, i++)
    }
  }
}

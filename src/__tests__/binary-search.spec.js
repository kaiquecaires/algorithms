import { expect, test } from '@jest/globals'
import { binarySearch } from '../algorithms/binary-search'

test('should binarySearch returns -1 if number does not exists in list', () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  expect(binarySearch(list, 10)).toBe(-1)
  expect(binarySearch(list, 12)).toBe(-1)
  expect(binarySearch(list, 15)).toBe(-1)
  expect(binarySearch(list, 20)).toBe(-1)
})

test('should binarySearch returns a correct index', () => {
  const list0 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const list1 = [10, 11, 12, 13, 14, 15, 16, 17, 18]
  const list2 = [19, 20, 21, 22, 23, 24, 25, 26, 27]
  const list3 = [28, 29, 30, 31, 32, 33, 34, 35, 36]

  expect(binarySearch(list0, 5)).toBe(4)
  expect(binarySearch(list0, 8)).toBe(7)
  expect(binarySearch(list1, 15)).toBe(5)
  expect(binarySearch(list2, 26)).toBe(7)
  expect(binarySearch(list2, 27)).toBe(8)
  expect(binarySearch(list3, 34)).toBe(6)
})

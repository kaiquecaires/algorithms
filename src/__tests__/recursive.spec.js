import { expect, test } from '@jest/globals'
import { Recursive } from '../algorithms/recursive'

test('should be able returns a sum of array result', () => {
  const rr = new Recursive()
  const arr = [10, 5, 5, 5]

  const result = rr.sum(arr)

  expect(result).toBe(25)
})

test('should be able returns a count of array result', () => {
  const rr = new Recursive()
  const arr = [10, 5, 5, 5, 5]

  const result = rr.count(arr)

  expect(result).toBe(5)
})

test('should be able returns a high element of array', () => {
  const rr = new Recursive()
  const arr = [10, 5, 50, 5, 500]

  const result = rr.findHigh(arr)

  expect(result).toBe(500)
})

test('should be able returns a index of element on array', () => {
  const rr = new Recursive()
  const arr = [10, 20, 30, 40, 50]

  const result = rr.binarySearch(arr, 30)

  expect(result).toBe(2)
})

test('should be able returns -1 if element does not exists', () => {
  const rr = new Recursive()
  const arr = [10, 20, 30, 40, 50]

  const result = rr.binarySearch(arr, 100)

  expect(result).toBe(-1)
})

test('should be able returns ordered array', () => {
  const rr = new Recursive()
  const arr = [50, 30, 80, 2]

  const result = rr.quickSort(arr)

  expect(result).toEqual([2, 30, 50, 80])
})

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

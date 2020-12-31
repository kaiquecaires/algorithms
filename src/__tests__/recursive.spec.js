import { expect, test } from '@jest/globals'
import { Recursive } from '../algorithms/recursive'

test('should be able returns a sum of array result', () => {
  const rr = new Recursive()
  const arr = [10, 5, 5, 5]

  const result = rr.sum(arr)

  expect(result).toBe(25)
})

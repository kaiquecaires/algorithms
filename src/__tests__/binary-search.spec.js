import { test } from '@jest/globals';
import { binarySearch } from '../algorithms/binary-search';

test('should binarySearch return -1 if number does not exists in list', () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  expect(binarySearch(list, 10)).toBe(-1)
})

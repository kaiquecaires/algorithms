import { expect, test } from '@jest/globals'
import { HashTable } from '../algorithms/hash-table'

test('should be able HashTable returns a correct value', () => {
  const ht = new HashTable()
  ht.setItem('firstName', 'foo')
  ht.setItem('lastName', 'baz')
  ht.setItem('age', 5)
  ht.setItem('dob', '1/2/3')

  expect(ht.getItem('firstName')).toBe('foo')
  expect(ht.getItem('age')).toBe(5)
})

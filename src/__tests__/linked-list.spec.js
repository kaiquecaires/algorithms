import { expect, test } from '@jest/globals'
import { LinkedList } from '../algorithms/linked-list'

test('should be able to insert a item in a last position', () => {
  const ll = new LinkedList()

  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertLast(300)

  expect(ll.getAt(2)).toBe(300)
})

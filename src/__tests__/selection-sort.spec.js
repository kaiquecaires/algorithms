import { expect, test } from '@jest/globals'
import { SelectionSort } from '../algorithms/selection-sort'
import { LinkedList } from '../algorithms/linked-list'

test('Should be able sort list', () => {
  const ll = new LinkedList()
  ll.insertLast(450)
  ll.insertLast(10)
  ll.insertLast(5)
  ll.insertLast(20)
  ll.insertLast(20)

  const ss = new SelectionSort(ll)

  expect(ss.sort()).toEqual([5, 10, 20, 20, 450])
})

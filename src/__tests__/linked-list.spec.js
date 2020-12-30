import { expect, test } from '@jest/globals'
import { LinkedList } from '../algorithms/linked-list'

test('should be able to insert a item in a last position', () => {
  const ll = new LinkedList()

  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertLast(300)

  expect(ll.getAt(2)).toBe(300)
})

test('should be able to insert a item in a first position', () => {
  const ll = new LinkedList()

  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertFirst(300)

  expect(ll.getAt(0)).toBe(300)
})

test('should returns index out of range if index does not exists', () => {
  const ll = new LinkedList()

  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertFirst(300)

  expect(ll.getAt(5)).toBe('index out of range')
  expect(ll.insertAt(1000, 5)).toBe('index out of range')
  expect(ll.removeAt(5)).toBe('index out of range')
})

test('should returns index of the element', () => {
  const ll = new LinkedList()

  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertFirst(300)

  expect(ll.getIndex(300)).toBe(0)
  expect(ll.getIndex(700)).toBe(-1)
})

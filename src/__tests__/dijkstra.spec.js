import { test, expect } from '@jest/globals'
import { dijkstra } from '../algorithms/dijkstra'

test('should be able return small cost', () => {
  const graph = {
    start: {
      a: 6,
      b: 2
    },
    a: {
      end: 1
    },
    b: {
      a: 3,
      end: 5
    }
  }
  
  const prices = {
    a: 6,
    b: 2,
    end: Infinity
  }
  
  const parents = {
    a: 'start',
    b: 'start',
    end: null
  }
  
  const result = dijkstra(graph, prices, parents)

  expect(result).toEqual({ a: 'b', b: 'start', end: 'a' })
})

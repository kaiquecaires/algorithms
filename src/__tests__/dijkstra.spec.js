import { test, expect } from '@jest/globals'
import { dijkstra } from '../algorithms/dijkstra'

test('should be able return small path cost', () => {
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

test('should be able return small path cost', () => {
  const graph = {
    start: {
      a: 5,
      b: 2
    },
    b: {
      d: 7,
      a: 8
    },
    a: {
      c: 4,
      d: 2
    },
    c: {
      end: 3,
      d: 6
    },
    d: {
      end: 1
    }
  }
  
  const prices = {
    a: 6,
    b: 2,
    c: Infinity,
    d: Infinity,
    end: Infinity
  }
  
  const parents = {
    a: 'start',
    b: 'start',
    c: null,
    d: null,
    end: null
  }
  
  const result = dijkstra(graph, prices, parents)

  expect(result).toEqual({ a: 'start', b: 'start', c: 'a', d: 'a', end: 'd' })
})

test('should be able return small path cost', () => {
  const graph = {
    start: {
      a: 10,
    },
    b: {
      end: 30,
      c: 1
    },
    a: {
      b: 20
    },
    c: {
      a: 1
    },
  }
  
  const prices = {
    a: 2,
    b: Infinity,
    c: Infinity,
    d: Infinity,
    end: Infinity
  }
  
  const parents = {
    a: 'start',
    b: null,
    c: null,
    end: null
  }
  
  const result = dijkstra(graph, prices, parents)
  console.log(result)

  expect(result).toEqual({ a: 'start', b: 'a', c: 'b', end: 'b' })
})


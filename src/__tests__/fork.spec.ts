import { test, expect } from '@jest/globals'
import { Graphs } from '../algorithms/graphs'

test('should be able return a first valid value on the fork', () => {
  let fork = {}
  fork['Kaique'] = ['Denis', 'Vinicius', 'Athayde']
  fork['Denis'] = ['Lucas', 'Bruno']
  fork['Vinicius'] = ['Lucas', 'Jason']
  fork['Athayde'] = ['Daniel', 'Hel']

  let g = new Graphs()

  expect(g.findSeller(fork, 'Kaique')).toBe('Lucas')
})

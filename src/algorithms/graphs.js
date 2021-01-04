function isSeller (people) {
  return (people[0] === 'L' || people[0] === 'J')
}

export class Graphs {
  findSeller (fork, init) {
    let queue = fork[init]
    let checked = []

    while (queue.length > 0) {
      const person = queue[0]

      if (!checked.includes(person)) {
        if (isSeller(person)) {
          return person
        } else {
          checked.push(person)
        }
      }
      
      queue.splice(0, 1)

      if (fork[person]) {
        queue = [...queue, ...fork[person]]
      }
    }

    return 'There are no sellers'
  }
}

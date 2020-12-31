const hashStringToInt = (s, tableSize) => {
  let hash = 17

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize
  }

  return hash
}

export class HashTable {
  table = new Array(3)
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2)
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, item]) => {
          const index = hashStringToInt(key, newTable.length)
          
          if (newTable[index]) {
            newTable[index].push([key, item])
          } else {
            newTable[index] = [[key, item]]
          }
        })
      }
    })

    this.table = newTable
  }

  setItem (key, item) {
    this.numItems++

    const loadFactor = this.numItems / this.table.length

    if (loadFactor > .8) {
      this.resize()
    }

    const index = hashStringToInt(key, this.table.length)

    if (this.table[index]) {
      this.table[index].push([key, item])
    } else {
      this.table[index] = [[key, item]]
    }
  }

  getItem (key) {
    const index = hashStringToInt(key, this.table.length)

    if(!this.table[index]) {
      return null
    }

    return this.table[index].find(x => x[0] === key)[1]
  }
}

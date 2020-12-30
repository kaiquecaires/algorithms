export class SelectionSort {
  constructor (list) {
    // Linked list
    this.list = list
  }

  smallerSearch (list) {
    const length = list.size
    let current = this.list.head
    let small = this.list.head.data

    for (let i = 0; i < length; i++) {
      if (current.data < small) {
        small = current.data
      }

      current = current.next
    }

    return small
  }

  sort () {
    const sortItems = []
    const length = this.list.size

    for (let i = 0; i < length; i++) {
      const small = this.smallerSearch(this.list)
      const index = this.list.getIndex(small)
      this.list.removeAt(index)
      sortItems.push(small)
    }

    return sortItems
  }
}

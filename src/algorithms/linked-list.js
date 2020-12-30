class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

export class LinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  // Insert first node
  insertFirst (data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  // Insert Last node
  insertLast (data) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      this.size++
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
      this.size++
    }
  }

  // Insert at index
  insertAt (data, index) {
    if (index > this.size || index < 0) {
      return 'index out of range'
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const node = new Node(data)
    let current, previous

    current = this.head
    let count = 0

    while (count < index) {
      previous = current // Node before index
      current = current.next // Node after index
      count++
    }

    node.next = current
    previous.next = node

    this.size++
  }

  // Remove at index
  removeAt (index) {
    if (index > this.size || index < 0) {
      return 'index out of range'
    }

    let count = 0
    let current = this.head
    let previous

    if (index === 0) {
      this.head = this.head.next
      this.size--
      return
    }

    while (count < index) {
      previous = current
      current = current.next
      count++
    }

    previous.next = current.next

    this.size--
  }

  // Get at index
  getAt (index) {
    if (index > this.size || index < 0) {
      return 'index out of range'
    }

    if (index === 0) {
      return this.head.data
    }

    let count = 0
    let current = this.head

    while (count < index) {
      current = current.next
      count++
    }

    return current.data
  }

  // Get the index of element
  getIndex (element) {
    const length = this.size
    let current = this.head

    for (let i = 0; i < length; i++) {
      if (current.data === element) {
        return i
      }
      current = current.next
    }

    return -1
  }

  // Clear list
  clear () {
    this.size = 0
    this.head = null
  }

  // Print list data
  printListData () {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

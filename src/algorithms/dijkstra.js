export function dijkstra (graph, pricesParam, parentsParam) {
  const prices = Object.assign({}, pricesParam)
  const parents = parentsParam
  const processed = []

  const findSmallNode = () => {
    let small = Infinity
    let smallNode = null
  
    for (const node in prices) {
      if ((prices[node] < small) && !processed.includes(node)) {
        small = prices[node]
        smallNode = node
      }
    }

    return smallNode
  }

  let smallNode = findSmallNode()

  while (smallNode) {
    const cost = prices[smallNode]
    
    for (const node in graph[smallNode]) {
      const newCost = cost + graph[smallNode][node]
      if (prices[node] > newCost) {
        prices[node] = newCost
        parents[node] = smallNode
      }
    }

    processed.push(smallNode)
    smallNode = findSmallNode()
  }

  return parents
}

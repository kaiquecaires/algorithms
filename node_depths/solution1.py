# O(n) time | O(h) space - where n is the number of node in the binary three and h is the height of the Binary three
def node_depths(root):
  arr_total = [0]
  sum_node_depths(root, 0, arr_total)
  return arr_total[0]

def sum_node_depths(tree, depth, arr_total):
  if tree is None:
    return

  arr_total[0] += depth
  depth += 1

  sum_node_depths(tree.left, depth, arr_total)
  sum_node_depths(tree.right, depth, arr_total)


class BST:
  def __init__(self, value):
      self.value = value
      self.left = None
      self.right = None


bst = BST(10)
bst.left = BST(8)
bst.right = BST(12)

print(node_depths(bst))
def branch_sums(root):
  return branch_sums_help(root, [], 0, [])


def branch_sums_help(root: object, array: list, branch_sum: int, branch_sum_array: list):
  branch_sum += root.value
  children = []
  if root.left is not None:
    children.append(root.left)
  if root.right is not None:
    children.append(root.right)
  if len(children) > 0:
    array.append(children[0])
  if root.left is None and root.right is None:
    branch_sum_array.append(branch_sum)
    branch_sum = 0
  for child in children:
    branch_sums_help(child, array, branch_sum, branch_sum_array)
  
  return branch_sum_array

class BinaryTree:
  def __init__(self, value) -> None:
      self.value = value
      self.left = None
      self.right = None


bst = BinaryTree(10)
bst.left = BinaryTree(8)
bst.left.left = BinaryTree(7)
bst.left.right = BinaryTree(9)
bst.right = BinaryTree(12)
bst.right.left = BinaryTree(11)
bst.right.right = BinaryTree(13)
print(branch_sums(bst))
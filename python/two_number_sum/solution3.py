
# Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash table. What are the time and space implications of this approach?
# Time complexity O(n)
# Space complexity O(n)

def two_number_num(array, target_sum):
  hash_table = {}
  for i in range(len(array)):
    needed_number = target_sum - array[i]
    if hash_table.get(needed_number) != None:
      return [needed_number, array[i]]
    else:
      hash_table[array[i]] = array[i]
  return []

print(two_number_num([1, 2, 3, 4], 3))

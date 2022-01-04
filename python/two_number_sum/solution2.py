# Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = target_sum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.
# Time complexity O(n^2)
# Space complexity O(1)

def two_number_num(array, target_sum):
  for i in range(len(array)):
    needed_number = target_sum - array[i] # target_sum = needed_number + array[i]
    for j in range(i, len(array)):
      if i != j:
        if array[j] == needed_number:
          return [needed_number, array[i]]
  return []

print(two_number_num([1, 2, 3, 4], 3))

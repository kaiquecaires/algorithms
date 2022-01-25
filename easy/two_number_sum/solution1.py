# Time complexity O(n^2)
# Space complexity O(1)
def two_number_sum(array, target_sum):
  for i in range(len(array)):
    for j in range(i, len(array)):
      if j != i:
        if (array[i] + array[j]) == target_sum:
          return [array[i], array[j]]
  return []

print(two_number_sum([1, 2, 3, 4], 5))

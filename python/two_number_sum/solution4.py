# Time complexity O(log(n))
# Space complexity O(1)

def two_number_num(array, target_number):
  array.sort()
  left = 0
  right = len(array) - 1
  while left < right:
    current_sum = array[left] + array[right]
    if current_sum > target_number:
      right -= 1
    elif current_sum < target_number:
      left += 1
    else:
      return [array[left], array[right]]
  return []

print(two_number_num([10, 20, 30], 70))

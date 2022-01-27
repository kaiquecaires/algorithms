# O(n(log n) + m(log m)) time | O(1) space
def smallest_difference(array_one, array_two):
  array_one.sort(reverse=True)
  array_two.sort(reverse=True)
  closest_pair = [array_one[0] - array_two[0]]
  closest_to_zero = abs(array_one[0] - array_two[0])
  i = 0
  j = 0 
  while i < len(array_one) and j < len(array_two):
    current_value = abs(array_one[i] - array_two[j])
    if current_value < closest_to_zero:
      closest_pair = [array_one[i], array_two[j]]
      closest_to_zero = current_value
    if array_one[i] > array_two[j]:
      i += 1
    else:
      j += 1
  return closest_pair

print(smallest_difference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
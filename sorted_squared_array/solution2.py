def sorted_squared_array(array):
  sorted_squares = [0 for _ in array]
  start = 0
  end = len(array) - 1

  for idx in reversed(range(len(array))):
    smaller_value = array[start]
    larger_value = array[end]

    if abs(smaller_value) > abs(larger_value):
      sorted_squares[idx] = smaller_value * smaller_value
      start += 1
    else:
      sorted_squares[idx] = larger_value * larger_value
      end -= 1
  
  return sorted_squares

print(sorted_squared_array([-2, -1, 1, 2, 3]))

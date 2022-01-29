def is_monotonic(array):
  if len(array) == 0 or len(array) == 1:
    return True
  non_increasing = is_non_increasing(array)

  for i in range(1, len(array)):
    if non_increasing and array[i - 1] < array[i]:
      return False
    elif non_increasing is not True and array[i - 1] > array[i]:
      return False

  return True

def is_non_increasing(array):
  for i in range(1, len(array)):
    if array[i - 1] > array[i]:
      return True
    elif array[i - 1] < array[i]:
      return False
  return False

# expect True
print(is_monotonic([1, 2, 3, 4, 5]))

# expect True
print(is_monotonic([5, 5, 5, 4, 3, 2, 1]))

# expect False
print(is_monotonic([5, 4, 6, 7, 3]))

# O(n) time | O(1) space
def get_nth_fib(n):
  if n == 2:
    return 1
  elif n == 1:
    return 0
  
  last_two_fibs = [0, 1]
  for _ in range(2, n):
    fib = last_two_fibs[0] + last_two_fibs[1]
    last_two_fibs[0] = last_two_fibs[1]
    last_two_fibs[1] = fib

  return fib

print(get_nth_fib(6))

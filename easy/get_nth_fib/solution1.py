# O (2 ^ n) time | O(n) space
def get_nth_fib(n):
  if n == 1:
    return 0
  if n == 2:
    return 1
  return get_nth_fib(n - 2) + get_nth_fib(n - 1)

print(get_nth_fib(6))

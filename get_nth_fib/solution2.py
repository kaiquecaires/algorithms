# O(n) time | O(n) space
def get_nth_fib(n, memoize = { 1:0, 2:1 }):
  if n in memoize:
    return memoize[n]
  else:
    memoize[n] = get_nth_fib(n - 2, memoize) + get_nth_fib(n - 1, memoize)
    return memoize[n]

print(get_nth_fib(6))

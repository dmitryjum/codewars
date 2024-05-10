# can count the number of trailing zeros by determining how many times n can be divided by 5.
# This is because each set of five numbers contributes at least one multiple of 5,
# and every two multiples of 5 contribute a 10, which adds a trailing zero.

def zeros(n)
  count = 0
  
  while n >= 5
    n /= 5
    count += n
  end
  return count
end
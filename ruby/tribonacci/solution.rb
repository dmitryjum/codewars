def tribonacci(signature,n)
  return signature unless signature.length < n || n < signature.length
  if n < 3 && n > 0
    signature.first(n)
  elsif n == 0
    []
  else
    signature << signature.last(3).reduce(:+)
    tribonacci(signature, n)
  end
end
def digital_root(n)
  n < 10 ? n : digital_root(n.digits.reduce(:+))
end
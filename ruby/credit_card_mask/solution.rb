def maskify(cc)
  cc.chars.map.with_index {|el, i| cc.length - i <= 4 ? el : '#'}.join
end
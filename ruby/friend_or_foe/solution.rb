def friend(friends)
  friends.select {|name| name.length == 4}
end
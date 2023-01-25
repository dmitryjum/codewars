def sortByLen(e):
    return len(e)


def find_short(s):
    string_array = s.split(" ")
    string_array.sort(key=sortByLen)
    return len(string_array[0])

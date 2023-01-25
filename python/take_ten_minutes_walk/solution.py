def is_valid_walk(walk):
    if len(walk) == 10:
        direction_counters = {
            'n': 0,
            's': 0,
            'e': 0,
            'w': 0
        }
        for d in walk:
            direction_counters[d] += 1
        if (direction_counters['n'] == direction_counters['s'] and direction_counters['e'] == direction_counters['w']):
            return True
        else:
            return False
    else:
        return False
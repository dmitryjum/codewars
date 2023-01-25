toDict = {
    0: {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX'
    },

    1: {
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC'
    },

    2: {
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM'
    },

    3: {
        1: 'M',
        2: 'MM',
        3: 'MMM',
        4: 'MMMM',
    }
}


def solution(n):
    roman_string = ''
    num_string = str(n)
    for i in range(len(num_string)):
        current_digit = int(num_string[i])
        if (current_digit > 0):
            roman_string = roman_string + \
                toDict[len(num_string) - i - 1][current_digit]
    return roman_string

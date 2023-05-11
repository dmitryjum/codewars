Write a function that takes 2 arguments: String: "JPMORGANISHIRING", Int: 3. Where the second argument is rows the word needs to be split.
Examples:
input: s = "JPMORGANISHIRING", numRows = 3
output: "JRIRPOGNSIIGMAHN"

Visual algorithm of the output:

J   R   I   R
P O G N S I I G
M   A   H   N

0,0     0,2     0,4
1,0 1,1 1,2 1,3 1,4 1.5
2,0     2,2     2,4

But when numRows = 4

Output: "JARPGNIIMRIHNOSG"

J      A     R
P    G N   I I
M  R   I H   N
O      S     G

numRows = 5, OUTPUT: "JIPNSGMAHNOGIIRR"

J          I 
P        N S       G
M     A    H    N
O  G       I I
R          R
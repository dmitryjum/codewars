Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:
```
# should return true
[ 1, 1, 1 ].same_structure_as( [ 2, 2, 2 ] )
[ 1, [ 1, 1 ] ].same_structure_as( [ 2, [ 2, 2 ] ] )

# should return false 
[ 1, [ 1, 1 ] ].same_structure_as( [ [ 2, 2 ], 2 ] )
[ 1, [ 1, 1 ] ].same_structure_as( [ [ 2 ], 2 ] )

# should return true
[ [ [ ], [ ] ] ].same_structure_as( [ [ [ ], [ ] ] ] ); 

# should return false
[ [ [ ], [ ] ] ].same_structure_as( [ [ 1, 1 ] ] )
```
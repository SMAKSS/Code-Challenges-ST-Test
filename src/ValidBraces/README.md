
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return  `true`  if the string is valid, and  `false`  if it's invalid.


All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces:  `()[]{}`.

### What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

## Examples

```py
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```
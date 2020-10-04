/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
  function formatName(name) {     node 
  return name.split("")[0].toUpperCase() + name.slice(1);
}

names.map(formatName).forEach(function(name, index) {
  console.log(index + ": " + name);
});
```
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr = arr.forEach
function exceptionsNumbers() {
  if (x / 3 == 0) {
    return "Fizz"
  }
  if (x / 5 == 0) {
    return "Buzz";
  }
  if (x / 3 && 5 == 0) {
    return "Fizz"
  }
  else
    return arr
}

console.log(exceptionsNumbers(arr))

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/

// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


/*  opcion 1
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5, 1];
return numbers.map(x => x * 100);
*/

// opcion 2
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5, 1];
var multipNUmber = numbers.map(number => {
  return number * 100
})
console.log(multipNUmber)
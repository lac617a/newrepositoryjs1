/* Write a function that:
- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop
*/

let n = 888;

function sumTillNum(num) {
	let sum = 0;
	let counter = 0

	while (counter <= num) {
		console.log(counter)
		counter = counter + 1
		sum = sum + counter
	}																																																																																																																																																																																																																																																																																																																																																																																																																																															
	return sum





	//your code here
}


console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
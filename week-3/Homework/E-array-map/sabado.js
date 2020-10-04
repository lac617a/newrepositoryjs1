/*Create a function which:

Takes an array of birthYears
Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
Returns an array of people who can drive (remember, you can drive if you are 17 years or older)
*/
const birthYears = [2009, 2000, 1999, 1990, 1985, 1980, 2020];
const canDrive = birthYears.filter(edad => 2020 - edad >= 17);
console.log("These are the birth years of people who can drive: " + canDrive);
/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function TDays(myDays){
  myDays.forEach (day => {
    if (day[0] == "T") console.log(day);
  })
}
TDays(daysOfWeek)

//if (index = "T") {
 // return day;}
 
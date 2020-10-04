/*
 Logical Operators
 ---------------------------------
 This program calls some functions that are either missing or incomplete.
 Update the code so that you get the expected result.
*/

function isNegative(theNumber) {
  return (theNumber < 0);
}

function isBetween5and10(betweenNUm) {
  if (betweenNUm > 5 && betweenNUm <= 10) {

    return true;

  } return false;
}

function isShortName(name) {
  if (name.length < 7) {
    return true;
  }
  else {
    return false;
  }
}


function startsWithD(nameD) {
  if (nameD.charAt(0) === "D"){
    return true ;
  }
}







/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/*
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/


























/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.



let Angie = 2;
let Disenchanted = " My Chemical Romance ";

function finde(concierto, fuego, arma, meet) {
    meet = meet * 6;
concierto = concierto + "completo ";

    return ("Hay un " + meet + concierto + "gratis");
}

console.log(finde(Disenchanted, Angie));




//function isNegative() {}

/*
  DO NOT EDIT BELOW THIS LINE
  ---------------------------


console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));


  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
             */
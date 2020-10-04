function percentT(stud, teach){
    return ((stud + teach) * 100) / teach;
}

function percentS(stud, teach){
    return ((stud + teach) * 100) / stud;
}

function inTheRoom(stud, teach){
  var usingThPercetnage = percentT(stud, teach);
  var usingThPercetnage2 = percentS(stud, teach);
  return usingThPercetnage + "% of teachers in the room and " + usingThPercetnage2 + "% of students in the room"
}

var lastSentence = inTheRoom(12, 5);
console.log(lastSentence);
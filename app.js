'use strict'

var usrNm = prompt('What is your name?')
  alert ('Hey there ' +usrNm+ " lets see if your friendship material");
  var frendLvl = 0;

//Q1//
var lkTed = prompt('Do you like the name Ted?').toUpperCase();
  if (lkTed === "NO"|| lkTed == "N") {
    // console.log('N or NO answere')
    alert('answer accepted')
  } else if (lkTed == "YES" || lkTed === "Y"){
    // console.log('Y or YES answere')
    
    frendLvl ++;
    // console.log(frendLvl)
    alert('Good answer your friend level is '+frendLvl)
  } else {
    //console.log('Not Yes or No')
    alert('that wasnt a yes or no')
  };

//Q2//
var lkVr = prompt('Do you like VR?').toUpperCase();
  if (lkVr === "NO"|| lkVr == "N") {
  // console.log('N or NO answere')
  alert('answer accepted')
  } else if (lkVr == "YES" || lkVr === "Y"){
  // console.log('Y or YES answere')
  var frendLvl = frendLvl +1;
  // console.log(frendLvl)
  alert('Good answer your friend level is '+frendLvl)
  } else {
  // console.log('Not Yes or No')
  alert('that wasnt a yes or no')
  };

//Q3//
var lk3dp = prompt('Do you like 3D printing?').toUpperCase();
  if (lk3dp === "NO"|| lk3dp == "N") {
    // console.log('N or NO answere')
    alert('answer accepted')
  } else if (lk3dp == "YES" || lk3dp === "Y"){
    // console.log('Y or YES answere')
    var frendLvl = frendLvl +1;
    alert('Good answer your friend level is '+frendLvl)  
  } else {
    // console.log('Not Yes or No')
    alert('that wasnt a yes or no')
  };

//Q4//
var lkBg = prompt('Do you like board games?').toUpperCase();
  if (lkBg === "NO"|| lkBg == "N") {
    // console.log('N or NO answere')
    alert('answer accepted')
  } else if (lkBg == "YES" || lkBg === "Y"){
    // console.log('Y or YES answere')
    var frendLvl = frendLvl +1;
    alert('Good answere your friend level is '+frendLvl)
  } else {
    // console.log('Not Yes or No')
    alert('that wasnt a yes or no')
  };

//Q5//
var lkRbts = prompt('Do you like robots?').toUpperCase();
  if (lkRbts === "NO"|| lkRbts == "N") {
    // console.log('N or NO answere')
    alert('answere accepted')
  } else if (lkRbts == "YES" || lkRbts === "Y"){
    // console.log('Y or YES answere')
    var frendLvl = frendLvl +1;
    alert('Good answere your friend level is '+frendLvl)
  } else {
    // console.log('Not Yes or No')
    alert('that wasnt a yes or no')
  };

//Returned Info//  
if (frendLvl >= 1){
  alert ('Thank you ' +usrNm+ '! you are friend level '+frendLvl+'/5 !!!');
  
}else{
  alert ('This doesnt look good ' +usrNm+ ' you are friend level '+frendLvl+'/5... you may go now');
};

//Q6//
for (var i=0; i <4; i++){
  let userGuess = prompt("Pick a number between 1 and 10");
  userGuess = parseInt(userGuess)
  while ( !userGuess || userGuess < 1 || userGuess > 10 ){
  userGuess = prompt("Sorry, please pick a number between 1 and 10");
  }
  console.log('thats a number, here we go!')
  var gotIt = 0;
  if (userGuess == 8){
    alert ('you are correct!')
    gotIt = 1;
    frendLvl++;
    break;
  }else if (userGuess < 8){
    alert ('you are too low')
  }else if (userGuess > 8){
    alert("you are too high")
  }
}
if (gotIt){
  alert('Great job 8 was the answer!');
}else{
  alert('Too bad the number was 8!');
}

//Q7//
var numTries = 0
var arrayOfAns = ['VR','ROBOTS','3DPRINTING','BOARDGAMES']
for ( i=5 ; i >= 0 ; i-- ){
  var userGuess7 = prompt('What is one of my favorite things?').toUpperCase()
  numTries++;
  for ( var iA=0 ; iA < arrayOfAns.length ; iA++){
    if (userGuess7 === arrayOfAns[iA]){
      alert('Nice! That is one of them!')
      i=0;
      frendLvl++;
      break;
    }
  }
}

alert('you guessed '+numTries+' times! Possible answers were:')

for ( i=0 ; i < arrayOfAns.length ; i++){
  alert(arrayOfAns[i])
}
alert('your score'+frendLvl+'/7')
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
    
    var frendLvl = frendLvl + 1;
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
if (frendLvl >= 1){
  alert ('Thank you ' +usrNm+ '! you are friend level '+frendLvl+'/5 !!!');
  
}else{
  alert ('This doesnt look good ' +usrNm+ ' you are friend level '+frendLvl+'/5... you may go now');
};

  

 
'use strict'

function guessGame();{

var arrayQs = ['What is my name?','Where do I live?','whats my color?'];
var arrayAns = ['TED', 'LYNDEN','GREEN'];
var rightAns = 0;
for(var i = 0; i < arrayQs.length; i++){
  var usrAns = prompt(arrayQs[i]).toUpperCase()
  if(usrAns === arrayAns[i]){
    alert('Yuuuup!')
    rightAns ++;
  }else{
    alert('not quite!')
  }

}//END OF PROMPT FOR LOOP







}//END OF FUNC

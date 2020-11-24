var readLine = require("readline-sync");
var username = readLine.question("Hello,What is your name? ");
console.log("Hey "+ username +" Let's see how much you know Aman")
var score = 0;
var totalScore = 0;
function ask(question,answer){
  var userAnswer = readLine.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!");
    score++;
    
  }
  else{
    console.log("You are wrong!!");
    
    
  }
  console.log("Your score is "+ score );
  console.log("----------");
  totalScore++;
}

var questionOne="Where do Aman live? ";
var questionTwo = "Which headphone does Aman have? ";
var questionThree = "Which outdoor game does Aman like to play? ";

ask(questionOne,"Balotra");
ask(questionTwo,"jbl");
ask(questionThree,"Badminton");

console.log("Hooray!!Your final score is "+ score + " out of "+ totalScore);
var readlineSync = require("readline-sync");
const chalk = require("chalk");

let score = 0;
let userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to " + chalk.bold(chalk.red("A Simple Football Quiz!")));

function quiz(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.green(chalk.bold("Right!")));
    score += 1;
  }
  else {
    console.log(chalk.red(chalk.bold("Wrong!")));
  }

  console.log("Your score is " + score);
  console.log("----------------");
}

let questions = [{
  question: "Current World Cup champion? (2018) ",
  answer: "France"
}, {
  question: "Country with the most World Cups? ",
  answer: "Brazil"
}, {
  question: "Country Lionel Messi plays for? ",
  answer: "Argentina"
}, {
  question: "Country Cristiano Ronaldo plays for? ",
  answer: "Portugal"
}, {
  question: "2022 World Cup will be held in? ",
  answer: "Qatar"
}];

for (let i = 0; i < questions.length; i++) {
  quiz(questions[i].question, questions[i].answer);
}

console.log("YAY! Your total score: ", score);
console.log("-------------");
console.log(chalk.bgBlue(chalk.black("Top scorers:")));
console.log("-> Parvez: 5");
console.log("(Send me a screenshot if you should be on this list.)");
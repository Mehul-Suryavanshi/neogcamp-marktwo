import chalk from 'chalk';
import readlineSync from 'readline-sync'
// var chalk = require('chalk');
// var readlineSync = require('readline-sync');

var data = [
  {
    question: 'What is name of Goku\'s Son?',
    answer: 'Gohan'
  },
  {
    question: 'What is the name of Home planet of Saiyans?',
    answer: 'Vegeta'
  },
  {
    question: 'Who is the god of destruction of our universe?',
    answer: 'Beerus'
  },
  {
    question: 'What is the name of latest form of Goku?',
    answer: 'Ultra Instinct'
  },
  {
    question: 'Who is the strongest being across all universes?',
    answer: 'Zeno'
  }
];

var score = 0;

var blueBold = chalk.blue.bold;
var redBold = chalk.red.bold;
var greenBold = chalk.greenBright.bold;

var userName = '';

function askQuestion(question, answer) {
  var blueBold = chalk.blue.bold;
  var redBold = chalk.red.bold;

  let userAnswer = readlineSync.question(redBold(question));

  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function getUserName() {
  userName = readlineSync.question(redBold('What is your Name? '));
  console.log(greenBold('Hello ' + userName + ',') + blueBold(' Welcome to the Dragon Ball Fandom Game!'));
}

function play() {
  for (let record of data) {
    let result = askQuestion(record.question + ' ', record.answer);
    if (result === true) {
      score++;
    }
  }

  console.log(greenBold('Congrats!! Your Score is -> ' + score));
}


getUserName();
play();


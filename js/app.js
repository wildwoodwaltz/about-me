'use strict';

let ansCt = 0;

let firstName = prompt('Hello! What is your name?');

alert('Before we learn more about me ' + firstName + ', I\'d like to play a little guessing game.');
function questionOne(){

  let questionVideoGames = prompt('Do you think Tai likes video games?').toLowerCase();

  if (questionVideoGames === 'y' || questionVideoGames === 'yes') {
    alert('That is correct, I adore them as one of my main entertainment staples');
    ansCt++;
  }
  else if (questionVideoGames === 'n' || questionVideoGames === 'no') {
    alert('That is incorrect, video games are cool!');
  }
  else {
    alert('please answer yes or no');
    questionOne();
  }
}

function questionTwo(){

  let questionFamily = prompt('Does Tai have a small family?').toLowerCase();

  if (questionFamily === 'n' || questionFamily === 'no') {
    alert('That is correct, I have many siblings and my extended family is even bigger. Almost 100+ people');
    ansCt++;
  }

  else if (questionFamily === 'y' || questionFamily === 'yes') {
    alert('That is incorrect, my family is so large we have to rent a whole park out for reunions!');
  }
  else {
    alert('please answer yes or no');
    questionTwo();
  }
}

function questionThree(){

  let questionGlasses = prompt('Does Tai wear Glasses?').toLowerCase();

  if (questionGlasses === 'y' || questionGlasses === 'yes') {
    alert('That is correct, I wear them almost all the time, but I also wear contacts.');
    ansCt++;
  }

  else if (questionGlasses === 'n' || questionGlasses === 'no') {
    alert('That is incorrect, in fact I own several pairs that I swap between');
  }
  else {
    alert('please answer yes or no');
    questionThree();
  }
}

function questionFour(){

  let questionPronouns = prompt('Does Tai use He/him Pronouns?').toLowerCase();

  if (questionPronouns === 'y' || questionPronouns === 'yes') {
    alert('That is incorrect, I am non-binary and therefore use they/them');
  }

  else if (questionPronouns === 'n' || questionPronouns === 'no') {
    alert('That is correct, I in fact use them/them pronouns. Thanks for remembering.');
    ansCt++;
  }
  else {
    alert('please answer yes or no');
    questionFour();
  }
}

function questionFive(){

  let questionWork = prompt('Did Tai used to work as an Optician?').toLowerCase();

  if (questionWork === 'y' || questionWork === 'yes') {
    alert('That is incorrect, I used to work as a medical technician, an optician is the one that sells and fits glasses');
  }

  else if (questionWork === 'n' || questionWork === 'no') {
    alert('That is correct, I was a medical technician.');
    ansCt++;
  }
  else {
    alert('please answer yes or no');
    questionFive();
  }
}

function questionSix(){

  alert(`Excellent work ${firstName}, I hope you are ready for some more fun games. Next we will be guessing a number between 1-10. You have 4 chances.`);

  let mysteryNumber = Math.floor(Math.random() * 10 + 1);
  console.log(mysteryNumber);
  let guesses = 4;
  let correctNum = false;

  while (guesses && !correctNum) {
    let myGuess = prompt('Ok I\'ve come up with a number between 1 and 10');

    alert('You think it was ' + myGuess + '?');
    guesses--;
    if (guesses === 0) {
      alert(`The correct answer was ${mysteryNumber}`);
    }
    else if (+myGuess === mysteryNumber) {
      correctNum = true;
      ansCt++;
      alert(`congrats! it was in fact ${mysteryNumber}`);
    } else if (mysteryNumber < myGuess) {
      alert(`Sorry ${firstName}, ${myGuess} is too high, try again. You have ${guesses} guesses remaining.`);
    } else if (mysteryNumber > myGuess) {
      alert(`Sorry ${firstName}, ${myGuess} is too low, try again. You have ${guesses} guesses remaining.`);
    } else if (typeof myGuess === 'string' || myGuess instanceof String) {
      alert(`You know that you need to actually enter in a number, by the way that counted as a guess, you have ${guesses} chances left.`);
    }
  }
}

let rainbow = ['YELLOW', 'CYAN', 'GREEN', 'INDIGO', 'VIOLET', 'BLACK'];
function questionSeven(){

  for (let i = 0; i <= 6; i++) {
    let colorGuess = prompt('I have a lot of colors that I enjoy, what do you think is one?').toUpperCase();
    console.log(colorGuess);
    if (rainbow[0] === colorGuess || rainbow[1] === colorGuess || rainbow[2] === colorGuess || rainbow[3] === colorGuess || rainbow[4] === colorGuess || rainbow[5] === colorGuess) {
      ansCt++;
      i = 6;
    }
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
alert(`I really enjoy these colors ${rainbow}`);


alert('Thank you for playing my guessing game ' + firstName + ' you got ' + ansCt + ' of 7 correct. Here is a little bit more about me!');



'use strict';

let ansCt = 0;

let firstName = prompt('Hello! What is your name?');
//console.log(firstName);
alert('Before we learn more about me ' + firstName + ', I\'d like to play a little guessing game.');

let questionVideoGames = prompt('Do you think Tai likes video games?').toLowerCase();

if (questionVideoGames === 'y' || questionVideoGames === 'yes') {
  alert('That is correct, I adore them as one of my main entertainment staples');
  ansCt++;
  // console.log('They answered ' + questionVideoGames + ' this is correct');
}

else if (questionVideoGames === 'n' || questionVideoGames === 'no') {
  alert('That is incorrect, video games are cool!');
  // console.log('They answered ' + questionVideoGames + ' this is incorrect');
}
else {
  alert('please answer yes or no');
}

let questionFamily = prompt('Does Tai have a small family?').toLowerCase();

if (questionFamily === 'n' || questionFamily === 'no') {
  alert('That is correct, I have many siblings and my extended family is even bigger. Almost 100+ people');
  ansCt++;
  // console.log('They answered ' + questionFamily + ' this is correct');
}

else if (questionFamily === 'y' || questionFamily === 'no') {
  alert('That is incorrect, my family is so large we have to rent a whole park out for reunions!');
  // console.log('They answered ' + questionFamily + ' this is incorrect');
}
else {
  alert('please answer yes or no');
}


let questionGlasses = prompt('Does Tai wear Glasses?').toLowerCase();

if (questionGlasses === 'y' || questionGlasses === 'yes') {
  alert('That is correct, I wear them almost all the time, but I also wear contacts.');
  ansCt++;
  // console.log('They answered ' + questionGlasses + ' this is correct');
}

else if (questionGlasses === 'n' || questionGlasses === 'no') {
  alert('That is incorrect, in fact I own several pairs that I swap between');
  // console.log('They answered ' + questionGlasses + ' this is incorrect');
}
else {
  alert('please answer yes or no');
}

let questionPronouns = prompt('Does Tai use He/him Pronouns?').toLowerCase();

if (questionPronouns === 'y' || questionPronouns === 'yes') {
  alert('That is incorrect, I am non-binary and therefore use they/them');
  // console.log('They answered ' + questionPronouns + ' this is incorrect');
}

else if (questionPronouns === 'n' || questionPronouns === 'no') {
  alert('That is correct, I in fact use them/them pronouns. Thanks for remembering.');
  ansCt++;
  // console.log('They answered ' + questionPronouns + ' this is correct');
}
else {
  alert('please answer yes or no');
}

let questionWork = prompt('Did Tai used to work as an Optician?').toLowerCase();

if (questionWork === 'y' || questionWork === 'yes') {
  alert('That is incorrect, I used to work as a medical technician, an optician is the one that sells and fits glasses');
  // console.log('They answered ' + questionWork + ' this is incorrect');
}

else if (questionWork === 'n' || questionWork === 'no') {
  alert('That is correct, I was a medical technician.');
  ansCt++;
  // console.log('They answered ' + questionWork + ' this is correct');
}
else {
  alert('please answer yes or no');
}
alert(`Excellent work ${firstName}, I hope you are ready for some more fun games. Next we will be guessing a number between 1-10. You have 4 chances.`);

//Set number for guessing. Math.random() * 10 sets num 0-9 due to counting starting at 0. add 1 makes it 1-10.
let mysteryNumber = Math.floor(Math.random() * 10 + 1);
// Log number for my viewing
console.log(mysteryNumber);
//Set number of guesses
let guesses = 4;
// Set win condition to false
let correctNum = false;

// While #guesses and win condion !setwinconditon run loop
while (guesses && !correctNum) {
  // let myGuess = prompt('Who is kinda sus?')
  let myGuess = prompt('Ok I\'ve come up with a number between 1 and 10');

  alert('You think it was ' + myGuess + '?');
  // subtract number of guesses
  guesses--;
  // check for win condition and if they are correct set winc ondition true to cause while contion to be false to stop function
  if (guesses === 0) {
    alert(`The correct answer was ${mysteryNumber}`);
  }
  else if (+myGuess === mysteryNumber) {
    correctNum = true;
    ansCt++;
    // Give win message
    alert(`congrats! it was in fact ${mysteryNumber}`);
  } else if (mysteryNumber < myGuess) {
    alert(`Sorry ${firstName}, ${myGuess} is too high, try again. You have ${guesses} guesses remaining.`);
  } else if (mysteryNumber > myGuess) {
    alert(`Sorry ${firstName}, ${myGuess} is too low, try again. You have ${guesses} guesses remaining.`);
  } else if (typeof myGuess === 'string' || myGuess instanceof String) {
    alert(`You know that you need to actually enter in a number, by the way that counted as a guess, you have ${guesses} chances left.`);
  }
}

let rainbow = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET'];
let colorAns = rainbow[5];
let colorAns2 = rainbow[3];
for (let i = 0; i <= 6; i++) {
  let colorGuess = prompt(`Which of these colors do I like? ${rainbow}`).toUpperCase();
  console.log(colorGuess);
  if (colorAns === colorGuess || colorAns2 === colorGuess) {
    ansCt++;
    i = 6;
  }
}

alert(`I really enjoy ${rainbow[5]} and ${rainbow[3]}`);


alert('Thank you for playing my guessing game ' + firstName + ' you got ' + ansCt + ' of 7 correct. Here is a little bit more about me!');


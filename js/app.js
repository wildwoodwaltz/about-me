'use strict';

let ansCt = 0;

let firstName = prompt('Hello! What is your name?');
//console.log(firstName);
alert('Before we learn more about me ' + firstName + ', I\'d like to play a little guessing game.');

function questionOne() {
  // prompt
  let questionVideoGames = prompt('Do you think Tai likes video games?').toLowerCase();

  if (questionVideoGames === 'y' || questionVideoGames === 'yes' ) {
    alert('That is correct, I adore them as one of my main entertainment staples');
    let ansCt = ansCt++; 
    // console.log('They answered ' + questionVideoGames + ' this is correct');
  }

  else if (questionVideoGames === 'n' || questionVideoGames === 'no') {
    alert('That is incorrect, video games are cool!');
    // console.log('They answered ' + questionVideoGames + ' this is incorrect');
  }
  else {
    alert('please answer yes or no');
    questionOne();
  }
}

questionOne();

function questionTwo() {
  // prompt
  let questionFamily = prompt('Does Tai have a small family?').toLowerCase();

  if (questionFamily === 'n' || questionFamily === 'no' ) {
    alert('That is correct, I have many siblings and my extended family is even bigger. Almost 100+ people');
    let ansCt = ansCt++; 
    // console.log('They answered ' + questionFamily + ' this is correct');
  }

  else if (questionFamily === 'y' || questionFamily === 'no') {
    alert('That is incorrect, my family is so large we have to rent a whole park out for reunions!');
    // console.log('They answered ' + questionFamily + ' this is incorrect');
  }
  else {
    alert('please answer yes or no');
    questionTwo();
  }
}

questionTwo();

function questionThree() {

  let questionGlasses = prompt('Does Tai Like Video Games?').toLowerCase();

  if (questionGlasses === 'y' || questionGlasses === 'yes' ) {
    alert('That is correct, ');
    let ansCt = ansCt++; 
    // console.log('They answered ' + questionGlasses + ' this is correct');
  }

  else if (questionGlasses === 'n' || questionGlasses === 'no') {
    alert('That is incorrect, video games are cool!');
    // console.log('They answered ' + questionGlasses + ' this is incorrect');
  }
  else {
    alert('please answer yes or no');
    questionThree();
  }
}

questionThree();

function questionFour() {
  // prompt
  let questionPronouns = prompt('Does Tai use He/him Pronouns?').toLowerCase();

  if (questionPronouns === 'y' || questionPronouns === 'yes' ) {
    alert('That is incorrect, I am non-binary and therefore use they/them');
    // console.log('They answered ' + questionPronouns + ' this is incorrect');
  }

  else if (questionPronouns === 'n' || questionPronouns === 'no') {
    alert('That is correct, I in fact use them/them pronouns. Thanks for remembering.');
    let ansCt = ansCt++; 
    // console.log('They answered ' + questionPronouns + ' this is correct');
  }
  else {
    alert('please answer yes or no');
    questionFour();
  }
}

questionFour();

function questionFive() {

  let questionWork = prompt('Did Tai used to work as an Optician?').toLowerCase();

  if (questionWork === 'y' || questionWork === 'yes' ) {
    alert('That is incorrect, I used to work as a medical technician, an optician is the one that sells and fits glasses');
    // console.log('They answered ' + questionWork + ' this is incorrect');
  }

  else if (questionWork === 'n' || questionWork === 'no') {
    alert('That is correct, I was a medical technician.');
    let ansCt = ansCt++; 
    // console.log('They answered ' + questionWork + ' this is correct');
  }
  else {
    alert('please answer yes or no');
    questionFive();
  }
}

questionFive();

alert('Thank you for playing my guessing game ' + firstName + ' you got ' + ansCt + ' of 7 correct. Here is a little bit more about me!');


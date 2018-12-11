//Main JS code will go here

//Creates the array of US Presidents 
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Jackson", "Harrison", "Tyler", "Polk", "Taylor",
    "Fillmore", "Pierce", "Buchanan", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "Harrison", "McKinley",
    "Taft", "Wilson", "Harding", "Coolidge", "Hoover", "Roosevelt", "Truman", "Eisenhower", "Kennedy", "Johnson",
    "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Obama", "Trump"];

//Create variables for tracking 
var guessingWordText = document.getElementById("guessing-word");
var correctLetters = [];
var incorrectLetters = [];
var maxGuesses = 5;
var currentWord = document.getElementById("current-word");
var currentWordText = document.getElementById("currentword-text");
var wins = 0;
var remainingGuesses = 0;
var correctGuess = document.getElementById("correct-letters");
var incorrectGuess = document.getElementById("incorrect-letters");
var wrongLetters = [];
var splitWord = [];
var replaceText = document.getElementById("replace-text");
var guessingWord = [];

//Load computer word before the guesses begin
var currentWord = presidents[Math.floor(Math.random() * presidents.length)];
var currentWord = currentWord.toLowerCase();
console.log(currentWord);

//Display _ _ _ _ _ for the number of characters in the name 


 // Build the guessing word and clear it out
 for (var l = 0; l < currentWord.length; l++) {
    guessingWord.push("_");
}   
console.log(guessingWord);

//Check the user guess against the current word 
//All lowercase .toLowerCase 
// function splitWords() {
    var splitWord = currentWord.split("");
    console.log(splitWord);

//onkeyevent to track users key strokes
document.onkeyup = function (event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    var i;
    for (i = 0; i < splitWord.length; i++) {
        if (guessedLetters.includes(splitWord[i])) {
        (correctLetters[i] = splitWord[i]);
        } (correctGuess.textContent = "The answer is " + correctLetters);
    };
}
    // var j;
    // for (j = 0; j < splitWord.length; j++) {
    //     if (guessedLetters.includes(splitWord[j])) {
    //     incorrectLetters[j] = !splitWord[j];
    //     } incorrectGuess.textContent = "The incorrect letters are " + incorrectLetters;
    // }; 


// have an array that has each ch the user is trying to guess, and have an array of the letters the user has actually guessed, 
// and an empty array loop through the letters that they are guessing
//and we check if it's there, then plug it in the empty array... put this in index 2 in the array

//Array of the current word 

//If correct (true), log the letter in the correct variable 

//If incorrect (false), log the letter in the "already guessed" variable AND subtract from the number of guesses available

//If that letter was already guessed, it does not effect the game

//When the word is guessed correctly, display something to show that it was won 

//When run out of guesses, display something to show that it was a loss

//After the user wins/loses the game should automatically choose another word and make the user 

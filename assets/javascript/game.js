//Main JS code will go here



//Creates the array of US Presidents 
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Jackson", "Van-Buren", "Harrison", "Tyler", "Polk", "Taylor",
    "Fillmore", "Pierce", "Buchanan", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "Harrison", "McKinley",
    "Taft", "Wilson", "Harding", "Coolidge", "Hoover", "Roosevelt", "Truman", "Eisenhower", "Kennedy", "Johnson",
    "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Obama", "Trump"];

//Create variables for tracking 
var guessedLetters = [];
var correctLetters = [];
var maxGuesses = 5;
var currentWord = document.getElementById("current-word");
var currentWordText = document.getElementById("currentword-text");
var wins = 0;
var remainingGuesses = 0;
var currentWordLength = document.getElementById("current-word-length");
var correctGuess = document.getElementById("correct-letters");

//Load computer word before the guesses begin
var currentWord = presidents[Math.floor(Math.random() * presidents.length)];
var currentWord = currentWord.toLowerCase();
    console.log(currentWord);

//Display _ _ _ _ _ for the number of characters in the name
var currentWordLength = currentWord.length;
    console.log(currentWordLength);
currentWordText.textContent = "The length of the word is " + currentWordLength;

//onkeyevent to track users key strokes
document.onkeyup = function (event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);

    var i;
    for (i = 0; i < splitWord.length; i++) { 
    if (guessedLetters.includes(splitWord[i])) 
        {correctLetters[i] = splitWord[i];
    } correctGuess.textContent = "The guessed letter is " + correctLetters;
};
    console.log(userGuess);
};

//Check the user guess against the current word 
//All lowercase .toLowerCase 
function splitWords() {
    var splitWord = currentWord.split("");
    console.log(splitWord);
};

splitWords();

//If guess matches, display in other location, random order 
// have an array that has each ch the user is trying to guess, and have an array of the letters the user has actually guessed, 
// and an empty array loop through the letters that they are guessing
//and we check if it's there, then plug it in the empty array... put this in index 2 in the array

//Array of the current word 
//var splitWord 




//Array of the guesses
var guessedLetters = splitWord.includes();


//Array of the wrong guesses
var wrongLetters = [];


//If correct (true), log the letter in the correct variable 

//If incorrect (false), log the letter in the "already guessed" variable AND subtract from the number of guesses available

//If that letter was already guessed, it does not effect the game

//When the word is guessed correctly, display something to show that it was won 

//When run out of guesses, display something to show that it was a loss

//After the user wins/loses the game should automatically choose another word and make the user play
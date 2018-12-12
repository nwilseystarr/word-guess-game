//Main JS code will go here

//Creates the array of US Presidents 
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Jackson", "Harrison", "Tyler", "Polk", "Taylor",
    "Fillmore", "Pierce", "Buchanan", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "Harrison", "McKinley",
    "Taft", "Wilson", "Harding", "Coolidge", "Hoover", "Roosevelt", "Truman", "Eisenhower", "Kennedy", "Johnson",
    "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Obama", "Trump"];

//Create variables for tracking 
var blanks = document.getElementById("blanks");
var correctGuess = document.getElementById("correct-letters");
var correctLetters = [];
var currentWord = document.getElementById("current-word");
var currentWordText = document.getElementById("currentword-text");
var guessedLetters = [];
var guessingWord = [];
var guessingWordText = document.getElementById("guessing-word");
var incorrectGuess = document.getElementById("incorrect-letters");
var incorrectLetters = [];
var maxGuesses = 5;
var remainingGuesses = 0;
var replaceText = document.getElementById("replace-text");
var splitWord = [];
var wins = 0;
var wrongLetters = [];

//Load word to guess before the user begins guessing
var currentWord = presidents[Math.floor(Math.random() * presidents.length)];
var currentWord = currentWord.toLowerCase();
console.log(currentWord);

//Display _ _ _ _ _ for the number of characters in the name, before a keystroke
 for (var l = 0; l < currentWord.length; l++) {
    guessingWord.push("_"); {
        (blanks.textContent = guessingWord);
    };
}   

//Splitting the word into a string of separate letters
var splitWord = currentWord.split("");
console.log(splitWord);

//onkeyevent to track users key strokes
document.onkeyup = function (event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    //Checks the current letter guessed against the array
    var correctLetters = splitWord.includes(userGuess);
    //console logs the letter guessed
    console.log(userGuess); 
    //Displys the boolean of True or false, changes with each keystroke
    (correctGuess.textContent = "The answer is " + correctLetters);
}

//Need if else statement. 
//================================================
//If the guess is true display it at the proper index in the correctLetters array. ??Need additional 

//Else, log display it in the "incorrectGuess" array

// have an array that has each ch the user is trying to guess, and have an array of the letters the user has actually guessed, 
// and an empty array loop through the letters that they are guessing
//and we check if it's there, then plug it in the empty array... put this in index in the array

//Array of the current word 

//If correct (true), log the letter in the correct variable 

//If incorrect (false), log the letter in the "already guessed" variable AND subtract from the number of guesses available

//If that letter was already guessed, it does not effect the game

//When the word is guessed correctly, display something to show that it was won 

//When run out of guesses, display something to show that it was a loss

//After the user wins/loses the game should automatically choose another word and make the user 

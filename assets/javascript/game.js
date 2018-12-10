//Main JS code will go here
//



//Creates the array of US Presidents 
//Does each word have to be a string?
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Jackson", "Van-Buren", "Harrison", "Tyler", "Polk", "Taylor", 
"Fillmore", "Pierce", "Buchanan", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "Harrison", "McKinley",
"Taft", "Wilson", "Harding", "Coolidge", "Hoover", "Roosevelt", "Truman", "Eisenhower", "Kennedy", "Johnson", 
"Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Obama", "Trump"];

//Create variables for tracking 
var guessLetters = [];
var maxGuesses = 5;
var currentWord = document.getElementById("current-word");
var currentWordLength = document.getElementById("current-word-length");
var currentWordText = document.getElementById("current-word-text");

//Load computer word before the guesses begin
var currentWord = presidents[Math.floor(Math.random() * presidents.length)];
console.log(currentWord);

//Display _ _ _ _ _ for the number of characters in the name
var currentWordLength = currentWord.length;
console.log(currentWordLength);
// currentWordText.textContent = ("The length of the word is " + currentWordLength);

//onkeyevent to track users key strokes
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
};

//Check the user guess against the current word 


//Will need a for loop and the .length for the string

//If correct (true), log the letter in the correct variable 

//If incorrect (false), log the letter in the "already guessed" variable AND subtract from the number of guesses available

//If that letter was already guessed, it does not effect the game

//When the word is guessed correctly, display something to show that it was won 

//When run out of guesses, display something to show that it was a loss

//After the user wins/loses the game should automatically choose another word and make the user play
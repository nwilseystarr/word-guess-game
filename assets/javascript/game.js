//Main JS code will go here

//Creates the array of US Presidents 
var presidents = ["Washington", "Madison", "Monroe", "Jackson", "Tyler", "Polk", "Taylor",
     "Pierce", "Buchanan", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "McKinley",
     "Wilson", "Harding", "Truman", "Johnson",
    "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Obama", "Trump"];
    // "Fillmore","Hoover","Eisenhower", "Kennedy", "Harrison", "Jefferson", "Coolidge","Taft","Adams", "Roosevelt", "Harrison",

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
var incorrectLetter = [];
var maxGuesses = 5;
var remainingGuesses = 0;
var replaceText = document.getElementById("replace-text");
var splitWord = [];
var wins = 0;
var winsText = document.getElementById("wins");


//Load word to guess before the user begins guessing
var currentWord = presidents[Math.floor(Math.random() * presidents.length)];
var currentWord = currentWord.toLowerCase();
console.log(currentWord);

//Display _ _ _ _ _ for the number of characters in the name, before a keystroke
for (var i = 0; i < currentWord.length; i++) {
    correctLetters.push("_"); {
        (blanks.textContent = correctLetters);
    }
}
    //Splitting the word into a string of separate letters
    var splitWord = currentWord.split("");
    console.log(splitWord);

    //onkeyevent to track users key strokes
    document.onkeyup = function (event) {
        var userGuess = event.key;
        guessedLetters.push(userGuess);

        //Checks the current letter guessed against the array
        if (splitWord.includes(userGuess)) {
            // correctLetters.push(userGuess);
            var splitWordIndex = splitWord.indexOf(userGuess);
            if (correctLetters[splitWordIndex] !== "_"){
                splitWordIndex = splitWord.indexOf(userGuess, 4);
                //Line above is not filling all indicies of the array
            }
                correctLetters[splitWordIndex]=userGuess;
            // correctGuess.textContent = "The correct letters are " + correctLetters.toString();
        } else {
            incorrectLetter.push(userGuess);
            incorrectGuess.textContent = "The incorrect letters are " + incorrectLetter.toString();
        }

    blanks.textContent = correctLetters;
    
    //Check for win 
  function win(){
      if (correctLetters.indexOf("_") === -1) {
          wins++;
          winsText.textContent =  "Wins: " + wins;
          hasFinished = true;
      }
    };
    win()
}
//Check for loss 
    //Function "loss" for if the user has 5 or more incorrect guesses 

//Reset game 
    // Pick a new word  

    //Continue to update the wins and losses so long as the user stays on the page

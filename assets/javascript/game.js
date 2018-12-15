//Main JS code will go here

//Creates the array of US Presidents 
var presidents = ["Madison", "Monroe", "Jackson", "Tyler", "Polk", "Taylor",
     "Pierce", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "McKinley",
     "Wilson", "Harding", "Truman", "Johnson",
    "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Obama", "Trump"];
    // Words below don't work at the moment due to multiple of the same letter
        //"Washington", "Buchanan", "Fillmore","Hoover","Eisenhower", "Kennedy", "Harrison", "Jefferson", "Coolidge","Taft","Adams", "Roosevelt", "Harrison",

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
var losses = 0;
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var hasFinished = false; 
var maxGuessesText = document.getElementById("remaining-guesses");


//Load word to guess before the user begins guessing
var currentWord = presidents[Math.floor(Math.random() * presidents.length)];
var currentWord = currentWord.toLowerCase();
console.log(currentWord);

//Display _ _ _ _ _ for the number of characters in the name, before a keystroke
for (var i = 0; i < currentWord.length; i++) {
        correctLetters.push("_"); {
        (blanks.textContent = correctLetters);
        }
};

//Splitting the word into a string of separate letters
var splitWord = currentWord.split("");
console.log(splitWord);

//onkeyevent to track users key strokes
document.onkeyup = function (event) {
    var userGuess = event.key;
    //add code to ensure all user input is lowercase 
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
            incorrectGuess.textContent = "Incorrect letters: " + incorrectLetter.toString();
            maxGuesses--;
            maxGuessesText.textContent = "You have " + maxGuesses + " guesses left.";
        }
        // console.log(maxGuesses);

    blanks.textContent = correctLetters;
    
    function capitalize_Words(str)
    {
     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    //Check for win 
    function win(){
            if (correctLetters.indexOf("_") === -1) {
            alert("You win! Answer was President " + capitalize_Words(currentWord) + "! Reload the page to play again!");
            //onkeypress alert that you've won refresh the page    
            // wins++;
            // winsText.textContent =  "Wins: " + wins;
            // hasFinished = true;
            // }
            }
        };
        win()

//Check for loss 
    //Function "loss" for if the user has 5 or more incorrect guesses
    function loss(){
            if (maxGuesses < 1) {
            alert("You lose! Answer was President " + capitalize_Words(currentWord) + "! Reload the page to try again!");
            //onkeypress alert that you've lost and refresh page see if theres a window.reload or something   
            // losses++;
            // lossesText.textContent = "Losses: " + losses;
            // hasFinished = true;
            }
        };
        loss()    
}

//Disable onkey if 

//New Word Button to reset game - doesn't work yet
    // function reset(){
    //         currentWord = [];
    //         splitWordIndex = [];
    //         correctLetters = [];
    //         maxGuesses = 5;
    //         console.log("reset function running")
    // }

    // document.getElementById("reset-btn").addEventListener("click", reset);   
    //if the user guesses all the letters +1 to the wins number, reset the split word, and rest the number of guesses
    //else if number of guesses = 0, +1 to the losses number, reset the split word, and rest the number of guesses